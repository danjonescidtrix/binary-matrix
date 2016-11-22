$(function () {

    PALARRAY = ['binary', 'bold', 'normal', 'black', 'gray'];

    //fade body in
    $("body").fadeIn(300);

    //creates binary items inside matrix container
    for (i = 0; i < 189; i++) {
        $('#binaryMatrix').append('<div id="binary-item-' + i + '" class="binary">' + '0' + '</div>');
    }

    //loops the binary items
    $("#binaryMatrix .binary").each(function (i, obj) {

        setInterval(function () {

            var random = PALARRAY[Math.floor(Math.random() * PALARRAY.length)],
                item = $('#' + obj.id + '');

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
                case "gray":
                    item.css("color", "#575757");
                    break
                case "blue":
                    item.css("color", "#4F94CD");
                    break
                case "purple":
                    item.css("color", "purple");
                    break;
                case "red":
                    item.css("color", "red");
                    break;
                case "green":
                    item.css("color", "green");
                    break
                case "orange":
                    item.css("color", "darkorange");
                    break;
                case "yellow":
                    item.css("color", "#e6e600");
                    break
            }

        }, Math.floor(Math.random() * (1000 - 200 + 1) + 200));
    });


    //adds colours to array
    $("#colour-pal .colour-pal--item").click(function () {
        var palItem = $('#' + this.id + '');
        switch (this.id) {
            case "colour-pal-1":
                PALARRAY.push("blue");
                palItem.css("opacity", "1");
                break
            case "colour-pal-2":
                PALARRAY.push("purple");
                palItem.css("opacity", "1");
                break
            case "colour-pal-3":
                PALARRAY.push("red");
                palItem.css("opacity", "1");
                break
            case "colour-pal-4":
                PALARRAY.push("green");
                palItem.css("opacity", "1");
                break
            case "colour-pal-5":
                PALARRAY.push("orange");
                palItem.css("opacity", "1");
                break
            case "colour-pal-6":
                PALARRAY.push("yellow");
                palItem.css("opacity", "1");
                break
        }
    });

});
