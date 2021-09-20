const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let openbox = (id) => {
  let display = document.getElementById(id).style.display;  
   
    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }

}
console.log(`1) вёрстка валидная +10, 
2) вёрстка семантическая +20, 
3) css +10(+1 бал за каждый стилизованный элемент, у меня их больше 10), 
4) контент в середине, фон тянется +10, 
5) вёрстка адаптивная до 320px +10,
6) есть адаптивное бургер-меню +10,
7) есть моё фото, размеры не искажены и есть alt +10,
8) контакты для связи и перечень навыков в 'ul' +10,
9) есть информация для связи, перечень навыков, образование, уровень английского +10,
10) содержит пример моего кода +10,
11) содержит мои работы с содержанием и ссылки на них +10,
12) CV на английском +10,
13) выполнены требования Pull Request +10,
14) дизайн не хуже чем у работ из примера +10`)






