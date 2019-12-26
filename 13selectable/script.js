$(function () {
    $("#selectable").selectable();
    $("#selectable2").selectable();


    // serialize 

    $("#selectable3").selectable({
        stop: function () {
            var result = $("#select-result").empty();
            $(".ui-selected", this).each(function () {
                var index = $("#selectable3 li").index(this);
                result.append("#" + (index + 1));
            });
        }
    });
});