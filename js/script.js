//Preloader
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

//Animate
$(window).on('load', function () {
    $("#home-page").addClass("animated slideInUp");
});

//Image Blur
$(document).ready(function () {
    $(".image-container").hover(function () {
        $(this).find('img').css("filter", "blur(3px)");
    }, function () {
        $(this).find('img').css("filter", "none");
    });
});

//Tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//Top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Form Validation
//name check
document.querySelector("#name").addEventListener('input', (e) => {
    let inp = e.target.value;
    let regex = new RegExp("^[a-zA-Z ]+$");
    if (regex.test(inp)) {
        document.querySelector("#name").style.animation = "none";
        document.querySelector("#name").style.color = "black";
        document.querySelector("#sendmessage").disabled = false;
    } else {
        document.querySelector("#name").style.animation = "wrong 2s infinite";
        document.querySelector("#name").style.color = "white";
        document.querySelector("#sendmessage").disabled = true;
    }
});
//email check
document.querySelector("#email").addEventListener('input', (e) => {
    let inp = e.target.value;
    let regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
    if (regex.test(inp)) {
        document.querySelector("#email").style.animation = "none";
        document.querySelector("#email").style.color = "black";
        document.querySelector("#sendmessage").disabled = false;
    } else {
        document.querySelector("#email").style.animation = "wrong 2s infinite";
        document.querySelector("#email").style.color = "white";
        document.querySelector("#sendmessage").disabled = true;
    }
});
//phone check
document.querySelector("#phone").addEventListener('input', (e) => {
    document.querySelector("#phone").style.fontFamily="'Inconsolata', monospace";
    let inp = e.target.value;
    let regex = new RegExp("^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$");
    if (regex.test(inp)) {
        document.querySelector("#phone").style.animation = "none";
        document.querySelector("#phone").style.color = "black";
        document.querySelector("#sendmessage").disabled = false;
    } else {
        document.querySelector("#phone").style.animation = "wrong 2s infinite";
        document.querySelector("#phone").style.color = "white";
        document.querySelector("#sendmessage").disabled = true;
    }
});
//subject check
document.querySelector("#subject").addEventListener('input', (e) => {
    let inp = e.target.value;
    if (inp) {
        document.querySelector("#subject").style.animation = "none";
        document.querySelector("#subject").style.color = "black";
        document.querySelector("#sendmessage").disabled = false;
    } else {
        document.querySelector("#subject").style.animation = "wrong 2s infinite";
        document.querySelector("#subject").style.color = "white";
        document.querySelector("#sendmessage").disabled = true;
    }
});
//subject check
document.querySelector("#message").addEventListener('input', (e) => {
    let inp = e.target.value;
    if (inp) {
        document.querySelector("#message").style.animation = "none";
        document.querySelector("#message").style.color = "black";
        document.querySelector("#sendmessage").disabled = false;
    } else {
        document.querySelector("#message").style.animation = "wrong 2s infinite";
        document.querySelector("#message").style.color = "white";
        document.querySelector("#sendmessage").disabled = true;
    }
});

//==========================
