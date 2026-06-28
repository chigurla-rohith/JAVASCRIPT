
let button =document.getElementById("btn");
let heading= document.getElementById("title");
let message=document.getElementById("message");

button.onclick= function card()
 {
    
   heading.style.color="red ";
   message.style.backgroundColor ="yellow ";
    message.innerHTML = `
🎉 <b>Happy Birthday!</b> 🎂 <br><br>

Wishing you a day filled with happiness,
laughter, love, and unforgettable memories. <br><br>

May all your dreams come true, and may this
new year of your life bring you success,
good health, and endless joy. <br><br>

🎁 Have a fantastic birthday and an amazing year ahead! 🎈❤️<br><br>

-Rohith❤️
`;

 }