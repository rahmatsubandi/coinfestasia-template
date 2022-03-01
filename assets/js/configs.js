/* ------------------------------------------------------------------------------
	
  Name: Coinfest Asia 2022 - Website
  Description: Coinfest Asia 2022 - Website
  License: ISC
  
  ------------------------------------------------------------------------------ */
//

// Splide
let getSplide = document.querySelectorAll("[data-slides]");

if (getSplide.length !== 0) {
  getSplide.forEach((tgetEl) => {
    if (tgetEl.getAttribute("data-testimonials") != null) {
      if (tgetEl.classList.contains("splide") == true) {
        new Splide("#" + tgetEl.getAttribute("id") + ".splide", {
          type: "loop",
          focus: "center",
          trimSpace: false,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          pauseOnFocus: true,
          resetProgress: true,
          arrows: false,
          pagination: false,
          keyboard: true,
          gap: "24px",
          cover: true,
          width: "100%",
          height: "auto",
          fixedWidth: "764px",
          breakpoints: {
            1440: {
              fixedWidth: "770px",
            },
            1280: {
              pagination: true,
              fixedWidth: "682px",
            },
            984: {
              pagination: true,
              fixedWidth: "548px",
            },
            640: {
              pagination: true,
              gap: "16px",
              padding: { left: "16px", right: "16px" },
              fixedWidth: "100%",
            },
          },
        }).mount();
      }
    } else if (tgetEl.getAttribute("data-future") != null) {
      if (tgetEl.classList.contains("splide") == true) {
        var initFuture = new Splide(
          "#" + tgetEl.getAttribute("id") + ".splide",
          {
            type: "loop",
            trimSpace: false,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            arrows: false,
            pagination: false,
            keyboard: false,
            gap: "24px",
            width: "100%",
            fixedHeight: "520px",
            fixedWidth: "652px",
            heightRatio: 0.8,
            padding: { left: "0", right: "16px" },
            breakpoints: {
              1280: {
                fixedHeight: "456px",
                fixedWidth: "698px",
              },
              984: {
                fixedHeight: "434px",
                fixedWidth: "586px",
              },
              640: {
                gap: "16px",
                fixedHeight: "246px",
                fixedWidth: "288px",
              },
            },
          }
        );

        var getControl = tgetEl.getAttribute("data-slide-control");

        if (getControl != "") {
          var setInitControl = document.querySelector(getControl);

          if (setInitControl != null) {
            var getControlLeft =
              setInitControl.getAttribute("data-control-left");
            var getControlRight =
              setInitControl.getAttribute("data-control-right");

            if (getControlLeft != "") {
              var setControlLeft = document.querySelector(getControlLeft);
              if (setControlLeft != null) {
                setControlLeft.addEventListener("click", (e) => {
                  initFuture.go("<");

                  e.preventDefault();
                });
              }
            }

            if (getControlRight != "") {
              var setControlRight = document.querySelector(getControlRight);
              if (setControlRight != null) {
                setControlRight.addEventListener("click", (e) => {
                  initFuture.go(">");

                  e.preventDefault();
                });
              }
            }
          }
        }

        initFuture.mount();
      }
    } else if (tgetEl.getAttribute("data-slides-mainthumbnails") != null) {
      if (tgetEl.classList.contains("splide") == true) {
        var initMainThumbnails = new Splide(
          "#" + tgetEl.getAttribute("id") + ".splide",
          {
            trimSpace: false,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            arrows: false,
            pagination: false,
            keyboard: true,
            gap: "24px",
            width: "100%",
            breakpoints: {
              640: {
                gap: "16px",
              },
            },
          }
        );

        var getAttrThumbnails = tgetEl.getAttribute("data-slides-thumbnails");

        if (getAttrThumbnails != "") {
          var setAttrThumbnails = document.querySelector(getAttrThumbnails);

          if (setAttrThumbnails != null) {
            var getItemsThumbnail = document.querySelectorAll(
              "#" +
                setAttrThumbnails.getAttribute("id") +
                ".splide .splide__list .splide__slide"
            );

            for (var i = 0; i < getItemsThumbnail.length; i++) {
              initThumbnail(getItemsThumbnail[i], i);
            }

            function initThumbnail(thumbnail, index) {
              thumbnail.addEventListener("click", (e) => {
                initMainThumbnails.go(index);

                e.preventDefault();
              });
            }
          }
        }

        var initItemsThumbnails = new Splide(
          "#" + setAttrThumbnails.getAttribute("id"),
          {
            trimSpace: false,
            fixedWidth: 100,
            gap: 0,
            rewind: true,
            arrows: false,
            pagination: false,
            breakpoints: {
              640: {
                fixedWidth: 70,
              },
            },
          }
        );

        initMainThumbnails.sync(initItemsThumbnails);
        initItemsThumbnails.mount();
        initMainThumbnails.mount();
      }
    } else if (tgetEl.getAttribute("data-slides-grids") != null) {
      if (tgetEl.classList.contains("splide") == true) {
        var initGrids = new Splide(
          "#" + tgetEl.getAttribute("id") + ".splide",
          {
            type: "loop",
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            arrows: false,
            pagination: false,
            keyboard: false,
            drag: false,
            gap: "24px",
            width: "100%",
            fixedWidth: "100%",
            breakpoints: {
              640: {
                gap: "0",
                width: "100%",
                fixedWidth: "100%",
              },
            },
          }
        );

        var getControl = tgetEl.getAttribute("data-slide-control");

        if (getControl != "") {
          var setInitControl = document.querySelector(getControl);

          if (setInitControl != null) {
            var getControlLeft =
              setInitControl.getAttribute("data-control-left");
            var getControlRight =
              setInitControl.getAttribute("data-control-right");

            if (getControlLeft != "") {
              var setControlLeft = document.querySelector(getControlLeft);
              if (setControlLeft != null) {
                setControlLeft.addEventListener("click", (e) => {
                  initGrids.go("<");

                  e.preventDefault();
                });
              }
            }

            if (getControlRight != "") {
              var setControlRight = document.querySelector(getControlRight);
              if (setControlRight != null) {
                setControlRight.addEventListener("click", (e) => {
                  initGrids.go(">");

                  e.preventDefault();
                });
              }
            }
          }
        }

        initGrids.mount();
      }
    }
  });
}

// Tabs
var setNavTabs = document.querySelectorAll(".nav.nav-tabs .nav-item .nav-link");
var setNavTabsActive = document.querySelector(
  ".nav.nav-tabs .nav-item .nav-link.active"
);

if (setNavTabsActive != null) {
  setNavTabsActive.parentElement.classList.add("active");
}

if (setNavTabs.length !== 0) {
  setNavTabs.forEach((tgetEl) => {
    tgetEl.addEventListener("click", (e) => {
      var getNavTabsActive = document.querySelectorAll(
        ".nav.nav-tabs .nav-item.active"
      );

      getNavTabsActive.forEach((el) => {
        el.classList.remove("active");
      });

      if (tgetEl.parentElement.classList.contains("active") != true) {
        tgetEl.parentElement.classList.contains("active");
      }

      e.preventDefault();
    });
  });
}

// Agenda
var setAgenda = document.querySelectorAll("[data-agenda]");

if (setAgenda.length !== 0) {
  setAgenda.forEach((tgetEl) => {
    tgetEl.addEventListener("click", (e) => {
      var getAttrTarget = tgetEl.getAttribute("data-agenda-target");

      if (getAttrTarget != "") {
        var setAttrTarget = document.querySelector(getAttrTarget);

        if (setAttrTarget != null) {
          if (setAttrTarget.classList.contains("hidden") == true) {
            setAttrTarget.classList.remove("hidden");
          } else {
            setAttrTarget.classList.add("hidden");
          }
        }
      }

      e.preventDefault();
    });
  });
}

// Navbar
var setNavbar = document.querySelector("[data-navbar]");
var setNavbarCollapse = document.querySelector("[data-collapse]");

// Navbar Menu (Toggle)
let getToggleMenu = document.querySelectorAll("[data-toggle-menu]");

if (getToggleMenu.length !== 0) {
  getToggleMenu.forEach((tgetEl) => {
    var getAttrTarget = tgetEl.getAttribute("data-target");
    var getAttrIcons = tgetEl.getAttribute("data-icons");

    if (getAttrTarget !== "") {
      tgetEl.addEventListener("click", (e) => {
        var setAttrTarget = document.querySelector(getAttrTarget);

        if (setAttrTarget !== null) {
          var setAttrIcons = document.querySelector(getAttrIcons);

          if (setAttrIcons !== null) {
            setAttrIcons.classList.contains("close") !== true
              ? setAttrIcons.classList.add("close")
              : setAttrIcons.classList.remove("close");
          }

          if (setAttrTarget.classList.contains("active") !== true) {
            setAttrTarget.classList.add("active");

            if (setNavbar.classList.contains("active") == true) {
            } else {
              setNavbar.classList.add("active");
            }
          } else {
            setAttrTarget.classList.remove("active");

            if (document.body.classList.contains("active") == false) {
              setNavbar.classList.remove("active");
            }
          }
        }

        e.preventDefault();
      });
    }
  });
}

// Navbar Menu Item (Dropdown)
var setNavMenuDropdown = document.querySelectorAll(
  ".navbar .nav.menu .dropdown-item.menu-item"
);

if (setNavMenuDropdown.length !== 0) {
  setNavMenuDropdown.forEach((tgetEl) => {
    if (tgetEl.classList.contains("dropdown-item") == true) {
      var getNavSubMenuDropdown = tgetEl.childNodes[3];

      if (getNavSubMenuDropdown !== null) {
        getNavSubMenuDropdown.insertAdjacentHTML(
          "beforebegin",
          `<button class="dropdown-toggle text-current outline-none" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="javascript:void(0);">
            <svg class="dropdown-toggle-icons fill-current h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" />
            </svg>
          </button>`
        ); 
      }
    }
  });
}

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
