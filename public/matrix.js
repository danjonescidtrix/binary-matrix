$(function () {

    //fade body in
    $("body").fadeIn(300);

    //creates binary items inside matrix container
    for (i = 0; i < 189; i++) {
        $('#binaryMatrix').append('<div id="' + i + '" class="binary">' + '0' + '</div>');
    }

    //loops the binary items
    $("#binaryMatrix .binary").each(function (i, obj) {

        setInterval(function () {

            var randomList = ['binary', 'bold', 'normal', 'black', 'blue', 'purple', 'gray']
            var random = randomList[Math.floor(Math.random() * randomList.length)];
            var item = $('#' + obj.id + '')

            switch (random) {
                case "binary":
                    item["0"].innerText = (item["0"].innerText == '0') ? '1' : '0';
                    break;
                case "bold":
                    item.css("font-weight", "bolder");
                    break;
                case "normal":
                    item.css("font-weight", "normal");
                    break;
                case "black":
                    item.css("color", "black");
                    break;
                case "purple":
                    item.css("color", "purple");
                    break;
                case "blue":
                    item.css("color", "#4F94CD");
                    break
                case "gray":
                    item.css("color", "#575757");
                    break
            }

        }, Math.floor(Math.random() * (1000 - 200 + 1) + 200));
    });


});
