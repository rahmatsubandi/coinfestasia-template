/* ------------------------------------------------------------------------------
	
  Name: Coinfest Asia 2022 - Website
  Description: Coinfest Asia 2022 - Website
  License: ISC
  
  ------------------------------------------------------------------------------ */
//

// Navbar
var setNavbar = document.querySelector("[data-navbar]");

// App Scroll
var defaultScroll = Math.ceil(window.pageYOffset);

window.addEventListener("scroll", () => {
  var lengthScroll = Math.ceil(window.pageYOffset);

  if (setNavbar !== null) {
    if (lengthScroll >= 26) {
      setNavbar.classList.add("active");
      document.body.classList.add("active");
    } else if (lengthScroll <= 26) {
      setNavbar.classList.remove("active");
      document.body.classList.remove("active");
    }
  }

  lengthScroll = defaultScroll;
});
