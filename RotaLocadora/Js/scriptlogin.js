// Função para alternar a visibilidade da senha
function togglePasswordVisibility(inputId, toggleId, eyeOpen, eyeClosed) {
    const senhaInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleId);

    if (senhaInput && toggleIcon) {
        toggleIcon.addEventListener("click", function () {
            if (senhaInput.type === "password") {
                senhaInput.type = "text";
                this.src = eyeOpen;
            } else {
                senhaInput.type = "password";
                this.src = eyeClosed;
            }
        });
    }
}

// Função para validar a data de nascimento
function validarDataNascimento(data) {
    const dataSelecionada = new Date(data);
    if (isNaN(dataSelecionada.getTime())) {
        return false;
    }
    const dataAtual = new Date();
    if (dataSelecionada > dataAtual || dataSelecionada.getFullYear() < 1900) {
        return false;
    }
    return true;
}

// Função para exibir a mensagem de erro de data
function exibirErroData() {
    const mensagemErroData = document.getElementById("mensagemErroData");
    mensagemErroData.style.display = "block";

    setTimeout(() => {
        mensagemErroData.classList.add("fade-out");

        mensagemErroData.addEventListener(
            "transitionend",
            () => {
                mensagemErroData.style.display = "none";
                mensagemErroData.classList.remove("fade-out");
            },
            { once: true }
        );
    }, 500);
}

// Função para exibir a mensagem de sucesso
function exibirMensagemSucesso() {
    const mensagemSucesso = document.getElementById("mensagemSucesso");
    mensagemSucesso.style.display = "block";

    setTimeout(() => {
        mensagemSucesso.classList.add("fade-out");

        mensagemSucesso.addEventListener(
            "transitionend",
            () => {
                mensagemSucesso.style.display = "none";
                mensagemSucesso.classList.remove("fade-out");
            },
            { once: true }
        );
    }, 300);
}

// Função para salvar usuário no localStorage
function salvarUsuario(username, email, senha) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o e-mail já existe
    const emailExiste = usuarios.some((usuario) => usuario.email === email);
    if (emailExiste) {
        const mensagemErroCadastro = document.getElementById("mensagemErroCadastro");
        mensagemErroCadastro.style.display = "block";

        setTimeout(() => {
            mensagemErroCadastro.classList.add("fade-out");

            mensagemErroCadastro.addEventListener(
                "transitionend",
                () => {
                    mensagemErroCadastro.style.display = "none";
                    mensagemErroCadastro.classList.remove("fade-out");
                },
                { once: true }
            );
        }, 500);
        return false;
    }

    // Adiciona o novo usuário
    usuarios.push({ username, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Exibe a mensagem de sucesso
    exibirMensagemSucesso();
    return true;
}

// Função para verificar login
function verificarLogin(email, senha) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (usuarioEncontrado) {
        // Armazena os dados do usuário ativo (aqui usamos sessionStorage)
        sessionStorage.setItem("usuarioAtivo", JSON.stringify(usuarioEncontrado));

        // Redireciona para a página principal
        window.location.href = "/pages/principal.html";
    } else {
        const mensagemErro = document.getElementById("mensagemErro");
        mensagemErro.style.display = "block";
        setTimeout(() => {
            mensagemErro.classList.add("fade-out");
            mensagemErro.addEventListener("transitionend", () => {
                mensagemErro.style.display = "none";
                mensagemErro.classList.remove("fade-out");
            }, { once: true });
        }, 500);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    // Configuração para alternar a visibilidade das senhas
    togglePasswordVisibility(
        "senha",
        "toggleSenha",
        "../assets/img/eye-blind.png",
        "../assets/img/eye.png"
    );
    togglePasswordVisibility(
        "senha-cadastro",
        "toggleSenhaCadastro",
        "../assets/img/eye-blind.png",
        "../assets/img/eye.png"
    );

    // Modal de cadastro e login
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const containerOriginal = document.querySelector(".container");
    const containerCadastro = document.querySelector(".container-cadastro");

    // Abrir o cadastro (exibe a div de cadastro e oculta a de login)
    openModal.addEventListener("click", function (event) {
        event.preventDefault();
        containerOriginal.style.display = "none";
        containerCadastro.style.display = "flex";
        openModal.style.display = "none";
        closeModal.style.display = "inline";
    });

    // Voltar para a tela de login
    closeModal.addEventListener("click", function (event) {
        event.preventDefault();
        containerCadastro.style.display = "none";
        containerOriginal.style.display = "flex";
        closeModal.style.display = "none";
        openModal.style.display = "inline";
    });

    // Configuração do calendário com Pikaday
    const selectedDateDiv = document.getElementById("selected-date");
    const birthdayInput = document.getElementById("birthday");

    const picker = new Pikaday({
        field: birthdayInput, // Input oculto para armazenar a data
        trigger: selectedDateDiv, // Elemento que abre o calendário
        format: "DD/MM/YYYY",
        yearRange: [1900, new Date().getFullYear()], // Define o intervalo de anos de 1900 até o ano atual
        i18n: {
            previousMonth: "Mês anterior",
            nextMonth: "Próximo mês",
            months: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
            ],
            weekdays: [
                "Domingo",
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sábado",
            ],
            weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        },
        onSelect: function () {
            const date = this.getDate();
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            const months = [
                "janeiro",
                "fevereiro",
                "março",
                "abril",
                "maio",
                "junho",
                "julho",
                "agosto",
                "setembro",
                "outubro",
                "novembro",
                "dezembro",
            ];
            // Formata a data para exibição
            const formattedDate = `${day} de ${months[month]} de ${year}`;
            selectedDateDiv.textContent = formattedDate;
            // Atualiza o input oculto com o formato ISO para validação
            birthdayInput.value = date.toISOString();
        },
    });
    selectedDateDiv.addEventListener("click", function () {
        picker.show();
    });

    // Captura o envio do formulário de login
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        verificarLogin(email, senha);
    });

    // Captura o envio do formulário de cadastro, incluindo a validação da data de nascimento
    document.querySelector(".container-cadastro form").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.querySelector(".container-cadastro #email").value;
        const senha = document.getElementById("senha-cadastro").value;
        const dataNascimento = birthdayInput.value;

        if (!validarDataNascimento(dataNascimento)) {
            exibirErroData();
            return;
        }

        if (salvarUsuario(username, email, senha)) {
            // Limpa os campos após o cadastro
            document.getElementById("username").value = "";
            document.querySelector(".container-cadastro #email").value = "";
            document.getElementById("senha-cadastro").value = "";
            birthdayInput.value = "";
            selectedDateDiv.textContent = "Selecione a data de aniversário";

            containerCadastro.style.display = "none";
            containerOriginal.style.display = "flex";
            openModal.style.display = "inline";
        }
    });
});
