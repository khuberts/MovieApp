$("#hotel_content").load('html/dashboard.html');

$("#button_guest").click(function(){
    $("#hotel_content").load('html/guest.html');
});

$("#button_room").click(function(){
    $("#hotel_content").load('html/room.html');
});

$("#button_reservation").click(function(){
    $("#hotel_content").load('html/reservation.html');
});

$("#button_dashboard").click(function(){
    $("#hotel_content").load('html/dashboard.html');
});

// Toaster config
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-full-width",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
