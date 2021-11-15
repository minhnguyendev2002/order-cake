document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 30) {
            document.getElementById("navbar_top").classList.add("fixed-top");
            var navbar_height = document.querySelector(".topNav").offsetHeight;
            document.body.style.paddingTop = navbar_height + "px";
        } else {
            document.getElementById("navbar_top").classList.remove("fixed-top");
            document.body.style.paddingTop = "0";
        }
    });
});
