//Scrool til top kommer frem, når brugeren starter med at scroller på siden

//knappen
 mybutton = document.getElementById("myBtn");

//Når brugeren ruller ned 20px fra toppen af dokumentet, vises knaoppen
window.onscroll = function (){
    scrollFunction();
}

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Når brugeren klikker på knappen, ruller den op til toppen


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
