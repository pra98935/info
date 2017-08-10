$(document).ready(function(){
    var sideHeight = $(".left-side").height();
    var navHeight = $(".navi").height();
    //var ftrHeight = $("footer").height();
    //alert(sideHeight);
    //alert(navHeight);
    //alert(ftrHeight);
    var getActualHeight=sideHeight-(navHeight+70);
    $(".main-sec").css("height", getActualHeight);
});
