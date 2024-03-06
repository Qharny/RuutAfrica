
function sendEmail() {
document.getElementById("loader-cont").style.display = "flex";
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ih3z8k6";
  const templateID = "template_bmj1wqh";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {   
document.getElementById("loader-cont").style.display = "none";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email has been sent successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((err) => console.log(err));
}
