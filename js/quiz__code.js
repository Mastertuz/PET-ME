const menuBtn = document.getElementById('#menu__btn');
const menuBtnList = document.getElementById('#menu__list');
const menuBtnLine = document.querySelectorAll('.burger-line');
menuBtn.addEventListener('click', () => {
    menuBtnList.classList.toggle('menu__list--active');
    menuBtnLine.forEach((item) => {
        item.classList.toggle('burger-line--active')
    })
});





window.onload = function () {
    let result = {};
    let step = 0;

    function showQuestion(questionNumber) {
        document.querySelector('.questions').innerHTML = quiz[step]['q'];
        let answers = '';
        for (let key in quiz[step]['a']) {
            answers += `<li data-v="${key}" class="answer-variant">${quiz[step]['a'][key]}</li>`
        }
        document.querySelector('.answers').innerHTML = answers;
    }
    document.onclick = function (e) {
        e.stopPropagation();
        if (e.target.classList.contains('answer-variant') && step < quiz.length) {
            // console.log(e.target);
            if (result[e.target.dataset.v] != undefined) {
                result[e.target.dataset.v]++;
            } else {
                result[e.target.dataset.v] = 0;
            }
            step++;
            if (step == quiz.length) {
                document.querySelector('.questions').remove();
                document.querySelector('.answers').remove();
                showResult();
            }
            else {
                showQuestion(step);
            }
        }
        console.log(result);
    }
    function showResult() {
        let key = Object.keys(result).reduce(function (a, b) {
            return result[a] > result[b] ? a : b
        });

        let div = document.createElement('div');
        div.classList.add('result');
        div.insertAdjacentHTML('afterbegin',
            answers[key]['result-title']
        );
        div.insertAdjacentHTML('beforeend', answers[key]['result-box'])
        document.querySelector('.quiz__inner').appendChild(div);
    }
    showQuestion(step);
}