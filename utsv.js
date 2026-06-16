const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields");
    return;
  }

  alert("Message sent successfully!");

  form.reset();

});


// Smooth scrolling

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }

  });

});