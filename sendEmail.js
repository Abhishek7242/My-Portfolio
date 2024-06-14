let form = document.getElementById('form');

function sendEmail() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let body = `<p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>`;

    console.log(body);  // Log the body to verify the content

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mark217242@gmail.com",
        Password: "E72AEFBCFD75F431B8ECD20996EFB2CB666F",
        To: 'mark217242@gmail.com',
        From: "mark217242@gmail.com",
        Subject: "This is the subject",
        Body: body

    }).then(
        response => {
            alert("Email sent successfully!");
            console.log("Email sent:", response);
        }
    ).catch(
        error => {
            alert("Failed to send email. Please try again later.");
            console.error("Failed to send email:", error);
        }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
});
