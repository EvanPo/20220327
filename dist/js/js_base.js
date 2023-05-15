let age = 20;
let firstname = 'Evan';
let lastname = 'Po';
let country = 'Taiwan';

console.log('(' + country + ') ' + firstname + ' ' + lastname);

console.log(`(${country}) ${firstname} ${lastname}`);

let num1 = 1;
let num2 = 1.2;
let num3 = num1 + num2;
let num4 = '10';
let num5 = num1 + num4;
let num6 = num1 - num4;
let num7 = num1 * num4;
let num8 = num1 / num4;
let num9 = num1 % num4;
let num10 = num1 + 'a';
console.log(num1, num2, num3, typeof num4, num5, num6, num7, num8, num9, num10);

let num11 = parseInt(num1, 10) + parseInt(num4, 10);
let num12 = +num1 + +num4;
let num13 = +num1 + +'a';
console.log(num11, num12, num13);

let s1 = 'S1 \t S1';

let s2 = "S2 \t S2";

console.log(s1);
console.log(s2);

console.log(num1, num1.toString(), typeof num1, typeof num1.toString());


let b1 = true;
let b2 = false;
let b3 = 1;
let b4 = 0;
let b5 = 's';
let b6 = '';
let b7 = -1;
let b8 = 2;

if (b7) {
    console.log('Yes');
} else {
    console.log('No');
}


let student = [1, 2, 3, 4]
console.log(student);

student.push(5);
console.log(student);

console.log(student[0]);
console.log(student.join('::'));

let index = student.indexOf(2);
console.log(index);

student.splice(index, 1);
console.log(student);

let nums = [40, 50, 80, 75];

console.log('調整前');
nums.forEach((snum, index) => {
    console.log(`第 ${index + 1} 位學生: ${snum}`);
    nums[index] = snum + 20;
})

console.log('調整後');
nums.forEach((snum, index) => {
    console.log(`第 ${index + 1} 位學生: ${snum}`);
});

let students100 = [];
for (let sindex = 0; sindex < 100; sindex++) {
    students100[sindex] = Math.ceil(Math.random() * 100);
}

console.table(students100);

const a1 = function () {
    console.log('Origin function');
}

const a2 = () => {
    console.log('Arror function');
}

nums.forEach(function (snum, index) {
    console.log(`第 ${index + 1} 位學生: ${snum}`);
})

const add20 = function (snum, index) {
    console.log(`具名函數--第 ${index + 1} 位學生: ${snum + 20}`);
}

nums.forEach(add20);


const addNum = (originNum, addNum) => {
    originNum = +originNum;
    addNum = +addNum;
    let total = originNum + addNum;
    console.log(`In function: ${total}`);
    return total;
}

let students = []
students.push({
    Name: 'Evan',
    Num: 80
});

students.push({
    Name: 'Gina',
    Num: 85
});

students.push({
    Name: 'Rick',
    Num: 50
});

students.push({
    Name: 'Kim',
    Num: 40
});

students.push({
    Name: 'Tim',
    Num: 70
});

let: add = 15;
students.forEach((student, index) => {
    console.log(`Student ${student.name}: ${student.num}`);
    student.num = addNum(student.Num, add);
    students[index] = student;
})

console.table(students);

console.log('九九乘法表');
for (let start = 1; start <= 9; start++) {
    for (let end = 1; end <= 9; end++) {
        console.log(`${start} * ${end} = ${start * end}`)
    }
}