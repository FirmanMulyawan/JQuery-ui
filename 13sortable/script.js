$(document).ready(function () {
    // default 
    $("#sortable").sortable();
    $("#sortable").disableSelection();

    // conect-list 
    $("#sortable1, #sortable2").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();

    // display grid 
    $("#sortable3").sortable();
    $("#sortable3").disableSelection();

    // placeholder 
    $("#sortable4").sortable({
        placeholder: "ui-state-highlight"
    });
    $("#sortable4").disableSelection();

    // empty list 
    $("ul.droptrue").sortable({
        connectWith: "ul"
    });

    $("ul.dropfalse").sortable({
        connectWith: "ul",
        dropOnEmpty: false
    });

    $("#sortable5, #sortable6, #sortable7").disableSelection();

    // item 
    $("#sortable8").sortable({
        items: "li:not(.ui-state-disabled)"
    });

    $("#sortable9").sortable({
        cancel: ".ui-state-disabled"
    });

    $("#sortable8 li, #sortable9 li").disableSelection();


    // portlets 
    $(".column").sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all"
    });

    $(".portlet")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")
        .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

    $(".portlet-toggle").on("click", function () {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });
});
