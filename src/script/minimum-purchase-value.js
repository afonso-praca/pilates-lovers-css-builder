(function(){
  var subTotal = Number($('.subtotal strong').data('subtotal-valor'));
  var minimumValue = 19.9;
  if (subTotal && subTotal < minimumValue){
    var diffToMinimum = String((minimumValue - subTotal).toFixed(2)).replace('.', ',');
    var textDiffToMinimum = 'Nosso pedido mínimo é de <strong>R$ 19,90</strong>. Ainda faltam <strong>R$ '
      + diffToMinimum
      + '</strong> para que o pedido possa ser finalizado.';
    var divDiffToMinimum = '<div class="alert alert-diff-to-minimum">' + textDiffToMinimum + '</div>';
    $('.finalizar-compra .caixa-sombreada').after(divDiffToMinimum);
  }
  // shows continaur comprando on mobile
  $('.finalizar-compra .acao-editar .botao.hidden-phone').removeClass('hidden-phone')
})();