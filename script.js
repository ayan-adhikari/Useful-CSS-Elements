//Run when page loads
console.log("Page loaded")
//Scroll to top function when elements loads
const top = document.getElementById("top")
function scrollToTop()
{
    top.scrollIntoView()
}
window.addEventListener("load", scrollToTop)