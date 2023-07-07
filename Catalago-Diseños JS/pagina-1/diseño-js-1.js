const inputIcon = document.querySelector(".input__icon");
const inputPassword = document.querySelector(".input__field");

inputIcon.addEventListener("click", () => {
    inputIcon.classList.toggle(`ri-eye-off-line`);/*Estilos de icono del ojo abierto y cerrado */
    inputIcon.classList.toggle(`ri-eye-line`);
    inputPassword.type = 
        inputPassword.type === "password" ? "text" : "password"/* alternar el texto del input */
})