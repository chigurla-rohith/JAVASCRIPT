let heading = document.getElementById("heading");
let paragraph = document.getElementById("paragraph");
let button = document.getElementById("btn");

button.onclick = function(){

    heading.innerText = "Hello, I'm Rohith Chigurla 👋";

    paragraph.innerHTML = 'I am a B.Tech CSE graduate <br><br> and an aspiring Full Stack Developer.<br><br> I enjoy learning HTML, CSS, JavaScript, React.js, Node.js, Python, and SQL.<br><br> My goal is to build modern web applications and start my career as a software developer.';

}