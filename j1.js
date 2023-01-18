// const btn = document.getElementById('modeBtn');
function func(e) {
    const btn = document.getElementById('modeBtn');
    const body = document.body;
    //e.target就是鼠标点击的对象的父元素，innerHTML就是里面的text内容。
    if (e.target.innerHTML === '☀') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        e.target.innerHTML = "🌙";
    } else {
body.style.backgroundColor = 'white';
body.style.color = 'black';
e.target.innerHTML = '☀';
}
btn.addEventListener('click',  func(e));
}
// btn.addEventListener('click',  func(e));