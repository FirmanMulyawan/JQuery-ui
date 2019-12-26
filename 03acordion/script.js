// $(document).ready(function () {
//     $("#widget-accordion").accordion({ collapsible: true });
// });

// customize icon 
$(function () {
    let icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $("#widget-accordion").accordion({
        icons: icons
    });
    $("#toggle").button().on("click", function () {
        if ($("#widget-accordion").accordion("option", "icons")) {
            $("#widget-accordion").accordion("option", "icons", null);
        } else {
            $("#widget-accordion").accordion("option", "icons", icons);
        }
    });
});