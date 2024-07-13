const header = document.querySelector(".navbar");

// fires up whtn the scroll event happen
window.onscroll = function() {
    // Returns the number of pixels that the document is scrolled vertically and its value is assigned to a variable named top
    var top = window.scrollY;
    // If the value of top is greater than or equal to 100, it adds a class of navbarDark to the header.
    if (top >= 100) {
        header.classList.add("navbarDark");
    } else {
        header.classList.remove('navbarDark');
    }
}