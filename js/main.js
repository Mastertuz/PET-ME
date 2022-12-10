const select = document.getElementById('#select');
const content1 = document.getElementById('#content1');
const content2 = document.getElementById('#content2');
const content3 = document.getElementById('#content3');
const content4 = document.getElementById('#content4');
const content5 = document.getElementById('#content5');
const changingContent = document.getElementById('#changing-content');
const menuBtn = document.getElementById('#menu__btn');
const menuBtnList = document.getElementById('#menu__list');
const menuBtnLine = document.querySelectorAll('.burger-line');
console.log(menuBtnLine);








select.addEventListener('change',()=>{
let options = select.value;
if(options == 'cat'){
    changingContent.innerHTML = content1.innerHTML;
} else if(options == 'dog'){
    changingContent.innerHTML = content2.innerHTML;
} else if (options == 'rodents'){
    changingContent.innerHTML = content3.innerHTML;
} else if (options == 'fish'){
    changingContent.innerHTML = content4.innerHTML;
}
else if (options == 'exotic'){
    changingContent.innerHTML = content5.innerHTML;
}
});


menuBtn.addEventListener('click',()=> {
    menuBtnList.classList.toggle('menu__list--active');
    menuBtnLine.forEach((item)=>{
        item.classList.toggle('burger-line--active')
    })
});




//  $('.menu__btn').on('click', function(){
//     $('.menu__list').toggleClass('menu__list--active');
//   $('.burger-line').toggleClass('burger-line--active');
//   });
