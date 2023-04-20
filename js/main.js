'use strict';

// Удаление всех символов из строки str кроме чисел
const getNumbers = (str) => str.replace(/\D+/g,"");
let name, sName, age, num, email;

function nameOnChange(val) {
    console.log(val);
    name = val;
}

function sNameOnChange(val) {
    console.log(val);
    sName = val;
}

function ageOnChange(val) {
    console.log(val);
    age = val;
}

function numOnChange(val) {
    console.log(val);
    num = val;
}

function emailOnChange(val) {
    console.log(val);
    email = val;
}

function btnOnClick() {
    console.log('name', name);
    console.log('sName', sName);
    console.log('age', age);
    console.log('num', num);
    console.log('email', email);


     console.log('type', typeof name );
    if (name === undefined ||  name.length < 2) {
        alert("не правильное имя");
        return;
    }

    console.log('type', typeof sName );
    if (sName === undefined ||  sName.length < 2) {
        alert("не правильная фамилия");
        return;
    }

    console.log('type', typeof age );
    if (age === undefined ||  +age < 1 ||+age > 130 ) {
        alert("не правильный возраст");
        return;
    } 


    console.log('type', typeof num );
    if ( num === undefined ||  num.length < 9 || num.length > 11 ) {
        alert("не правильный номер");
        return;
    }

    console.log('type', typeof email );
    if (email === undefined ||  email.length < 12 || email.length > 100 ) {
        alert("не правильный эмэйл");
        return;
    }





    
}
