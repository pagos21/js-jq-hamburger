// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio scaricando questa repo:

// Al click sul primo i faccio comparire il menu
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

// The HARD way

// var hidden = true;
//
// $("i:first").click(
//   function(){
//     if(hidden == true){
//       $("div.hamburger-menu").show(2000);
//     }
//   }
// )
//
// $("a.close").click(
//   function(){
//     if(hidden == true){
//       $("div.hamburger-menu").fadeOut(1000);
//     }
//   }
// )
