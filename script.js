console.log("Page loaded")
const top = document.getElementById("top")
function scrollToTop()
{
    top.scrollIntoView()
}
window.addEventListener("load", scrollToTop)