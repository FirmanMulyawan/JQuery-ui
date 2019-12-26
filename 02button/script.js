$(document).ready(function () {

    // default button 
    $('button,input[type="submit"],a').button();

    // input checkbox
    // $("#format").checkboxradio();
    $("input[type=checkbox]").checkboxradio();


    // Icon button 
    $(".checkbox-button-1").button({
        showLabel: false,
        icon: "ui-icon-gear"
    });

    $(".checkbox-button-2").button({
        showLabel: true,
        icon: "ui-icon-locked"
    });
    // $(".checkbox-button-2").button({
    //     icons: {
    //         primary: "ui-icon-locked"
    //     }
    // })
    // $(".checkbox-button-3").button({
    //     icons: {
    //         primary: "ui-icon-gear",
    //         secondary: "ui-icon-triangle-1-s"
    //     }
    // });
    $(".checkbox-button-3").button({
        icon: "ui-icon-locked"
    });

    $(".checkbox-button-4").button({
        icon: "ui-icon-locked",
        iconPosition: "end",
        showLabel: false
    });
    // $(".checkbox-button-4").button({
    //     icons: {
    //         primary: "ui-icon-gear",
    //         secondary: "ui-icon-triangle-1-s"
    //     },
    //     text: false
    // });

    // radio button    
    $("input[type=radio]").checkboxradio();

    // Split button
    $("#rerun")
        .button()
        .click(function () {
            alert("Running the last action");
        })
        .next()
        .button({
            showLabel: false,
            icon: "ui-icon-gear"
        })
        .click(function () {
            var menu = $(this).parent().next().show().position({
                my: "left bottom",
                at: "left top",
                of: this
            });
            $(document).one("click", function () {
                menu.hide();
            });
            return false;
        })
        .parent()
        .buttonset()
        .next()
        .hide()
        .menu();


    // Toolbar button
    $("#beginning").button({
        showLabel: false,
        icon: "ui-icon-seek-start"
    });
    $("#rewind").button({
        showLabel: false,
        icon: "ui-icon-seek-prev"
    });
    $("#play").button({
        showLabel: false,
        icon: "ui-icon-play"
    })
        .click(function () {
            var options;
            if ($(this).showLabel() === "play") {
                options = {
                    label: "pause",
                    icon: "ui-icon-pause"
                };
            } else {
                options = {
                    label: "play",
                    icon: "ui-icon-play"
                };
            }
            $(this).button("option", options);
        });

    $("#stop").button({
        showLabel: false,
        icon: "ui-icon-stop"
    })
        .click(function () {
            $("#play").button("option", {
                label: "play",
                icons: {
                    primary: "ui-icon-play"
                }
            });
        });
    $("#forward").button({
        text: false,
        icons: {
            primary: "ui-icon-seek-next"
        }
    });
    $("#end").button({
        text: false,
        icons: {
            primary: "ui-icon-seek-end"
        }
    });
    $("#shuffle").button();
    $("#repeat").buttonset();
});