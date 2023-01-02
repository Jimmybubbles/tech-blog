async function signupFormHandler(event) {
    event.preventDefault();

    // get data from the form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#username-password').value.trim();

    // conditional fetch
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            Headers: { 'Content-Type': 'application/json ' }
        });
        // check the response 
        if (response.ok) {
            console.log('success');

            //and change the view
            document.location.replace('/dashboard')

        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('#signup-form').addEventListener('sumbit', signupFormHandler)