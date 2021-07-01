document.getElementById('header-container').style.backgroundColor = '#00b069';
document.getElementById('footer-container').style.backgroundColor = '#003533'

let h3IWantPurple = document.getElementsByClassName('emergency-tasks')[0].getElementsByTagName('h3');
for (let i = 0; i < h3IWantPurple.length; i++) {
    h3IWantPurple[i].style.backgroundColor = '#a500f3';
}

let h3IWantBlack = document.getElementsByClassName('no-emergency-tasks')[0].getElementsByTagName('h3');
for (let i = 0; i < h3IWantBlack.length; i++) {
    h3IWantBlack[i].style.backgroundColor = '#232525';
}

// Da um pouco diferente, ele pinta cada div separado, e não a section como um todo
// let divIWantPink = document.getElementsByClassName('emergency-tasks')[0].getElementsByTagName('div');
// for (let key of divIWantPink) {
//     key.style.backgroundColor = '#ff9f84';
// }

let divIWantPink = document.getElementsByClassName('emergency-tasks');
for (let key of divIWantPink) {
    key.style.backgroundColor = '#ff9f84';
}

let divIWantYellow = document.getElementsByClassName('no-emergency-tasks');
for (let key of divIWantYellow) {
    key.style.backgroundColor = '#f9db5e';
}