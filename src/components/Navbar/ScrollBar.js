
function ScrollBar(props) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("rightbar").style.top = "100px";
      } else {
        document.getElementById("navbar").style.top = "-70px";
        document.getElementById("rightbar").style.top = "30px";

      }
      prevScrollpos = currentScrollPos;
    }
}

export default ScrollBar;