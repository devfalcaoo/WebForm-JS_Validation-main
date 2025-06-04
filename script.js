const form = document.getElementById('form');
const firstName = document.getElementById('First-name');
const lastName = document.getElementById('Last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener ('submit', (event) => {
    event.preventDefault();

////////Verifica se o nome está vazio////////

    if (firstName.value === "") {
        errorInput(firstName, "First name is required");
        return;
    }

////////Verifica se o sobrenome está vazio////////

    if (lastName.value === "") {
        errorInput(lastName, "Last name is required");
        return;
    }

////////Verifica se o e-mail está preenchido e se é válido////////

    if (email.value === "" || !isEmailValid(email.value)) {
        errorInput(email, "Email is required");
        return;
    }

////////Verifica se a senha está preenchida////////

    if (!validatePassword (password.value, 8)) {
        errorInput(password, "Password must be at least 8 characters long");
        return;
    }

////////Se todos os campos estiverem corretamente preenchidos, envie o formulário////////

    alert("Form submitted successfully!");
    form.submit(); 
});

////////Função que valida o e-mail////////
    function isEmailValid (email) {

        //regex para validar o e-mail//
        const emailRegex = new RegExp (
            //usuario12@host.com.br//
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if (emailRegex.test(email)) {
            return true;
        }

        return false;
    }

//////////Função que valida a senha////////
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        //Senha válida//
        return true;
    }
        //Senha inválida//
        return false;
}

////////FUNÇÕES DE VALIDAÇÃO - ICONE DE ERRO////////
    function isFormValid() {
        const formItems = document.querySelectorAll('.form-item');
        return [...formItems].every(item => item.classList.contains('error'));
    }

    function errorInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector('small');
        const icon = formItem.querySelector('img');
    
        textMessage.innerText = message;
        formItem.classList.remove = ('form-content');
        formItem.classList.add('error');
        if (icon) icon.style.visibility = 'visible'; // Exibe o ícone de erro
    }

    function setSuccess(input) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector('small'); // Limpa a mensagem de erro
        const icon = formItem.querySelector('img');

        textMessage.innerText = ''; // Limpa a mensagem de erro
        formItem.classList.remove = ('error');
        formItem.classList.add('form-content');
        if (icon) icon.style.visibility = 'hidden'; // Esconde o ícone de erro
    }