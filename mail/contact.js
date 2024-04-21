
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    // Validate the email field
    if (!validateEmail(parms.email)) {
        alert('Please enter a valid email address.');
        return;
    }

    emailjs.send(parms).then(alert("Email Sent!"))
}

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps

        let parms = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        }

        // Validate the email field
        if (!validateEmail(parms.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        emailjs.send("service_22ahy6b", "template_20pjeny", parms)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again.');
            });
    });
}

// Email validation function using a regular expression
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}