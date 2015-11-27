// TIMER
(function(){
  $('.conteudo').prepend('<div class="row-fluid">' +
    '<div class="span12 timer-home">' +
    '<div class="text-timer">' +
    'Faltam <span class="timer-value"></span> para o início da Black Friday.<br/>' +
    'Grandes ofertas virão e a quantidade é limitada.' +
    '</div></div></div>');

  var _initial = new Date();
  var _final = new Date(Date.UTC(2015, 10, 27, 2, 0, 0));
  var seconds = (_final - _initial)/1000;
  var timerDiv = $('.timer-value');

  function startTimer(duration) {
    var timer = duration;
    var hour, minutes, seconds;
    setInterval(function () {
      hour = parseInt(timer / (60*60), 10);
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hour = hour < 10 ? "0" + hour : hour;
      minutes = minutes < 10 ? "0" + minutes : ((minutes > 59) ? minutes-60 : minutes);
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerDiv.text(hour + ":" + minutes + ":" + seconds);

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  startTimer(seconds);
}());