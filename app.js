let btn = document.querySelector('.btn');
let search = document.querySelector('.search');
let input = document.querySelector('.input');

console.log(btn)
console.log(search)
console.log(input)
btn.addEventListener('click',()=>{
    search.classList.toggle('active');
    input.focus();

})