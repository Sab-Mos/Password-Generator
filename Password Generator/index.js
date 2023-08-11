const passwordBox = document.querySelector('#password');
const button = document.querySelector('.btn');
const image = document.querySelector('.copy-link');
const length = 12;
const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase ='abcdefghijklmnopqrstuvwxyz';
const number ='0123456789';
const symbol = "@#$%^&*()_+~|}{[]><-=";

const allChars = upperCase + lowerCase + number + symbol;
button.addEventListener('click', () => {let password = "";

while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
}
passwordBox.value = password;

})

image.addEventListener('click', () => {
 passwordBox.select();
 document.execCommand('copy');
})



