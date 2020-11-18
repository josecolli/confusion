$(document).ready(function () {
    $('#btnShowReserveTableModal').click(function () {
        $('#reserveModal').modal('show');
    });

});

$(document).ready(function () {
    $('#btnShowLoginModal').click(function () {
        $('#loginModal').modal('show');
    });

});

//Activate Carousel Control Buttons

$("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});
