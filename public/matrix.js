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

        setInterval(function () {
            $('#' + obj.id + '').text(function (i, t) {
                return t == '1' ? '0' : '1';
            });
        }, Math.round(Math.random() * 10000) + 200);

        switch (random) {
            case "bold":
                setInterval(function () {
                    $('#' + obj.id + '').css("font-weight", "bolder");
                }, Math.round(Math.random() * 5000) + 400);
                break;
            case "normal":
                setInterval(function () {
                    $('#' + obj.id + '').css("font-weight", "normal");
                }, Math.round(Math.random() * 5000) + 400)
                break;
            case "black":
                setInterval(function () {
                    $('#' + obj.id + '').css("color", "black");
                }, Math.round(Math.random() * 5000) + 400);
                break;
            case "purple":
                setInterval(function () {
                    $('#' + obj.id + '').css("color", "purple");
                }, Math.round(Math.random() * 5000) + 400);
                break;
        }
    });


});
