function ShowPg1Video(){
    document.getElementById("page1V").style.opacity = "1";
    document.getElementById("page1V").style.position = "static";

    document.getElementById("page2V").style.opacity = "0";
    document.getElementById("page2V").style.position = "fixed";

    document.getElementById("page3V").style.opacity = "0";
    document.getElementById("page3V").style.position = "fixed";
}

function ShowPg2Video(){
    document.getElementById("page1V").style.opacity = "0";
    document.getElementById("page1V").style.position = "fixed";

    document.getElementById("page2V").style.opacity = "1";
    document.getElementById("page2V").style.position = "static";

    document.getElementById("page3V").style.opacity = "0";
    document.getElementById("page3V").style.position = "fixed";
}

function ShowPg3Video(){
    document.getElementById("page1V").style.opacity = "0";
    document.getElementById("page1V").style.position = "fixed";

    document.getElementById("page2V").style.opacity = "0";
    document.getElementById("page2V").style.position = "fixed";

    document.getElementById("page3V").style.opacity = "1";
    document.getElementById("page3V").style.position = "static";
}


function ShowPg1Music(){
    document.getElementById("page1M").style.opacity = "1";
    document.getElementById("page1M").style.position = "static";

    document.getElementById("page2M").style.opacity = "0";
    document.getElementById("page2M").style.position = "fixed";
}
function ShowPg2Music(){
    document.getElementById("page1M").style.opacity = "0";
    document.getElementById("page1M").style.position = "fixed";

    document.getElementById("page2M").style.opacity = "1";
    document.getElementById("page2M").style.position = "static";
}

function ShowPg1News(){
    document.getElementById("page1N").style.opacity = "1";
    document.getElementById("page1N").style.position = "static";

    document.getElementById("page2N").style.opacity = "0";
    document.getElementById("page2N").style.position = "fixed";
}
function ShowPg2News(){
    document.getElementById("page1N").style.opacity = "0";
    document.getElementById("page1N").style.position = "fixed";

    document.getElementById("page2N").style.opacity = "1";
    document.getElementById("page2N").style.position = "static";
}

function openNav(){
    document.getElementById("mySideNav").style.width = "350px";
}
function closeNav(){
    document.getElementById("mySideNav").style.width = "0px";
}
