$(document).ready(function () {
    $("#kotak-dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#tombol").click(function () {
        $("#kotak-dialog").dialog("open");
        $('p').css({ "display": "block" });
    });
});