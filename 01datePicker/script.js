$(document).ready(function () {
    $('.input-tanggal').datepicker({
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 2,
        dateFormat: "dd ~ mm ~ yy",
        altField: ".alternate",
        altFormat: "DD, dd MM, yy",
        minDate: -20,
        maxDate: "+1M +10D",
        showWeek: true,
        firstDay: 1
        // showOn: "button",
        // buttonImage: "",
        // buttonImageOnly: true,
        // buttonText: "Select date"
    });
});
