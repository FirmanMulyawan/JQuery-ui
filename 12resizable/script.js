$(document).ready(function () {
    $("#kotak").resizable();
    // animasi 
    $("#resizable").resizable({
        animate: true
    });


    // contain area 
    $("#resizable2").resizable({
        containment: "#container"
    });

    // helper 
    $("#resizable3").resizable({
        helper: "ui-resizable-helper"
    });


    // min max 
    $("#resizable4").resizable({
        maxHeight: 250,
        maxWidth: 350,
        minHeight: 150,
        minWidth: 200
    });

    // ratio 
    $("#resizable5").resizable({
        aspectRatio: 16 / 9
    });

    // grid
    $("#resizable6").resizable({
        grid: 50
    });


    // shyncronous 
    $("#resizable7").resizable({
        alsoResize: "#also"
    });
    $("#also").resizable();

    // textarea 
    $("#resizable8").resizable({
        handles: "se"
    });

    //gost
    $("#resizable9").resizable({
        ghost: true
    });
});

