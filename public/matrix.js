$(function () {

    //fade body in
    $("body").fadeIn(300);

    //creates binary items inside matrix container
    for (i = 0; i < 189; i++) {
        $('#binaryMatrix').append('<div id="' + i + '" class="binary">' + 0 + '</div>');
    }

    //loops the binary items
    $("#binaryMatrix .binary").each(function (i, obj) {

        setInterval(function () {

            var randomList = ['binary', 'bold', 'normal', 'black', 'blue', 'purple', 'gray']
            var random = randomList[Math.floor(Math.random() * randomList.length)];

            switch (random) {
                case "binary":
                    $('#' + obj.id + '').text(function (i, t) {
                        return t == '1' ? '0' : '1';
                    });
                    break;
                case "bold":
                    $('#' + obj.id + '').css("font-weight", "bolder");
                    break;
                case "normal":
                    $('#' + obj.id + '').css("font-weight", "normal");
                    break;
                case "black":
                    $('#' + obj.id + '').css("color", "black");
                    break;
                case "purple":
                    $('#' + obj.id + '').css("color", "purple");
                    break;
                case "blue":
                    $('#' + obj.id + '').css("color", "#4F94CD");
                    break
                case "gray":
                    $('#' + obj.id + '').css("color", "#575757");
                    break
            }

        }, Math.round(Math.random() * 1000) + 200);
    });


});
