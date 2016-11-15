$(function () {

    //fade body in
    $("body").fadeIn(300);

    //creates binary items inside matrix container
    for (i = 0; i < 189; i++) {
        $('#binaryMatrix').append('<div id="' + i + '" class="binary">' + 0 + '</div>');
    }

    //loops the binary items
    $("#binaryMatrix .binary").each(function (i, obj) {


        var randomList = ['bold', 'normal', 'black', 'purple']
        var random = randomList[Math.floor(Math.random() * randomList.length)];

        flipValue(obj.id);

        switch (random) {
            case "bold":
                flipValue2(obj.id);
                break;
            case "normal":
                flipValue3(obj.id);
                break;
            case "black":
                flipValue4(obj.id);
                break;
            case "purple":
                flipValue5(obj.id);
                break;
        }

    });

    //binary int change func
    function flipValue(id) {
        setInterval(function () {
            $('#' + id + '').text(function (i, t) {
                return t == '1' ? '0' : '1';
            });
        }, Math.round(Math.random() * 10000) + 200); // random between 200 - 1000
    };

    //binary int change func
    function flipValue2(id) {
        setInterval(function () {
            $('#' + id + '').css("font-weight", "bolder");
        }, Math.round(Math.random() * 5000) + 400); // random between 200 - 1000
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
        }, Math.round(Math.random() * 5000) + 400); // random between 200 - 1000
    };

    //binary int change purple
    function flipValue5(id) {
        setInterval(function () {
            $('#' + id + '').css("color", "purple");
        }, Math.round(Math.random() * 5000) + 400); // random between 200 - 1000
    };



});
