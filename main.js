let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let signup = document.querySelector('#signUp')

let UserData = localStorage.getItem('Користувач');
let ObjectUserData = JSON.parse(UserData);

let nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordRegex = /[0-9a-zA-Z!@#$%^&*]{6,}/;

let userUp = [];

signup.addEventListener('click', () => {
        let user = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
        }

        let validFirstName = nameRegex.test(user.firstName);
        let validLastName = nameRegex.test(user.lastName);
        let validEmail = emailRegex.test(user.email);
        let validPassword = passwordRegex.test(user.password);


        if (validFirstName || validLastName || validEmail || validPassword) {
            userUp.push(user)
            localStorage.setItem('Користувач', JSON.stringify(userUp))
        }
        else if (ObjectUserData.forEach(e => {
            if (e.email === user.email) {
                    alert(`User is already registered. Try to Sign in`)
                } else {
                    alert(`Try to Sign in`)
                }
            }
        )
        )
        return alert(`Enter all information or switch language to ENG`);

    }
)



