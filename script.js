var dark = document.querySelector("nav div#right #dark-mode");
dark.onclick = function () {
    if (document.querySelector("body").style.backgroundColor !== "black") {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("main #reviews").style.color = "white";
        document.querySelector("main #easy").style.color = "white";
    } else {
        document.querySelector("body").style.backgroundColor = "white";
          document.querySelector("main #reviews").style.color = "black";
          document.querySelector("main #easy").style.color = "black";
    }
}
var customize = document.querySelector("header #settings");
customize.onclick = function () {
    document.querySelector("header #right_slide").style.visibility = "visible";
    customize.style.visibility = "hidden";
    document.querySelector("header #right_slide  #blue1").onclick = function () {
        document.documentElement.style.setProperty('--default', 'blue');
       
        for (x of document.querySelectorAll("header #right_slide .cus_cont")) {
            x.style.backgroundColor = "white";
        }
        document.querySelector("header #right_slide  #blue1").style.backgroundColor = "gray";
    
    }
    document.querySelector("header #right_slide  #red1").onclick = function () {
        document.documentElement.style.setProperty('--default', 'red');
        for (x of document.querySelectorAll("header #right_slide .cus_cont")) {
            x.style.backgroundColor = "white";
            document.querySelector("header #right_slide  #red1").style.backgroundColor = "gray";
        }
        document.querySelector("header #right_slide  #green1").onclick = function () {
            document.documentElement.style.setProperty('--default', 'green');
            for (x of document.querySelectorAll("header #right_slide .cus_cont")) {
                x.style.backgroundColor = "white";
            }
            document.querySelector("header #right_slide  #green1").style.backgroundColor = "gray";
        }
        document.querySelector("header #right_slide  #yellow").onclick = function () {
            document.documentElement.style.setProperty('--default', '#F9C265');
            for (x of document.querySelectorAll("header #right_slide .cus_cont")) {
                x.style.backgroundColor = "white";
            }
            document.querySelector("header #right_slide  #yellow").style.backgroundColor = "gray";
        }


    }
}
document.querySelector("header #xbtn").onclick = function () {
        document.querySelector("header #right_slide").style.visibility = "hidden"; 
customize.style.visibility = "visible";
}