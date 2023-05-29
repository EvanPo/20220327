const sayHi = () => {
    let name = document.querySelector('#name');
    //no
    if (!name) {
        alert('No Input');
        return;
    }

    if (!name.value) {
        alert('Fill the name');
        name.focus()
        return
    }

    let response = document.querySelector('#response');
    response.innerHTML = `Hello!, ${name.value}`;
    name.value = '';
    name.focus();
}


let hi = document.querySelector('#hi');

hi.addEventListener('click', sayHi);



let name = document.querySelector('#name');

name.addEventListener('change', () => {
    if (!name.value) {
        alert('Please fill in the name');
        name.focus();
    }
})

name.addEventListener('blur', () => {
    console.log(`blur: ${name.value}`);
})
name.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        sayHi();
    }
})