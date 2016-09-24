$("document").ready(function() {
    $(".item-news").click(function() {  //mian 内容
        var h3 = $(this).children("h3").text();
        var p = $(this).children("p").text();
        var img = $(this).children("img").attr("src");
        $(".read").show();
        $("body").css({overflow:"hidden"});
        $(".read-content").children("img").attr("src",img);
        $(".read-content").children("h3").text(h3);
        $(".read-content").children("p").text(p);
    });
    $(".swiper-wrapper a").click(function() { //轮播内容
        var img = $(this).children("img").attr("src");
        var h3 = $(this).find("h3").text();
        var p = $(this).find("p").text();
        $(".read").show();
        $("body").css({overflow:"hidden"});
        $(".read-content").children("img").attr("src",img);
        $(".read-content").children("h3").text(h3);
        $(".read-content").children("p").text(p);
    });
    $(".read").click(function () {
    	$(this).hide();
        $("body").css({overflow:"inherit"});

    });
});
