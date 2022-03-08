g=document.getElementById("g");
d=document.getElementById("d");
container=document.getElementById("container");
p=0;
nbr=4;

d.onclick=function(){
    if(p>-nbr+1)
        p--;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
}

g.onclick=function(){
    if(p<0)
        p++;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
}

function afficher() {
    var div = document.getElementById("divinfo");
    var div2 = document.getElementById("divmotion");
    var texte = document.getElementById("texte");

    if (div.style.display === "none") {
        div.style.display = "grid";
        div2.style.display="none";
        texte.style.display="none"
    } else {
        div.style.display = "none";
        texte.style.display="block"
      }
}
    

function afficher2() {
    var div = document.getElementById("divinfo");
    var div2 = document.getElementById("divmotion");
    var texte = document.getElementById("texte");

    if (div2.style.display === "none") {
        div2.style.display = "block";
        div.style.display="none";
        texte.style.display="none"
    } else {
        div2.style.display = "none";
        texte.style.display="block"
    }
}


function montre () {
    var log = document.getElementById("log");

    if (log.style.display === "none") {
        log.style.display = "block";
    }else{
        log.style.display = "none";
    }
}

function montre2 () {
    var log = document.getElementById("lang");

    if (log.style.display === "none") {
        log.style.display = "block";
    }else{
        log.style.display = "none";
    }
}

function montre3 () {
    var log = document.getElementById("compt");

    if (log.style.display === "none") {
        log.style.display = "block";
    }else{
        log.style.display = "none";
    }
}


function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
    })
}
toggleMenu();



$("input,textarea").blur(function () {
    // En sortant d'un champ du Form (désélection)
  
    if ($(this).siblings("label").attr("for") == "msg") {
      // Si c'est le textarea Message
      $(this).parent().css("margin-bottom", "0"); // On retire la marge (qui baisse le bouton submit)
    }
  
    if ($(this).val() != "") {
      // Si le champs est rempli
      $(this).siblings("label").addClass("labelOuvert"); // On laisse le label en petit
      if ($(this).siblings("label").attr("for") == "msg") {
        // Si c'est le champ message
        $(this).parent().addClass("messOuvert"); // Ajout de la classe pour agrandir le champ
        $(this).parent().css("margin-bottom", "100px"); // On baisse le bouton
      }
    } else {
      $(this).siblings("label").removeClass("labelOuvert");
      if ($(this).siblings("label").attr("for") == "msg") {
        // Si c'est le textarea Message
        $(this).parent().removeClass("messOuvert"); // Retrait de la classe pour reduire le champ
      }
    }
  });
  
  $("textarea").focus(function () {
    // Au clic sur le textarea Message
    if ($(this).val() == "") {
      // Si le champ est vide
      $(this).parent().css("margin-bottom", "100px"); // Rajout de la marge pour baisser le bouton submit
    }
  });



var previousScroll = 0,
headerOrgOffset = $('#header').offset().top;

$('#header-wrap').height($('#header').height());

$(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll + " and " + previousScroll + " and " + headerOrgOffset);
    if(currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('#header').fadeOut();
        } else {
            $('#header').fadeIn();
            $('#header').addClass('fixed');
        }
    } else {
         $('#header').removeClass('fixed');   
    }
    previousScroll = currentScroll;
});
