//Initialize all popovers

$(function () {
    $('[data-toggle="popover"]').popover()
})


$(function () {


    $("#modalPrint").click(function () {

        $("#modalDivPrint").printThis({
            debug: false,
            importCSS: true,
            importStyle: true,
            printContainer: true,
            loadCSS: "../css/style.css",
            pageTitle: "My Modal",
            removeInline: false,
            printDelay: 333,
            header: null,
            formValues: true
        });
    })

});
