const button = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const active = document.querySelector('.active');

button.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})

if(window.outerWidth >= 900){
    sidebar.classList.remove('active')
}
