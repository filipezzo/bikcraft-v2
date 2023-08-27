const links = document.querySelectorAll(".header-box ul a ");

const activeLink = (link) =>{
  const url = location.href
  const href = link.href
  if(url.includes(href)){
    link.classList.add('active')
  }
}

links.forEach(activeLink)

const parms = new URLSearchParams(location.search);

const activeProduct = (parm) => {
  const element = document.getElementById(parm)
  if(element){
    element.checked = true;
  }

}

parms.forEach(activeProduct)

const galery = document.querySelectorAll(".bike-img img");
const galeryContainer = document.querySelector('.bike-img');


const eventGalery = (img) =>{
 img.addEventListener('click' , (event) => {
    const item = event.currentTarget;
   const media =  matchMedia('(min-width:1000px)');

   if(media.matches){
    galeryContainer.prepend(item)
   }

    
 })
}

galery.forEach(eventGalery);

if(window.SimpleAnime){
new SimpleAnime()

}
