const button = document.getElementById("btn");
const arrowButton = document.getElementById("arrow-button");


button.addEventListener("click",(e)=>{
  e.preventDefault();
  Swal.fire({
    title: '<strong>Info!</strong>',
    icon: 'info',
    html:
      '<b>This Button will work Soon</b>',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  })
})

function myFunction() {

  arrowButton.classList.toggle("icon");
  var x = document.getElementById("myDIV");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




// const form = document.querySelector("#contact-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // Show the SweetAlert confirmation
//   Swal.fire({
//     title: "Are you sure you want to submit the form?",
//     text: "Your data will be sent to the server.",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, send it!",
//   }).then((result) => {
//     if (result.value) {
//       // Submit the form
//       fetch("https://formspree.io/f/mvonkopb", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams(new FormData(form)).toString(),
//       })
//         .then((response) => {
//           // Show a success message
//           Swal.fire({
//             title: "Success!",
//             text: "Your message has been sent.",
//             icon: "success",
//             confirmButtonText: "OK",
//           });
//         })
//         .catch((error) => {
//           // Show an error message
//           Swal.fire({
//             title: "Error!",
//             text: "There was an error sending your message.",
//             icon: "error",
//             confirmButtonText: "OK",
//           });
//         });
//     }
//   });
// });


const video = document.getElementsByClassName("video");

video.addEventListener("mouseenter", function () {
  video.play();
});

video.addEventListener("mouseleave", function () {
  video.pause();
});
