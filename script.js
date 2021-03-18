// function start() {
//     // $("body").css("background-color", "pink");
// }

// Hey jquery, watch for the page to load. Once it's done, trigger the start function.
// $(window).on("load", start); 



$(document).on("click", "#brand", function(){
     $("#brand_info").slideToggle("slow");
});

$(document).on("click", "#ethics", function(){
    $("#ethics_info").slideToggle("slow");
});

$(document).on("click", "#certs", function(){
    $("#certs_info").slideToggle("slow");
});

$(document).on("click", "#rating", function(){
    $("#rating_info").slideToggle("show");
});



function closed() {
    $("p").hide();
};

$(window).on("load", closed); 