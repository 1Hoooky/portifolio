// Função para atualizar a barra de progresso
function updateProgress(barId, textId, value) {
    const progressBar = document.getElementById(barId);
    const progressText = document.getElementById(textId);
    progressBar.style.width = value + '%';
    progressText.textContent = value;
}

// Atualiza as barras de progresso
updateProgress('progress1', 'progress-text-1', 100);
updateProgress('progress2', 'progress-text-2', 100);
updateProgress('progress3', 'progress-text-3', 100);
updateProgress('progress4', 'progress-text-4', 70);
updateProgress('progress5', 'progress-text-5', 25);
updateProgress('progress6', 'progress-text-6', 50);
updateProgress('progress6', 'progress-text-7', 50);

function scrollToSection(sobre) {
    const section = document.getElementById(tecnologia);
    section.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection(tecnologia) {
    const section = document.getElementById(tecnologia);
    section.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection(projetos) {
    const section = document.getElementById(projetos);
    section.scrollIntoView({ behavior: 'smooth' });
}