$(document).ready(function() {
  //start website with first image visible
  $("img:eq(0)").show();
  $("img:eq(1)").hide();
  $("img:eq(2)").hide();

  //loop to change picture automatically
  var myLoop = function () {
    setTimeout(function () {
        $("#next").trigger("click"); //triggers a click event
        myLoop(); // restarts the function
    }, 5000);
  };

  //changes picture based on the variable "n"
  let changePic = function() {
    switch (n) {
      case 0:
        $("img:eq(0)").show();
        $("img:eq(1)").hide();
        $("img:eq(2)").hide();
        break;
      case 1:
        $("img:eq(0)").hide();
        $("img:eq(1)").show();
        $("img:eq(2)").hide();
        break;
      case 2:
        $("img:eq(0)").hide();
        $("img:eq(1)").hide();
        $("img:eq(2)").show();
        break;
    }
  }

  let n = 0;
  myLoop(); //start loop

  $("#next").click(function() {
    if(n>=2) {
      n=0;
    } else {
      n++;
    }
    changePic();
  })

  $("#prev").click(function() {
    if(n<=0) {
      n=2;
    } else {
      n--;
    }
    changePic();
  })

  $("button:eq(0)").click(function() {
    n=0;
    changePic();
  })
  $("button:eq(1)").click(function() {
    n=1;
    changePic();
  })
  $("button:eq(2)").click(function() {
    n=2;
    changePic();
  })
})
