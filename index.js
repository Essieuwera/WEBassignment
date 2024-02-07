// function for user credentials
function validateCredentials(email, password) {
    // Object containing the valid email and password
    const validCredentials = {
        email: "2300726656@mubs.ac.ug",
        password: "23/U/6656@2024"
    };

    // Check if the provided email and password match the valid credentials
    if (email === validCredentials.email && password === validCredentials.password) {
        // Log a success message if the credentials match
        console.log(`User email is ${email}, login successfully!`);
    } else {
        // Log an error message if the credentials don't match
        console.log("Incorrect user credentials!");
    }
}

//  validateCredentials function
validateCredentials("2300726656@mubs.ac.ug", "23/U/6656@2024"); // Should log "User email is yourstudentname@gmail.com, login successfully!"
