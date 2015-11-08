(function(){
  // GET ALL ITEMS ON SHELF
  var $items = $('.bandeira-indisponivel');
  // FOR EACH ITEM
  for (var i = 0; i < $items.length; i++){
    $($items[i]).html('ESGOTADO');
  }
})();

(function(){

  // GET ALL ITEMS ON SHELF
  var $items = $('.listagem-item');

  // FOR EACH ITEM
  for (var i = 0; i < $items.length; i++){

    var item = $($items[i]);
    var itemLink = $($items[i]).find('.produto-sobrepor');
    var itemTitle = $(itemLink).attr('title');

    // IF THE TITLE CONTAINS 'INFANTIL'
    if (itemTitle.toLowerCase().indexOf('infantil') > -1 || itemTitle.toLowerCase().indexOf('baby') > -1){
      $(item).find('.bandeira-promocao').html('infantil').addClass('category-infantil');
    }
  }

})();