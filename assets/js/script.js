function Counter()
{
    var count = setInterval(function(){
        var c = parseInt($(".Counter").text());
        $(".Counter").text((++c).toString());
        if (c == 100){
            clearInterval(count);
            $(".Counter").addClass("HideC")
            $(".LoadingLogo").addClass("HideL")
            $(".Preloader").addClass("Active")
        }
    }, 50)
}

Counter();



VanillaTilt.init(document.querySelectorAll(".GameBox"), {
    max: 25,
    speed: 400
});