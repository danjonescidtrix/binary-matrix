$(document).ready(function () {

    //creates binary items inside matrix container
    for (i = 0; i < 1500; i++) {
        $('#binaryMatrix').append('<div id="' + i + '" class="binary">' + 0 + '</div>');
    }

    //loops the binary items
    $("#binaryMatrix .binary").each(function (i, obj) {
        flipValue(obj.id);
        flipValue2(obj.id);
        flipValue3(obj.id);
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


});
