const menu = document.querySelector(".menu");
console.log("loaded");

menu.addEventListener('click', () => {
    console.log("click");
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', `${!isExpanded}`);
});