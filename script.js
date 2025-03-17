const redCadastro = document.getElementById("buttonCadas");
if (redCadastro) {
    redCadastro.addEventListener("click", function (event){
        event.preventDefault();
        window.location.href = "cadastro.html";
    });
};

const redLogin = document.getElementById("buttonLogin");
if (redLogin) {
    redLogin.addEventListener("click", function (event){
        event.preventDefault();
        window.location.href = "login.html";
    });
};

const buttonEntrar = document.getElementById("buttonEntrar");

const buttonCadastrar = document.getElementById("cadastrar");

function msgButton(){
    if (buttonEntrar){
        buttonEntrar.addEventListener("click", function (event){
            event.preventDefault();
            alert("Usuário Logado com Sucesso")
        })
    }

    if (buttonCadastrar){
        buttonCadastrar.addEventListener("click", function (event){
            event.preventDefault();
            alert("Conta criada com sucesso")
        })
    }
}