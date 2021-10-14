function lado(){
    var Clean = document.getElementById("deseper").style.display = "none";
    var Show = document.getElementById("projetos").style.display = "inline-block";
}
function voltar(){
    var Clear = document.getElementById("deseper").style.display = "inline-block";
    var show = document.getElementById("projetos").style.display = "none";
}

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}

