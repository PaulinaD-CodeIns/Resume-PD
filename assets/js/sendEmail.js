function sendEmail(contactForm) {
    emailjs.send("service_h8wyarn", "template_3agbcos", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS!", response);
            contactForm.reset();
        },
        function(error) {
            console.log("FAILED!", error);
        }
    );
    return false;
}
