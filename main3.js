function registerUser() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if the user already exists in localStorage
    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    var isUserExists = existingUsers.some(function(user) {
        return user.email === email;
    });

    if (isUserExists) {
        alert("User with this email already exists. Please use a different email.");
    } else {
     
        var newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

      
        existingUsers.push(newUser);

      
        localStorage.setItem("users", JSON.stringify(existingUsers));

        alert("Registration successful! You can now login.");
    }
}

function loginUser() {
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;

  
    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  
    var matchedUser = existingUsers.find(function(user) {
        return user.email === loginEmail;
    });

 
    if (matchedUser && matchedUser.password === loginPassword) {
        alert("Login successful! Welcome, " + matchedUser.firstName + " " + matchedUser.lastName + "!");
    } else {
        alert("Invalid email or password. Please try again.");
    }
}