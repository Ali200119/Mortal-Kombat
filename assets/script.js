function Counter()
{
    var count = setInterval(function(){
        var c = parseInt($(".Counter").text());
        $(".Counter").text((++c).toString());
        if (c == 100){
            clearInterval(count);
            $(".Counter").addClass("Hide")
            $(".Preloader").addClass("Active")
        }
    }, 50)
}

Counter()