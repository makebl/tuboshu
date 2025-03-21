
export const throttleDirective = {
    mounted(el, binding) {
        const delay = binding.value || 2000;
        let timer = null;
        let originalHandler = null;

        originalHandler = el.__vueClickHandler__;
        if (!originalHandler) {
            originalHandler = el.onclick;
        }

        el.addEventListener('click', () => {
            if (!timer) {
                timer = setTimeout(() => {
                    timer = null;
                }, delay);
                if (originalHandler) originalHandler();
            }
        });
    },

    unmounted(el) {
        clearTimeout(el._throttleTimer);
    }
};