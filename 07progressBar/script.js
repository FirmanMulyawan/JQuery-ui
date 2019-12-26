$(document).ready(function () {

    // progressbar 1
    $("#progressbar").progressbar({
        value: 37
    });

    // progressbar 2
    var progressbar = $("#progressbar2"),
        progressLabel = $(".progress-label");

    progressbar.progressbar({
        value: false,
        change: function () {
            progressLabel.text(progressbar.progressbar("value") + "%");
        },
        complete: function () {
            progressLabel.text("Complete!");
        }
    });

    function progress() {
        var val = progressbar.progressbar("value") || 0;

        progressbar.progressbar("value", val + 2);

        if (val < 99) {
            setTimeout(progress, 80);
        }
    }

    setTimeout(progress, 2000);

    // progressbar 3
    var progressTimer,
        progressbar = $("#progressbar3"),
        progressLabel = $(".progress-label"),
        dialogButtons = [{
            text: "Cancel Download",
            click: closeDownload
        }],
        dialog = $("#dialog").dialog({
            autoOpen: false,
            closeOnEscape: false,
            resizable: false,
            buttons: dialogButtons,
            open: function () {
                progressTimer = setTimeout(progress, 2000);
            },
            beforeClose: function () {
                downloadButton.button("option", {
                    disabled: false,
                    label: "Start Download"
                });
            }
        }),
        downloadButton = $("#downloadButton")
            .button()
            .on("click", function () {
                $(this).button("option", {
                    disabled: true,
                    label: "Downloading..."
                });
                dialog.dialog("open");
            });

    progressbar.progressbar({
        value: false,
        change: function () {
            progressLabel.text("Current Progress: " + progressbar.progressbar("value") + "%");
        },
        complete: function () {
            progressLabel.text("Complete!");
            dialog.dialog("option", "buttons", [{
                text: "Close",
                click: closeDownload
            }]);
            $(".ui-dialog button").last().focus();
        }
    });

    function progress() {
        var val = progressbar.progressbar("value") || 0;

        progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

        if (val <= 99) {
            progressTimer = setTimeout(progress, 50);
        }
    }

    function closeDownload() {
        clearTimeout(progressTimer);
        dialog
            .dialog("option", "buttons", dialogButtons)
            .dialog("close");
        progressbar.progressbar("value", false);
        progressLabel
            .text("Starting download...");
        downloadButton.focus();
    }
});