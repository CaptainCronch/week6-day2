for (i = 0; i < 16; i++) {
    $("#grid").append("<div class='box'></div>");
}

$(".box").each(function() {
    $(this).click(function() {
        $(this).toggleClass("clicked");
    });
});
