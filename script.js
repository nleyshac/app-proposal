// function start() {
//     // $("body").css("background-color", "pink");
// }

// Hey jquery, watch for the page to load. Once it's done, trigger the start function.
// $(window).on("load", start); 



// $(document).on("click", "start_btn",function(){
//     $("#container").fadeIn("slow");
// });




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

// Product.html Hide Nav on Scroll 

// $(window).scroll(function(){
//     if ($(this).scrollTop() >0) {
//         $("#navmenutwo").fadeOut();
//     } else {
//         $("#navmenutwo").fadeIn();
//     }
// });



// Product.html on page load

function closed() {
    $("p").hide();
    $("#brand_info").show();
};

$(window).on("load", closed); 



// Explore page

