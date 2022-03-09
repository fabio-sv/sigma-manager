const emailDB = "john@exemple.com";
const passwordDB = "123";

function login() {
    const email = formLogin.email.value;
    const password = formLogin.password.value;

    if (email == emailDB && password == passwordDB) {
        /* 
            Aqui envia para o banco o status de logado.
            
            code...
        */
        window.location.href = "http://127.0.0.1:5500/view/home.html";
    } else {
        alert("Usuário não autenticado");
    }
}

function signIn() {
    const signInClass = document.querySelector(".sign-in");

    signInClass.style.zIndex = "0";
    signInClass.style.display = "block";
    signInClass.style.background = "#fff";
}

function closeSignIn() {
    const signInClass = document.querySelector(".sign-in");

    signInClass.style.zIndex = "";
    signInClass.style.display = "";
}
