// Get the container element
var btnContainer = document.getElementById("planPane");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("plan-card");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("poop");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" poop", "");
    }

    // Add the active class to the current/clicked button
    this.className += " poop";
  });
} 

// STEP 3

const checkboxes = document.querySelectorAll('.myCheckbox');
const addOns = document.querySelectorAll('.add-on-item');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      addOns[index].classList.add('checked');
    } else {
      addOns[index].classList.remove('checked');
    }
  });
});