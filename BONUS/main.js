// Cerco di modificare l'icona dell'hamburger
// Al click sul primo i faccio comparire il menu



  $("i:first").mouseenter(function(){
    $("img").animate({height: '52px'}, 1000);
  });


$("i:first").mouseenter(
  function(){
    $("i:first").removeClass("fas fa-bars", 500).addClass("fab fa-affiliatetheme", 500);
  }
)

$("i:first").mouseleave(
  function(){
    $("i:first").removeClass("fab fa-affiliatetheme").addClass("fas fa-bars");
  }
)

$("i:first").click(
  function(){
    // console.log($("i:first"));
    $("div.hamburger-menu").show(1000);
  }
)

// Al click su a.close faccio sparire il menu
$("a.close").click(
  function(){
    // console.log($("a.close"));
    $("div.hamburger-menu").fadeOut("slow");
  }
)
