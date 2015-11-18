(function(){
  var subTotal = Number($('.subtotal strong').data('subtotal-valor'));
  if (subTotal < 20){
    var diffToMinimum = String((20 - subTotal).toFixed(2)).replace('.', ',');
    var textDiffToMinimum = 'Nosso pedido mínimo é de <strong>R$ 20,00</strong>. Ainda faltam <strong>R$ '
      + diffToMinimum
      + '</strong> para que o pedido possa ser finalizado.';
    var divDiffToMinimum = '<div class="alert alert-diff-to-minimum">' + textDiffToMinimum + '</div>';
    $('.finalizar-compra .caixa-sombreada').after(divDiffToMinimum);
  }
})();