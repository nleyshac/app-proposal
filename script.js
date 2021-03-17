// function start() {

//     // $("body").css("background-color", "pink");
// }

$(document).on("click", "#brand", function(){

    $("#brand_info").slideDown("slow");
    // $("brand_info").siblings().slideUp("fast");
});

$(document).on("click", "#ethics",function(){

    $("#ethics_info").slideDown("slow");
    // $("ethics_info").siblings().slideUp("fast");
});

$(document).on("click", "#certs",function(){

    $("#certs_info").slideDown("slow");
//     $("certs_info").siblings().slideUp("fast");
});

$(document).on("click", "#rating",function(){

    $("#rating_info").slideDown("slow");
//     $("rating_info").siblings().slideUp("fast");
});



// Hey jquery, watch for the page to load. Once it's done, trigger the start function.
// $(window).on("load", start); 