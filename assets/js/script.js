'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
 
  for (let i = 0; i < filterItems.length; i++) {
    const itemCategory = filterItems[i].dataset.category.toLowerCase(); // Define and initialize itemCategory inside the loop


    if (selectedValue === "all" || selectedValue === itemCategory) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    // Remove active class from all pages and links
    navigationLinks.forEach(nav => nav.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // Set current link and corresponding page as active
    this.classList.add("active");
    const currentPage = pages[index]; // Directly use the index
    if (currentPage) {
      currentPage.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
});



function sendEmail(event) {
  event.preventDefault(); // Prevent form submission
  
  var form = document.querySelector('.form');
  var fullName = form.querySelector('input[name="fullname"]').value;
  var email = form.querySelector('input[name="email"]').value;
  var message = form.querySelector('textarea[name="message"]').value;
  
  var mailtoLink = "mailto:tzehong112002@gmail.com" + "?subject=New%20message%20from%20" + encodeURIComponent(fullName) + "&body=" + encodeURIComponent(message) + "%0D%0A%0D%0AReply%20to:%20" + encodeURIComponent(email);
  
  window.open(mailtoLink, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.Certificate-item img');

  images.forEach(function(image) {
    image.addEventListener('click', function() {
      // Clone the clicked image
      const zoomedImg = image.cloneNode(true);

      // Create a container for the zoomed-in image
      const zoomedContainer = document.createElement('div');
      zoomedContainer.classList.add('zoomed-in');
      zoomedContainer.appendChild(zoomedImg);

      // Append the zoomed-in image container to the body
      document.body.appendChild(zoomedContainer);

      // Remove the zoomed-in image when clicked outside of it
      zoomedContainer.addEventListener('click', function() {
        zoomedContainer.remove();
      });
    });
  });
});

document.getElementById("resume-download-btn").addEventListener("click", function() {
  event.preventDefault();
  
  var pdfPath = "./assets/Image_Personal/Resume/Resume_2024.pdf";
  
  var form = document.createElement("form");
  form.setAttribute("method", "get");
  form.setAttribute("action", pdfPath);
  form.setAttribute("target", "_blank"); // Open in a new tab
  
  var input = document.createElement("input");
  input.setAttribute("type", "submit");
  input.setAttribute("style", "display:none;"); // Hide the button
  
  form.appendChild(input);
  document.body.appendChild(form);
  
  input.click();
  
  document.body.removeChild(form);
});

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('resume-download-btn');
  button.addEventListener('click', function() {
      var link = document.createElement('a');
      link.href = './assets/Image_Personal/Resume/Resume_2024.pdf';
      link.download = 'Tan_Tze_Hong_Resume_2024.pdf'; // This is the suggested filename for the downloaded file
      document.body.appendChild(link); // Append link to body
      link.click(); // Simulate click to download
      document.body.removeChild(link); // Remove the link when done
  });
});









