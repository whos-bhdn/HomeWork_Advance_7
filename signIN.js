let emailSingIn = document.querySelector('#emailIn');
let passwordSigIn = document.querySelector('#passwordIn');
let SignIn = document.querySelector('#signIn');
let f2 = document.querySelector('#f2');
let innerBlock = document.querySelector('#innerBlock');

let UserData = localStorage.getItem('Користувач');
let ObjectUserData = JSON.parse(UserData);
console.log(ObjectUserData);



SignIn.addEventListener('click', () => {
    console.log(ObjectUserData)
    if (ObjectUserData != null){
        ObjectUserData.forEach((e, i) => {
            console.log(e);
            console.log(e.email);
            console.log(emailSingIn.value);

            if (e.email != emailSingIn.value || e.password != passwordSigIn.value){
                alert(`Вхід неможливий!!! Перевірте email або пароль`)
            }
            else {
                let userBox = document.createElement('div');
                userBox.classList.add('box')
                userBox.insertAdjacentHTML('beforeend', '<img src="https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?compress=1&resize=400x300" alt="">' +
                    `<h3 id="nameBox">${e.firstName} ${e.lastName}</h3>` +
                    `<h4 id="emailBox">${e.email}</h4>` +
                    `<h4>Designer & Web Developing</h4>` +
                    `<hr>` +
                    `<button type="button" id="SignUpBox" value="Sign Up">Sign Up</button>`
                );

                innerBlock.innerHTML = `${userBox.innerHTML}`;
                f2.classList.add('disabled')

                let SignUpBox = document.querySelector('#SignUpBox');
                SignUpBox.addEventListener('click', () => {
                    f2.classList.remove('disabled')
                })

            }
        })
    }
    else {
        alert(`Local Storage is empty`)
    }

})

// todo
// need fix:
    // forEach - alert(`Вхід неможливий!!! Перевірте email або пароль`) - викидає алерт, а потім всеодно працює
    // main.js - else if => alert(`User is already registered`) - при одинакових значеннях всеодно етається





