// Menu

const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const projectsContainer = document.querySelector('.projects-container');
const modalContainer = document.querySelector('.modal-content');
const project = document.querySelector('.project');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

function closeModal() {
  modal.classList.add('modal-none');
}


// function onProjectClick(){
//   modal.classList.remove('modal-none');

//   projects.forEach(project => {
//     const {id, title, description, imageModal, client, date, projectType, link} = project;
  
//     const modalContain = `
//     <a class="modal-close" onclick="closeModal()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z"/></svg>
//     </a>
//     <article class="portfolio-modal" alt='${id}'>
//       <img src=${imageModal} alt="">
//       <div class="portfolio-info">
//           <h3>${title}</h3>
//           <p>${description}</p><br>
//           <aside class="portfolio-details">
//               <small><b>CLIENT</b></small>
//               <Small>${client}</Small>
//               <small><b>DATE</b></small>
//               <small>${date}</small>
//               <small><b>PROJECT TYPE</b></small>
//               <small>${projectType}</small>
//               <small><b>LINK</b></small>
//               <small><a href=${link} target="_blank" rel="noopener">${link}</a></small>
//           </aside>
//       </div>
//     </article>
//     `
//     modalContainer.innerHTML = modalContain;
//   });
// }




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


projects.forEach(project => {
  const {id, url, title, description, list, image} = project;

  const projectContain = `
  <li class="project">
    <a href=${url} target="_blank" class="portfolio-card">
      <img src=${image} alt="Project ${id}">
      <aside class="portfolio-card-info">
        <div>
            <h3>Project n°${id}</h3><br>
            <p class="project-title">${title}</p>
            <p>${description}</p>
            <ul class="project-bottom">
              <li>${list}</li>
            </ul>
        </div>
      </aside>
    </a>
  </li>
  `
  projectsContainer.innerHTML += projectContain;
});




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

