
//toggeling NavBar // 

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myToggle_btn() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    }
    /**hide All the Menu items in Defult */
function hideMenu() {
        document.getElementById('lunch').style.display='none';
        document.getElementById('dinner').style.display='none';
        document.getElementById('breakfast').style.display='none';
}
/*show only the breakfast section*/
    function showBreakfast(){
        document.getElementById('main_section').style.display='none';
        document.getElementById('lunch').style.display='none';
        document.getElementById('dinner').style.display='none';
        document.getElementById('breakfast').style.removeProperty('display');
    
    } 

    function showLunch() {
        document.getElementById('main_section').style.display='none';
        document.getElementById('breakfast').style.display='none';
        document.getElementById('dinner').style.display='none';
        document.getElementById('lunch').style.removeProperty('display');
    }
    function showDinner() {
        document.getElementById('main_section').style.display='none';
        document.getElementById('breakfast').style.display='none';
        document.getElementById('lunch').style.display='none';
        document.getElementById('dinner').style.removeProperty('display');
    }
    function showAll() {
        document.getElementById('main_section').style.display='none';
        document.getElementById('breakfast').style.removeProperty('display');
        document.getElementById('lunch').style.removeProperty('display');
        document.getElementById('dinner').style.removeProperty('display');
    }
    /**Counter function */
    var deadline = new Date("Mar 15, 2022 18:37:25").getTime();
  console.log(deadline);
    var x = setInterval(function() {
      
    var now = new Date().getTime();
    console.log(now);
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML =days ;
    document.getElementById("hour").innerHTML =hours;
    document.getElementById("minute").innerHTML = minutes; 
    document.getElementById("second").innerHTML =seconds;
    document.getElementById("demo").innerHTML = "<b>OPENED AFTER</b>"; 
    if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "<b>TIME UP</b>";
            document.getElementById("day").innerHTML ='0';
            document.getElementById("hour").innerHTML ='0';
            document.getElementById("minute").innerHTML ='0' ; 
            document.getElementById("second").innerHTML = '0'; }
    }, 1000);