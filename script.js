// Product.html Slide Toggles

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



// Product.html on page load

function closed() {
    $("p").hide();
    $("#brand_info").show();
};

$(window).on("load", closed); 