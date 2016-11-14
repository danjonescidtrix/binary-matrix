$(document).ready(function () {

  //fade body in
  $("body").fadeIn(300);

  //creates binary items inside matrix container
  for (i = 0; i < 1500; i++) {
    $('#binaryMatrix').append('<div id="' + i + '" class="binary">' + 0 + '</div>');
  }

  //loops the binary items
  $("#binaryMatrix .binary").each(function (i, obj) {
    flipValue(obj.id);
    flipValue2(obj.id);
    flipValue3(obj.id);
    flipValue4(obj.id);
    flipValue5(obj.id);
    flipValue6(obj.id);
    flipValue7(obj.id);
    flipValue8(obj.id);
  });

  //binary int change func
  function flipValue(id) {
    setInterval(function () {
      $('#' + id + '').text(function (i, t) {
        return t == '1' ? '0' : '1';
      });
    }, Math.round(Math.random() * 10000) + 400); // random between 200 - 1000
  };

  //binary int change func
  function flipValue2(id) {
    setInterval(function () {
      $('#' + id + '').css("font-weight", "bolder");
    }, Math.round(Math.random() * 100000) + 400); // random between 200 - 1000
  };

  //binary int change func
  function flipValue3(id) {
    setInterval(function () {
      $('#' + id + '').css("font-weight", "normal");
    }, Math.round(Math.random() * 5000) + 400); // random between 200 - 1000
  };

  //binary int change black
  function flipValue4(id) {
    setInterval(function () {
      $('#' + id + '').css("color", "black");
    }, Math.round(Math.random() * 10000) + 400); // random between 200 - 1000
  };

  //binary int change purple
  function flipValue5(id) {
    setInterval(function () {
      $('#' + id + '').css("color", "purple");
    }, Math.round(Math.random() * 120000) + 400); // random between 200 - 1000
  };

  //binary int change green
  function flipValue6(id) {
    setInterval(function () {
      $('#' + id + '').css("color", "green");
    }, Math.round(Math.random() * 120000) + 400); // random between 200 - 1000
  };

  //binary int change blue
  function flipValue7(id) {
    setInterval(function () {
      $('#' + id + '').css("color", "blue");
    }, Math.round(Math.random() * 120000) + 400); // random between 200 - 1000
  };

  //binary int change red
  function flipValue8(id) {
    setInterval(function () {
      $('#' + id + '').css("color", "red");
    }, Math.round(Math.random() * 120000) + 400); // random between 200 - 1000
  };


});