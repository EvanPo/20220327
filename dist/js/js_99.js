let main = document.querySelector('#main');
console.log(main);

main.innerHTML = 'Super man';
//main.innerHTML = 'Super man';


let lis = document.querySelectorAll('#menu li');
console.log(lis);

let num1 = document.querySelector('#num-1');
let showBtn = document.querySelector('#show-btn');

num1.value = '...........'

showBtn.addEventListener('click', () => {
    num1.value = '1234567'
});