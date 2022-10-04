// Menu

const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');


const projectsContainer = document.querySelector('.projects-container');

btnMenu.addEventListener('click', (e) =>{
  btnMenu.firstElementChild.classList.toggle('none');
  btnMenu.lastElementChild.classList.toggle('none');

  menu.classList.toggle('is-active');
});

document.addEventListener('click', (e) =>{
  if(!e.target.matches(".menu a")) return false;

  btnMenu.firstElementChild.classList.remove('none');
  btnMenu.lastElementChild.classList.add('none');

  menu.classList.remove('is-active');

});


const projects = [
  {
    url: 'https://carmentraining.netlify.app/',
    title: 'Carmentraining',
    description: 'A single website for a personal trainer Carmentraining',
    list: ['Html', 'Css', 'Javascript'].join(' '),
  },

  {
    url: 'https://text-to-speech-carmen.netlify.app/',
    title: 'Text to Speech',
    description: 'A website to convert text to speech',
    list: ['Html', 'Css', 'Javascript'].join(' '),
  },

  {
    url: 'https://calculator-carmen.netlify.app/',
    title: 'Calculator',
    description: 'Calculator website',
    list: ['Html', 'Css', 'Javascript', 'React'].join(' '),
  },

  {
    url: 'https://3-en-raya-carmen.netlify.app/',
    title: 'Play "3 en raya" ',
    description: 'A simple game to pass the time ',
    list: ['Html', 'Css', 'Javascript'].join(' '),
  },

  {
    url: 'https://weather-current-app-react.netlify.app/',
    title: 'Weather Current App',
    description: 'Weather Current App with React',
    list: ['Html', 'Css', 'Javascript', 'React'].join(' '),
  },

  {
    url: 'https://convert-audio-to-text.netlify.app/',
    title: 'Convert Audio To Text',
    description: 'Convert audio to text and Download file',
    list: ['Html', 'Css', 'Javascript'].join(' '),
  },
];


projects.forEach(project => {
  const {url, title, description, list} = project;
  const projectContain = `
  <li class="project">
    <div class="project-top">
        <img class="folder" src="./assets/folder-open-outline.svg" alt="folder">
        <a href=${url} target="_blank"><img class="external-link" src="./assets/bx-link-external.svg" alt=""></a>
    </div>
          
    <div class="project-midle">
        <p class="project-title">${title}</p>
        <p class="description">${description}</p>
    <div>

    <ul class="project-bottom">
        <li>${list}</li>
    </ul>
  </li>
  `

  projectsContainer.innerHTML += projectContain;
})




/* Scroll */
// window.addEventListener('scroll', function()  {
//     let element = document.getElementById('scroll-content');
//     let screenSize = window.innerHeight;
    
//       if(element.getBoundingClientRect().top < screenSize) {
//         element.classList.add('visible');
//       } else {
//         element.classList.remove('visible');
//       }
//   });

/* Scroll varios elementos */
window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
    }
});



/* Boot */
function enviar_mensaje(){
	var a = document.getElementById("chat-input");
    if ("" != a.value) {
        var b = document.getElementById("get-number").innerHTML,c = document.getElementById("chat-input").value, d = "https://web.whatsapp.com/send", e = b,  f = "&text=" + c;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var d = "whatsapp://send";  var g = d + "?phone=" + e + f;  window.open(g, "_blank");
    }
}
 
const whatsapp_chat =document.getElementById("whatsapp-chat");
   
function cerrar_chat(){
whatsapp_chat.classList.add("hide");
whatsapp_chat.classList.remove("show");
  
}

function mostrar_chat(){
  whatsapp_chat.classList.add("show");
whatsapp_chat.classList.remove("hide");
}

