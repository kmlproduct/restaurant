document.getElementById('hamberger').onclick = function () {
    document.getElementById('menu').classList.toggle('show-menu')
}
const categorys = document.querySelectorAll('.category')
for (var i = 0; i < categorys.length; i++) {
    categorys[i].onmouseover = function () {
        this.classList.toggle('active')
    }
    categorys[i].onmouseout = function () {
        this.classList.remove('active')
    }

}