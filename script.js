
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

    function showBrakfast() {
    // document.getElementById('main_section').style.display='none';
    // document.getElementById('lunch').style.display='none';
    // document.getElementById('dinner').style.display='none';
    // const v = document.getElementById('breakfast');
    // v.style.removeProperty('display');
    } 

    function showLunch() {
    document.getElementById('main_section').style.display='none';
    document.getElementById('breakfast').style.display='none';
    document.getElementById('dinner').style.display='none';
    const d = document.getElementById('lunch');
    d.style.removeProperty('display');
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