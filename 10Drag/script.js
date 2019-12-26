$(document).ready(function () {
    $("#seret").draggable();

    // kedua 
    $("#draggable").draggable({ axis: "y", revert: true });
    $("#draggable2").draggable({ axis: "x" });
    $("#draggable3").draggable({ containment: "#containment-wrapper", scroll: false });
    $("#draggable4").draggable({ containment: "parent" });

    // ketiga 
    $("#sortable").sortable({
        revert: false
    });
    $("#draggable5").draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });
    $("ul, li").disableSelection();

    //keempat 
    $("#draggable6").draggable({ snap: true });
    $("#draggable7").draggable({ snap: ".ui-widget-header" });
    $("#draggable8").draggable({ snap: ".ui-widget-header", snapMode: "outer" });
    $("#draggable9").draggable({ grid: [20, 20] });
    $("#draggable10").draggable({ grid: [80, 80] });
});