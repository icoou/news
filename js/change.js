$(document).ready(function() {
    $(".h-left a:last-child").click(function() { //切换探索页面
        $(".pagehome").hide();
        $(".explore").show();
    });
    $(".h-left a:first-child").click(function() { //切换主页
        $(".explore").hide();
        $(".pagehome").show();
    });
    $(".h-input").click(function() {
        $(".h-input").animate({ width: 320 }, 500);
        $(".h-input").addClass("h-i-b");
    });
});

$(document).click(function() { //点击换肤显示搜索框，点击搜索框以外地方复原搜索框
    if ($(event.srcElement).is(".h-input,.h-input *")) {
        $(".h-input").animate({ width: 320 }, 500);
        $(".h-input").addClass("h-i-b");
    } else {
        $(".h-input").animate({ width: 70 }, 500);
        $(".h-input").removeClass("h-i-b");
    }
});


