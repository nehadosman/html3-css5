$(document).ready(function(){
    $(".btn1").click(div1)
    $(".img1").hover(div1);
    function div1 () {
        console.log(111111111)
        $(".p1").slideToggle(3000);
    }

    
    $(".btn2").click(div2)
    $(".img2").hover(div2)
    function div2 () {
        $(".p2").slideToggle(3000);
    }
    
    $(".btn3").click(div3)
    $(".img3").hover(div3)
    function div3 () {
        $(".p3").slideToggle(3000);
    }
})