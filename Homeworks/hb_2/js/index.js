// import { cloneDeep } from '/lodash';

console.log("Hello, World!");

let buttons = document.getElementsByClassName('button');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('dblclick', function(){
        console.log('the button was clicked', this);
    });
}

// let user1 = {
//     firstname : "John",
//     lastname: "Sanders",
//     bills: {
//         chain: 500.12,
//         desk: 23.125
//     },
// };

// let user2 = cloneDeep();

// console.log(user1, user2);