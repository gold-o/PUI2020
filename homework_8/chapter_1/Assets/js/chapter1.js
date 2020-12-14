/*hide  or show dropdown*/
function showDropdown() {
  document.getElementById("dropdown1").classList.toggle("show");
}

/*close dropdown menu*/
window.onclick = function(event) {
  if (!event.target.matches('.chapters')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
