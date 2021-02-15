
$(document).ready(function () {

    /******************************************************************************************************************/
    //function to START the motion of the ball.
    $("#start").click(function () {
        var i;
        var up = 0, down = 0;
        var moveup = 0, movedown = 0;
        $(".ball").animate({ top: '15px', left: '0px' }, "3000");
        for (i = 0; i < 5; i++) {
            {
                up = up - 185;
                down = down - 99;
                moveup = moveup + 92;
                movedown = movedown + 105;
                $(".ball").animate({ top: up, left: moveup }, "3000");
                $(".ball").animate({ top: down, left: movedown }, "3000");
                up = up + 100;
            }

        }
    });
    let up1 = 0, down1 = 0;
    let moveup1 = 0, movedown1 = 0;
    var ct = 0;
    /******************************************************************************************************************/
    //function to MOVE the ball.
    $('#move').click(function () {

        if (ct <= 4) {
            up1 = up1 - 185;
            down1 = down1 - 99;
            moveup1 = moveup1 + 92;
            movedown1 = movedown1 + 105;
            $(".ball").animate({ top: up1, left: moveup1 }, "3000");
            $(".ball").animate({ top: down1, left: movedown1 },"3000");
            up1 = up1 + 100;
            ct = ct + 1;
        }
        else {
            ct = 0;
            alert("Invalid move.Click on Reset ");
        }

    });
    /******************************************************************************************************************/
    //function to RESET the motion of the ball.
    $('#reset').click(function () {
        $(".ball").hide().animate({ top: '15px', left: '0px' }, "1000").show();
    });
    /******************************************************************************************************************/
    //function to STOP the motion of the ball.
    $('#stop').click(function () {
        var i;
        for (i = 0; i < 10; i++)
            $(".ball").stop();
    });
    /******************************************************************************************************************/

   
});