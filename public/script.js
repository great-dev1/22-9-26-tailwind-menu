function onSearchClick() {
  isSearchOn = document.getElementById("search-active").checked
  if (isSearchOn) {
    console.log("Search")
    document.querySelector(".search-content").style.right = "-100%"
  } else {
    console.log("No Search")
    document.querySelector(".search-content").style.right = "0"
    document.querySelector(".content").style.right = "-100%"
    document.getElementById("active").checked = false
  }
}

function onMenuClick() {
  isMenuOn = document.getElementById("active").checked
  if (isMenuOn) {
    console.log("Menu")
    document.querySelector(".content").style.right = "-100%"
  } else {
    console.log("No Menu")
    document.querySelector(".content").style.right = "0"
    document.querySelector(".search-content").style.right = "-100%"
    document.getElementById("search-active").checked = false
  }
}