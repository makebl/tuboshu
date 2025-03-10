window.addEventListener('DOMContentLoaded', () => {
    window.myApi.getConfig().then(config => {
        updateMenu(config.openMenus, 'nav-box');
        updateMenu(config.setMenus, 'set-box');

        const navWrapper = document.getElementById('nav-wrapper');
        navWrapper.addEventListener('click', handleNavItemClick);
    });
    window.myApi.autoClick(autoNavItemClick);
})

function updateMenu(menu, pid) {
    const navBox = document.getElementById(pid);
    navBox.innerHTML="";
    menu.forEach(item => {
        const navItem = `           
            <div class="nav-item" data-url="${item.url}" data-tag="${item.tag}">
                <div class="logo">
                    <img src="${item.img}" alt="${item.tag}">
                </div>
            </div>
        `;
        navBox.innerHTML += navItem;
    });
}

function handleNavItemClick(event) {
    const highlightedItems = event.currentTarget.querySelectorAll(".highlighted");
    highlightedItems.forEach(item => item.classList.remove('highlighted'));

    let element = event.target;
    while (element && element !== event.currentTarget) {
        if (element.classList.contains('nav-item')) {
            element.classList.add('highlighted');
            window.myApi.openUrl(element.dataset.url, element.dataset.tag);
            break;
        }
        element = element.parentNode;
    }
}

function autoNavItemClick(data) {
    const navBox = document.getElementById('nav-wrapper');
    const navItems = navBox.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.dataset.tag === data.tag) {
            item.classList.add('highlighted');
        } else {
            item.classList.remove('highlighted');
        }
    });
}

