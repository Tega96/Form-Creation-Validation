document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form')
    const feedbackDiv = document.getElementById('form-feedback')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const username = document.getElementById('username').event.value.trim()
        const email = document.getElementById('email').event.value.trim()
        const password = document.getElementById('password').event.value.trim()

        // Initializing validation variables
        const isValid = true
        const message = [
            {username: 'Enter a minimum of 3 characters'},
            {email: 'Enter a correct email address'},
            {password: 'Password must be greater than 6 character'}
        ]

        // Username Validation
        if (username.length <3 || username !== isValid) {
            message[0].username
        }
        if (!email.include('@') && !email.include('.')){
            message[1].email
        }
        if (password.length < 6) {
            message[2].password
        }

        form.onsubmit()
    })


    feedbackDiv.style.display='block'
    if (isValid) {
        feedbackDiv.textcontent = 'Registration successful!'
        feedbackDiv.style.color = '#28a745'
    } else {
        feedbackDiv.join(message + <br /> )

        feedbackDiv.style.color='#dc3545'
    }
})