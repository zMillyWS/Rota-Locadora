function toggleOptions() {
    const options = document.getElementById('selectOptions');
    options.classList.toggle('show');
}

// Marca Select Header

function updateSelectedOptions() {
    const selectedOptions = document.getElementById('selectedOptions');
    const checkboxes = document.querySelectorAll('#selectOptions input[type="checkbox"]:checked');

    selectedOptions.innerHTML = '';

    if (checkboxes.length === 0) {
        selectedOptions.innerHTML = 'Selecione a marca do veículo';
    } else {
        const firstOption = checkboxes[0].value;
        const remainingCount = checkboxes.length - 1;

        const span = document.createElement('span');
        span.textContent = firstOption;
        selectedOptions.appendChild(span);

        if (remainingCount > 0) {
            const countSpan = document.createElement('span');
            countSpan.textContent = `(+${remainingCount})`;
            selectedOptions.appendChild(countSpan);
        }
    }
}

window.onload = function () {
    const selectedOptions = document.getElementById('selectedOptions');
    selectedOptions.innerHTML = 'Selecione a marca do veículo';
};

window.onclick = function (event) {
    const customSelect = document.querySelector('.custom-select');
    const selectOptions = document.getElementById('selectOptions');

    if (!customSelect.contains(event.target)) {
        selectOptions.classList.remove('show');
    }
}

function toggleOptionsProposito() {
    document.getElementById("selectOptionsProposito").classList.toggle("show");
}

function selectOptionProposito(value) {
    document.getElementById("selectedOptionProposito").textContent = value;
    document.getElementById("selectOptionsProposito").classList.remove("show");
}
document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".content");
    const contentHistorico = document.querySelector(".content-historico");
    const veiculosBtn = document.querySelector(".pages:nth-child(2)");
    const historicoBtn = document.querySelector(".pages:nth-child(3)");

    function showVeiculos() {
        content.style.display = "block";
        contentHistorico.style.display = "none";
        veiculosBtn.classList.add("selected");
        historicoBtn.classList.remove("selected");
    }

    function showHistorico() {
        content.style.display = "none";
        contentHistorico.style.display = "block";
        historicoBtn.classList.add("selected");
        veiculosBtn.classList.remove("selected");
    }

    veiculosBtn.addEventListener("click", showVeiculos);
    historicoBtn.addEventListener("click", showHistorico);

    // Inicialmente, exibir apenas a seção de veículos e marcar como selecionado
    showVeiculos();
});



// MODAL CADASTRO
function openModal() {
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Marca Modal
function toggleOptionsMarcaModal() {
    document.getElementById("selectOptionsMarcaModal").classList.toggle("show");
}

function selectOptionMarcaModal(value) {
    document.getElementById("selectedOptionMarcaModal").textContent = value;
    document.getElementById("selectOptionsMarcaModal").classList.remove("show");
}

// CALENDAR YEAR
document.addEventListener('DOMContentLoaded', () => {
    const selectTrigger = document.getElementById('select-trigger');
    const yearPlaceholder = document.getElementById('year-placeholder');
    const yearDisplay = document.getElementById('year-display');
    const infiniteYearsContainer = document.getElementById('infinite-years');
    let currentYear = new Date().getFullYear();

    function generateYears() {
        for (let i = 0; i < 100; i++) {
            const yearItem = document.createElement('div');
            yearItem.className = 'year-item';
            yearItem.textContent = (currentYear - 99) + i;
            infiniteYearsContainer.appendChild(yearItem);

            yearItem.addEventListener('click', () => {
                yearPlaceholder.textContent = yearItem.textContent;
                yearDisplay.style.display = 'none';
            });
        }
    }

    generateYears();

    selectTrigger.addEventListener('click', () => {
        if (yearDisplay.style.display === 'none' || yearDisplay.style.display === '') {
            yearDisplay.style.display = 'block';
        } else {
            yearDisplay.style.display = 'none';
        }
    });

    infiniteYearsContainer.addEventListener('scroll', () => {
        const items = document.querySelectorAll('.year-item');
        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const scale = Math.min(1, Math.max(0.5, (rect.top + rect.height / 2) / viewportHeight));
            item.style.fontSize = `${scale * 2}em`;
        });
    });
});


// Proposito Modal
function toggleOptionsPropositoModal() {
    document.getElementById("selectOptionsPropositoModal").classList.toggle("show");
}

function selectOptionPropositoModal(value) {
    document.getElementById("selectedOptionPropositoModal").textContent = value;
    document.getElementById("selectOptionsPropositoModal").classList.remove("show");
}


// stars

document.addEventListener('DOMContentLoaded', function () {
    const allStars = document.querySelectorAll('.stars img');

    allStars.forEach(star => {
        star.addEventListener('mouseover', function () {
            const index = parseInt(this.getAttribute('data-index'));
            highlightStars(this.parentElement, index);
        });

        star.addEventListener('mouseout', function () {
            const index = parseInt(this.getAttribute('data-index'));
            resetStars(this.parentElement, index);
        });

        star.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            setPermanentStars(this.parentElement, index);
        });
    });

    function highlightStars(container, index) {
        const stars = container.querySelectorAll('img');
        stars.forEach((star, i) => {
            if (i < index) {
                star.classList.add('painted');
            }
        });
    }

    function resetStars(container, index) {
        const stars = container.querySelectorAll('img');
        stars.forEach((star, i) => {
            if (i < index && !star.classList.contains('permanent')) {
                star.classList.remove('painted');
            }
        });
    }

    function setPermanentStars(container, index) {
        const stars = container.querySelectorAll('img');
        stars.forEach((star, i) => {
            if (i < index) {
                star.classList.add('permanent', 'painted');
            } else {
                star.classList.remove('permanent', 'painted');
            }
        });
    }
});


// Dados do veículo (exemplo)
const vehicleData = {
    plate: "ABC-1234",
    brand: "Mitsubishi",
    year: 2023,
    color: "Preto",
    purpose: "Uso pessoal",
    zeroKm: "Não",
    comfortLevel: "4",
    location: {
        lat: -23.5505, // Latitude do local de repouso
        lng: -46.6333  // Longitude do local de repouso
    }
};

let linhaSelecionada = null; // Variável global para armazenar a linha selecionada

function openActionsModal(event) {
    event.stopPropagation();

    // Fecha outras modais abertas (se houver)
    closeActionsModal();

    // Posiciona a modal próximo ao botão clicado
    const buttonRect = event.target.getBoundingClientRect();
    const modal = document.getElementById('actionsModal');
    modal.style.display = 'block';
    modal.style.top = `${buttonRect.bottom}px`;
    modal.style.left = `${buttonRect.left}px`;

    // Armazena a linha clicada
    linhaSelecionada = event.target.closest('tr');

    // Adiciona um evento de clique no documento para fechar a modal ao clicar fora
    document.addEventListener('click', closeModalOnClickOutside);
}

function deletarVeiculo() {
    // Verifica se a linha selecionada existe
    if (linhaSelecionada) {
        const placa = linhaSelecionada.getElementsByTagName('td')[0].textContent;
        // Remove a linha da tabela
        linhaSelecionada.remove();

        // Limpa a referência da linha selecionada
        linhaSelecionada = null;

        // Registra a deleção no histórico
        addHistoryItem('deletado', placa);

        // Fecha a modal de ações
        closeActionsModal();
    }

    // Exibe a mensagem de deleção
    openDelete();
}
// Função para fechar a modal de ações
function closeActionsModal() {
    const modal = document.getElementById('actionsModal');
    modal.style.display = 'none';

    // Remove o evento de clique do documento
    document.removeEventListener('click', closeModalOnClickOutside);
}

// Função para fechar a modal ao clicar fora
function closeModalOnClickOutside(event) {
    const modal = document.getElementById('actionsModal');
    const isClickInsideModal = modal.contains(event.target);
    const isClickOnActionsButton = event.target.classList.contains('actions');

    // Fecha a modal se o clique foi fora dela e não foi no botão de ações
    if (!isClickInsideModal && !isClickOnActionsButton) {
        closeActionsModal();
    }
}


// Função para abrir a modal de edição
function openModalEditar(veiculo) {
    // Preenche os campos da modal com os dados do veículo
    document.getElementById('inputPlacaModalEditar').value = veiculo.placa;
    document.getElementById('inputModeloModalEditar').value = veiculo.modelo;
    document.getElementById('inputCorModalEditar').value = veiculo.cor;
    document.getElementById('selectedOptionMarcaModalEditar').textContent = veiculo.marca;
    document.getElementById('year-placeholder-editar').textContent = veiculo.ano;
    document.getElementById('selectedOptionPropositoModalEditar').textContent = veiculo.proposito;
    document.getElementById('inputLatitudeModalEditar').value = veiculo.latitude;
    document.getElementById('inputLongitudeModalEditar').value = veiculo.longitude;
    document.getElementById('veiculoZeroKmEditar').checked = veiculo.zeroKm;

    // Abre a modal de edição
    document.getElementById('modal-overlay-edit').style.display = 'block';
    document.getElementById('modalEditar').style.display = 'block';
}

// Função para fechar a modal de edição
function closeModalEditar() {
    document.getElementById('modal-overlay-edit').style.display = 'none';
}

// Função para fechar a modal de edição


// Função para abrir a modal de edição ao clicar em "Editar"
function openEdit() {
    if (!linhaSelecionada) {
        alert('Selecione uma linha para editar.');
        return;
    }

    // Extrai os dados da linha selecionada (supondo que as células estão na ordem correta)
    const cells = linhaSelecionada.getElementsByTagName('td');
    const placa = cells[0].textContent; // Não será editada
    // Supondo que a segunda célula contém "Marca Modelo" e que você pode separar esses valores, ou então, apenas preencher o modelo.
    const marcaModelo = cells[1].textContent.split(' ');
    const marca = marcaModelo[0];
    const modelo = marcaModelo.slice(1).join(' ');

    // Preenche os campos do modal de edição
    document.getElementById('inputPlacaModalEditar').value = placa;
    document.getElementById('inputModeloModalEditar').value = modelo;
    document.getElementById('inputCorModalEditar').value = cells[3].textContent;
    document.getElementById('selectedOptionMarcaModalEditar').textContent = marca;
    document.getElementById('year-placeholder-editar').textContent = cells[2].textContent;
    document.getElementById('selectedOptionPropositoModalEditar').textContent = cells[4].textContent;

    // Para as coordenadas, supondo que estão separadas por vírgula
    const coords = cells[7].textContent.split(',');
    if (coords.length >= 2) {
        document.getElementById('inputLatitudeModalEditar').value = coords[0].trim();
        document.getElementById('inputLongitudeModalEditar').value = coords[1].trim();
    }

    // Atualiza o checkbox de zero-quilômetro conforme o texto
    document.getElementById('veiculoZeroKmEditar').checked = (cells[5].textContent.trim() === 'Sim');

    // Se houver uma forma de extrair o conforto (por exemplo, o número antes da imagem), você pode fazer:
    const confortoText = cells[6].textContent.split(' ')[0];
    const rating = parseInt(confortoText);

    // Seleciona todas as imagens de estrela dentro do modal de edição
    const modalStars = document.querySelectorAll('#modalEditar .stars img');
    modalStars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('permanent', 'painted');
        } else {
            star.classList.remove('permanent', 'painted');
        }
    });
    closeActionsModal();


    // Exibe o modal de edição
    document.getElementById('modal-overlay-edit').style.display = 'block';
    document.getElementById('modalEditar').style.display = 'block';
}


// MODAL EDITAR CONFIG

// Função para alternar as opções do select de marca na modal de edição
function toggleOptionsMarcaModalEditar() {
    document.getElementById("selectOptionsMarcaModalEditar").classList.toggle("show");
}

// Função para selecionar uma opção no select de marca na modal de edição
function selectOptionMarcaModalEditar(value) {
    document.getElementById("selectedOptionMarcaModalEditar").textContent = value;
    document.getElementById("selectOptionsMarcaModalEditar").classList.remove("show");
}

// Função para alternar as opções do select de propósito na modal de edição
function toggleOptionsPropositoModalEditar() {
    document.getElementById("selectOptionsPropositoModalEditar").classList.toggle("show");
}

// Função para selecionar uma opção no select de propósito na modal de edição
function selectOptionPropositoModalEditar(value) {
    document.getElementById("selectedOptionPropositoModalEditar").textContent = value;
    document.getElementById("selectOptionsPropositoModalEditar").classList.remove("show");
}

// Função para o calendário de anos na modal de edição
document.addEventListener('DOMContentLoaded', () => {
    const selectTriggerEditar = document.getElementById('select-trigger-editar');
    const yearPlaceholderEditar = document.getElementById('year-placeholder-editar');
    const yearDisplayEditar = document.getElementById('year-display-editar');
    const infiniteYearsContainerEditar = document.getElementById('infinite-years-editar');
    let currentYear = new Date().getFullYear();

    function generateYearsEditar() {
        for (let i = 0; i < 100; i++) {
            const yearItem = document.createElement('div');
            yearItem.className = 'year-item';
            yearItem.textContent = (currentYear - 99) + i;
            infiniteYearsContainerEditar.appendChild(yearItem);

            yearItem.addEventListener('click', () => {
                yearPlaceholderEditar.textContent = yearItem.textContent;
                yearDisplayEditar.style.display = 'none';
            });
        }
    }

    generateYearsEditar();

    selectTriggerEditar.addEventListener('click', () => {
        if (yearDisplayEditar.style.display === 'none' || yearDisplayEditar.style.display === '') {
            yearDisplayEditar.style.display = 'block';
        } else {
            yearDisplayEditar.style.display = 'none';
        }
    });

    infiniteYearsContainerEditar.addEventListener('scroll', () => {
        const items = document.querySelectorAll('.year-item');
        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const scale = Math.min(1, Math.max(0.5, (rect.top + rect.height / 2) / viewportHeight));
            item.style.fontSize = `${scale * 2}em`;
        });
    });
});


// Funçao para abrir o popup de deletado
function openDelete() {
    const deleteMessage = document.getElementById('deleteMessage');

    // Exibe a mensagem de deleção
    deleteMessage.style.display = 'block';
    deleteMessage.style.opacity = '1'; // Garante que a mensagem esteja totalmente visível

    // Inicia o fade-out após 3 segundos
    setTimeout(() => {
        let opacity = 1;
        const fadeOutInterval = setInterval(() => {
            opacity -= 0.05; // Reduz a opacidade gradualmente
            deleteMessage.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(fadeOutInterval); // Para o intervalo quando a opacidade chegar a 0
                deleteMessage.style.display = 'none'; // Esconde a mensagem
            }
        }, 50); // Ajusta a velocidade do fade-out
    }, 500); // Tempo antes de iniciar o fade-out (3 segundos)

    closeActionsModal(); // Fecha a modal de ações
}

// Adicionar evento de clique aos três pontinhos
document.addEventListener('DOMContentLoaded', function () {
    const actionsButtons = document.querySelectorAll('.actions');
    actionsButtons.forEach(button => {
        button.addEventListener('click', openActionsModal);
    });
});

function openDetails() {
    if (linhaSelecionada) {
        const cells = linhaSelecionada.getElementsByTagName('td');

        // Preenche os dados do modal de detalhes
        document.getElementById('vehiclePlate').textContent = cells[0].textContent;

        // Se a célula 1 contém "Marca Modelo", separe pelo espaço (ou ajuste conforme necessário)
        const marcaModelo = cells[1].textContent.split(' ');
        document.getElementById('vehicleBrand').textContent = marcaModelo[0];

        document.getElementById('vehicleYear').textContent = cells[2].textContent;
        document.getElementById('vehicleColor').textContent = cells[3].textContent;
        document.getElementById('vehiclePurpose').textContent = cells[4].textContent;
        document.getElementById('vehicleZeroKm').textContent = cells[5].textContent;
        document.getElementById('vehicleComfortLevel').textContent = cells[6].textContent;

        // Extraindo as coordenadas (supondo que estejam separadas por vírgula)
        const coords = cells[7].textContent.split(',');
        if (coords.length === 2) {
            const lat = parseFloat(coords[0].trim());
            const lng = parseFloat(coords[1].trim());
            // Atualize os dados globais do veículo ou passe as coordenadas para o mapa
            vehicleData.location = { lat, lng };
        }
    }

    // Abre o modal de detalhes e fecha a modal de ações
    document.getElementById('vehicleModal').style.display = 'block';
    closeActionsModal();

    // Inicializa o mapa com as novas coordenadas
    initializeMap();
}


function initializeMap() {
    // Verifica se o container do mapa já possui um mapa inicializado
    if (window.map) {
        window.map.remove();
    }

    // Cria o mapa com as coordenadas do veículo
    window.map = L.map('vehicle-map', { zoomControl: false })
        .setView([vehicleData.location.lat, vehicleData.location.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(window.map);
    // Após criar o mapa, adicione o controle personalizado
    locationInfoControl.addTo(window.map);


    // Adiciona um marcador na posição do veículo
    L.marker([vehicleData.location.lat, vehicleData.location.lng]).addTo(window.map)
        .openPopup();
}



// CADASTRAR FUNCIONAL 

// Botao de Salvar
document.addEventListener('DOMContentLoaded', function () {
    const salvarBtn = document.querySelector('#modal .modal-footer button');
    salvarBtn.addEventListener('click', function () {
        cadastrarVeiculo();
    });
});
function cadastrarVeiculo() {
    // Captura os dados do formulário
    const placa = document.getElementById('inputPlacaModal').value;
    const modelo = document.getElementById('inputModeloModal').value;
    const cor = document.getElementById('inputCorModal').value;
    const marca = document.getElementById('selectedOptionMarcaModal').textContent;
    const ano = document.getElementById('year-placeholder').textContent;
    const proposito = document.getElementById('selectedOptionPropositoModal').textContent;
    const latitude = document.getElementById('inputLatitudeModal').value;
    const longitude = document.getElementById('inputLongitudeModal').value;
    const zeroKm = document.getElementById('veiculoZeroKm').checked ? 'Sim' : 'Não';
    const conforto = document.querySelectorAll('.stars img.permanent').length;

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!placa || !modelo || !cor || !marca || !ano || !proposito || !latitude || !longitude) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Cria uma nova linha na tabela
    const tabela = document.querySelector('.table-container table tbody');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${placa}</td>
        <td>${marca} ${modelo}</td>
        <td>${ano}</td>
        <td>${cor}</td>
        <td>${proposito}</td>
        <td>${zeroKm}</td>
        <td class="stars">${conforto} <img src="/assets/img/star-solid.png" alt="star"></td>
        <td>${latitude}, ${longitude}</td>
        <td class="actions">⋮</td>
    `;

    // Adiciona um evento de clique aos três pontinhos da nova linha
    const tresPontinhos = novaLinha.querySelector('.actions');
    tresPontinhos.addEventListener('click', function (event) {
        openActionsModal(event);
    });

    // Chama a função para registrar o cadastro no histórico
    addHistoryItem('cadastrado', placa);

    // Adiciona a nova linha à tabela
    tabela.appendChild(novaLinha);

    // Fecha a modal de cadastro
    closeModal();

    // Limpa os campos do formulário
    limparFormulario();
}

// limpa o formulario
function limparFormulario() {
    // Limpa os campos do formulário
    document.getElementById('inputPlacaModal').value = '';
    document.getElementById('inputModeloModal').value = '';
    document.getElementById('inputCorModal').value = '';
    document.getElementById('selectedOptionMarcaModal').textContent = 'Selecione uma Marca';
    document.getElementById('year-placeholder').textContent = 'Selecione um ano';
    document.getElementById('selectedOptionPropositoModal').textContent = 'Selecione um propósito';
    document.getElementById('inputLatitudeModal').value = '';
    document.getElementById('inputLongitudeModal').value = '';
    document.getElementById('veiculoZeroKm').checked = false;

    // Limpa as estrelas de conforto
    const stars = document.querySelectorAll('#modal .stars img');
    stars.forEach(star => {
        star.classList.remove('permanent', 'painted');
    });

}


function salvarEdicao() {
    // Obtém os valores atualizados do modal de edição
    const modelo = document.getElementById('inputModeloModalEditar').value;
    const cor = document.getElementById('inputCorModalEditar').value;
    const marca = document.getElementById('selectedOptionMarcaModalEditar').textContent;
    const ano = document.getElementById('year-placeholder-editar').textContent;
    const proposito = document.getElementById('selectedOptionPropositoModalEditar').textContent;
    const latitude = document.getElementById('inputLatitudeModalEditar').value;
    const longitude = document.getElementById('inputLongitudeModalEditar').value;
    const zeroKm = document.getElementById('veiculoZeroKmEditar').checked ? 'Sim' : 'Não';

    // Conta as estrelas marcadas como "permanent" para o nível de conforto
    const modalEditar = document.getElementById('modalEditar');
    const comfortStars = modalEditar.querySelectorAll('.stars img.permanent').length;

    // Atualiza a linha selecionada na tabela
    if (linhaSelecionada) {
        const cells = linhaSelecionada.getElementsByTagName('td');
        // Mesmo que a placa não seja editável, precisamos dela para identificar o veículo
        const placa = cells[0].textContent;

        cells[1].textContent = `${marca} ${modelo}`; // Atualiza Marca e Modelo juntos
        cells[2].textContent = ano;
        cells[3].textContent = cor;
        cells[4].textContent = proposito;
        cells[5].textContent = zeroKm;
        cells[6].innerHTML = `${comfortStars} <img src="/assets/img/star-solid.png" alt="star">`;
        cells[7].textContent = `${latitude}, ${longitude}`;

        // Registra a edição no histórico utilizando a placa extraída
        addHistoryItem('editado', placa);
    }

    // Fecha o modal de edição
    closeModalEditar();
}


document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector('.vehicle-close');
    closeBtn.addEventListener('click', function () {
        document.getElementById('vehicleModal').style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const vehicleModal = document.getElementById('vehicleModal');
    vehicleModal.addEventListener('click', function (event) {
        // Se o clique foi no container do modal e não no conteúdo interno
        if (event.target === vehicleModal) {
            vehicleModal.style.display = 'none';
        }
    });
});

function addHistoryItem(action, placa) {
    const historyContainer = document.querySelector('.historico-container');

    // Remove o placeholder se existir
    const noHistoryMessage = historyContainer.querySelector('#no-history-message');
    if (noHistoryMessage) {
        noHistoryMessage.remove();
    }

    // Data e hora formatadas
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR');
    const formattedTime = now.toLocaleTimeString('pt-BR');

    let icon = '';
    let actionText = '';

    // Define o ícone e o texto conforme a ação
    if (action === 'cadastrado') {
        icon = '/assets/img/plus-solid.png';
        actionText = 'CADASTRADO';
    } else if (action === 'editado') {
        icon = '/assets/img/pen-solid.png';
        actionText = 'EDITADO';
    } else if (action === 'deletado') {
        icon = '/assets/img/trash-solid.png';
        actionText = 'DELETADO';
    }

    // Cria o novo item do histórico
    const newItem = document.createElement('div');
    newItem.className = 'history-item';
    newItem.innerHTML = `<img src="${icon}" alt="${actionText}">
        <span>Veículo <strong>${placa}</strong> ${actionText} em ${formattedDate} às ${formattedTime}</span>`;

    // Insere o novo item no início da lista
    historyContainer.insertBefore(newItem, historyContainer.firstChild);

    // Atualiza o placeholder após adicionar o item
    updateHistoryPlaceholder();
}


function updateHistoryPlaceholder() {
    const historyContainer = document.querySelector('.historico-container');
    // Se não existir nenhum item de histórico (excluindo a mensagem)
    if (historyContainer.querySelectorAll('.history-item').length === 0) {
        // Se a mensagem ainda não estiver presente, cria e insere
        if (!historyContainer.querySelector('#no-history-message')) {
            const messageDiv = document.createElement('div');
            messageDiv.id = 'no-history-message';
            messageDiv.textContent = 'Não possui histórico';
            historyContainer.appendChild(messageDiv);
        }
    } else {
        // Se já existir algum item de histórico, remove a mensagem se estiver presente
        const noHistoryMessage = historyContainer.querySelector('#no-history-message');
        if (noHistoryMessage) {
            noHistoryMessage.remove();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateHistoryPlaceholder();
});

// Cria um controle customizado
const locationInfoControl = L.control({ position: 'topleft' });

// Define o conteúdo exibido ao adicionar o controle ao mapa
locationInfoControl.onAdd = function (map) {
    // Cria um elemento <div> para conter a informação
    this._div = L.DomUtil.create('div', 'location-info');
    this.update();
    return this._div;
};

// Função que atualiza o texto dentro do controle
locationInfoControl.update = function () {
    // Supondo que você tenha vehicleData.location.lat e vehicleData.location.lng
    const lat = vehicleData.location.lat;
    const lng = vehicleData.location.lng;
    this._div.innerHTML = `
        <strong>Local de repouso</strong><br>
        (${lat}, ${lng})
    `;
};

// Seleciona o ícone e o menu
const profileIcon = document.getElementById('profileIcon');
const userMenu = document.getElementById('userMenu');

// Ao clicar no ícone de perfil, alterna a classe .show para exibir/ocultar o popup
profileIcon.addEventListener('click', (event) => {
    userMenu.classList.toggle('show');
    // Impede que o clique se propague e feche o menu imediatamente
    event.stopPropagation();
});

// Fecha o menu se clicar fora dele ou do ícone
document.addEventListener('click', (event) => {
    // Se o clique não foi no menu nem no ícone, fecha o popup
    if (!event.target.closest('#userMenu') && !event.target.closest('#profileIcon')) {
        userMenu.classList.remove('show');
    }
});

// muda o nome da pessoa
document.addEventListener("DOMContentLoaded", function () {
    const usuarioAtivo = sessionStorage.getItem("usuarioAtivo");
    if (usuarioAtivo) {
        const usuario = JSON.parse(usuarioAtivo);
        // Exibe o nome do usuário no elemento com id "nomeDaPessoa"
        document.getElementById("nomeDaPessoa").textContent = usuario.username;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.icons-container .box img[alt="Lupa"]');
    const placaInput = document.getElementById('inputPlaca');
    const marcaSelect = document.getElementById('selectedOptions');
    const propositoSelect = document.getElementById('selectedOptionProposito');

    searchIcon.addEventListener('click', function () {
        const placaValue = placaInput.value.trim().toLowerCase();
        const marcaValue = marcaSelect.textContent.trim().toLowerCase();
        const propositoValue = propositoSelect.textContent.trim().toLowerCase();

        const tableRows = document.querySelectorAll('.table-container table tbody tr');

        tableRows.forEach(row => {
            const cells = row.getElementsByTagName('td');
            const placaCell = cells[0].textContent.trim().toLowerCase();
            const marcaModeloCell = cells[1].textContent.trim().toLowerCase();
            const propositoCell = cells[4].textContent.trim().toLowerCase();

            const placaMatch = placaCell.includes(placaValue) || placaValue === '';
            const marcaMatch = marcaModeloCell.includes(marcaValue) || marcaValue === 'selecione a marca do veículo';
            const propositoMatch = propositoCell.includes(propositoValue) || propositoValue === 'selecione um propósito';

            if (placaMatch && marcaMatch && propositoMatch) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

// Fechar o modal de cadastro ao clicar fora dele (no overlay)
const modalOverlayCadastro = document.getElementById('modal-overlay');
if (modalOverlayCadastro) {
    modalOverlayCadastro.addEventListener('click', function (event) {
        if (event.target === modalOverlayCadastro) {
            closeModal();
        }
    });
}

// Fechar o modal de edição ao clicar fora dele (no overlay)
const modalOverlayEditar = document.getElementById('modal-overlay-edit');
if (modalOverlayEditar) {
    modalOverlayEditar.addEventListener('click', function (event) {
        if (event.target === modalOverlayEditar) {
            closeModalEditar();
        }
    });
}