const toLevel
    = (number) => {
        // >= 90 A
        if (number >= 90) {
            return 'A';
        }
        // >= 80 B
        if (number >= 80) {
            return 'B';
        }
        // >= 70 C
        if (number >= 70) {
            return 'C';
        }
        // >= 60 D
        if (number >= 60) {
            return 'D';
        }
        // < 60 Fail
        return 'Fail';
    }


const calcLevel = () => {
    let number = document.querySelector('#number');

    if (!number) {
        alert('Nothing');
        return;
    }

    if (!number.value) {
        alert('Fill the number');
        return
    }

    let response = document.querySelector('#response');
    //修正為計算等級
    response.innerHTML = `Your level is: ${toLevel(number.value)}`;
    number.value = '';
    number.focus();
}


let level = document.querySelector('#level');

level.addEventListener('click', calcLevel);



number.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        calcLevel();
    }
})