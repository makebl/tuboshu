class Tuboshu_FloatingNav {
    static DEFAULT_CONFIG = {
        background: '#eee',
        opacity: 0.6,
        borderRadius: '8px',
        padding: '10px',
        gap: '8px',
        edgeMargin: 0,
        buttonSize: '30px',
        buttonRadius: '4px',
        buttonBackground: '#ffffff',
        buttonHover: '#f0f0f0',
        buttonColor: '#333333',
        buttons: [
            { icon: '←', action: () => history.back() },
            { icon: '→', action: () => history.forward() },
            { icon: '↻', action: () => location.reload() },
            { icon: '⌂', action: () => location.href = '/' }
        ],
        storageKey: '___NavState__'
    };

    constructor(config = {}) {
        this.config = { ...Tuboshu_FloatingNav.DEFAULT_CONFIG, ...config };
        this.navElement = null;
        this.isDragging = false;
        this.dragState = { x: 0, y: 0, offsetX: 0, offsetY: 0 };
        this.init();
    }

    init() {
        this.injectCSS(this.getInjectCss());
        this.createNav();
        this.applyStyles();
        this.applySavedState();
        document.body.appendChild(this.navElement);
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    createNav() {
        this.navElement = document.createElement('div');
        this.navElement.className = 'Tuboshu_floating-nav';

        this.config.buttons.forEach(btnConfig => {
            const btn = document.createElement('button');
            btn.className = 'Tuboshu_nav-btn';
            btn.innerHTML = btnConfig.icon;
            btn.addEventListener('click', btnConfig.action);
            this.navElement.appendChild(btn);
        });

        this.navElement.addEventListener('mousedown', (e) => this.startDrag(e));
    }

    applyStyles() {
        Object.assign(this.navElement.style, {
            background: this.config.background,
            opacity: this.config.opacity,
            borderRadius: this.config.borderRadius,
            padding: this.config.padding,
            gap: this.config.gap
        });

        Array.from(this.navElement.children).forEach(btn => {
            Object.assign(btn.style, {
                width: this.config.buttonSize,
                height: this.config.buttonSize,
                borderRadius: this.config.buttonRadius,
                background: this.config.buttonBackground,
                color: this.config.buttonColor
            });

            btn.addEventListener('mouseover', () =>
                btn.style.background = this.config.buttonHover);
            btn.addEventListener('mouseout', () =>
                btn.style.background = this.config.buttonBackground);
        });
    }

    startDrag(e) {
        if (e.target.tagName === 'BUTTON') return;
        e.preventDefault();
        this.isDragging = true;

        this.dragState = Object.assign(this.getBoundarySize(), {startX:e.clientX, startY:e.clientY});
        this.navElement.style.transition = 'none';
        this.navElement.style.willChange = 'transform';

        document.addEventListener('mousemove', this.handleDrag);
        document.addEventListener('mouseup', this.stopDrag);
    }

    handleDrag = (e) => {
        if (!this.isDragging) return;

        const dx = e.clientX - this.dragState.startX;
        const dy = e.clientY - this.dragState.startY;

        let newX = this.dragState.transX + dx;
        let newY = this.dragState.transY + dy;

        newX = Math.max(this.dragState.minX, Math.min(newX, this.dragState.maxX));
        newY = Math.max(this.dragState.minY, Math.min(newY, this.dragState.maxY));
        this.navElement.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    }

    stopDrag = (e) => {
        if (!this.isDragging) return;
        this.isDragging = false;

        const rect = this.navElement.getBoundingClientRect();
        const transX = (rect.left < this.dragState.maxX/2)? 0:this.dragState.maxX;

        Object.assign(this.navElement.style, {
            transform:`translate3d(${transX}px, ${rect.top}px, 0)`,
            transition:'none',
            willChange:''
        })

        this.saveState();
        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mouseup', this.stopDrag);
    }

    handleResize(){
        if (!this.navElement || this.isDragging) return;

        const rt = this.getBoundarySize();
        let currentX = (rt.transX === rt.minX) ? rt.minX : rt.maxX;
        let currentY = Math.max(rt.minY, Math.min(rt.transY, rt.maxY));

        Object.assign(this.navElement.style, {
            transform:`translate3d(${currentX}px, ${currentY}px, 0)`,
            transition:'none',
            willChange:''
        })
        this.saveState();
    }

    saveState() {
        const rt = this.getBoundarySize();
        localStorage.setItem(this.config.storageKey, JSON.stringify(rt));
    }

    applySavedState() {
        const rt = JSON.parse(localStorage.getItem(this.config.storageKey));
        if(!rt) {
            const initRt = this.navElement.getBoundingClientRect();
            const initX = window.innerWidth - initRt.width - this.config.edgeMargin;
            const initY = this.config.edgeMargin;

            Object.assign(this.navElement.style, {
                transform:`translate3d(${initX}px, ${initY}px, 0)`,
                transition:'none',
                willChange:''
            })
            return;
        };

        const newMaxX = window.innerWidth - rt.rect.width - this.config.edgeMargin;
        const newMaxY = window.innerHeight - rt.rect.height - this.config.edgeMargin

        let currentX = (rt.transX === rt.minX) ? rt.minX : newMaxX;
        let currentY = Math.max(rt.minY, Math.min(rt.transY, newMaxY));

        Object.assign(this.navElement.style, {
            transform:`translate3d(${currentX}px, ${currentY}px, 0)`,
            transition:'none',
            willChange:''
        })
    }

    getBoundarySize(){
        const rect = this.navElement.getBoundingClientRect();
        const transform = window.getComputedStyle(this.navElement).transform;
        const matrix = new DOMMatrix(transform);

        return {
            rect:rect,
            transX:matrix.m41,
            transY:matrix.m42,
            minX:this.config.edgeMargin,
            maxX:window.innerWidth - rect.width - this.config.edgeMargin,
            minY:this.config.edgeMargin,
            maxY:window.innerHeight - rect.height - this.config.edgeMargin
        }
    }

    injectCSS(css, callback) {
        const style = document.createElement('style');
        style.textContent = css;

        callback && (style.onload = callback);
        style.onerror = () => console.error('CSS注入失败');
        document.head.appendChild(style);
    }
    getInjectCss(){
        return `
        .Tuboshu_floating-nav {
            position: fixed;
            display: flex;
            flex-direction: column;
            transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform;
            z-index: 99999999;
            cursor: move;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 8px;
            padding: 5px;
            gap: 4px;
            transform: translate3d(0, 0, 0);
            box-sizing: border-box;
        }
        .Tuboshu_nav-btn {
            border: none;
            cursor: pointer;
            background: #fff;
            min-width: 20px;
            height: 20px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            padding: 0;
            font-size: 12px;
        }
        .Tuboshu_nav-btn:hover {
            transform: scale(1.1);
            opacity:1;
        }
        `
    }
}

new Tuboshu_FloatingNav({
    background: '#ccc',
    buttonBackground: '#e3f2fd',
    buttonHover: '#bbdefb',
});

