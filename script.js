let A = document.getElementById('A');
let S = document.getElementById('sokutei');
S.style.display = 'none'
let ookisa = 200;
let hayasa = 60;
function haya() {
    S.style.display = 'block';
    if (hayasa <= 10) {
        ookisa = ookisa * 1.05;
        A.style.width = ookisa + 'px';
    }
    if (hayasa <= 1) {
        S.innerHTML = '<h2 id="sokutei">カタツムリの速さレベルMAX</h2>';
        A.style.animationDuration = '0.01s';
    }else {
        hayasa--;
        A.style.animationDuration = hayasa + 's';
        S.innerHTML = '<h2 id="sokutei">カタツムリの速さレベル' + (60 - hayasa) +  '</h2>';
    }
}
