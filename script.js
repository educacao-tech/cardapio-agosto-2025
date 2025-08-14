document.addEventListener("DOMContentLoaded", function() {
    // Pega a data atual do sistema do usuário
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth() + 1; // getMonth() retorna de 0 a 11

    // Define os intervalos de dias para cada semana de agosto de 2025
    const semanas = [
        { id: "semana1", inicio: 4, fim: 8 },
        { id: "semana2", inicio: 11, fim: 15 },
        { id: "semana3", inicio: 18, fim: 22 },
        { id: "semana4", inicio: 25, fim: 29 }
    ];

    // Verifica se o mês atual é agosto (mês 8)
    if (mesAtual === 8) {
        // Percorre as semanas para encontrar a semana atual
        semanas.forEach(semana => {
            if (diaAtual >= semana.inicio && diaAtual <= semana.fim) {
                const semanaAtualElemento = document.getElementById(semana.id);
                // Remove a classe 'soon' de todos os botões da semana atual
                const botoesDaSemana = semanaAtualElemento.querySelectorAll('.soon');
                botoesDaSemana.forEach(botao => {
                    const textoOriginal = botao.textContent;
                    // Remove a parte "- Em Breve!" do texto do botão
                    botao.textContent = textoOriginal.replace(' - Em Breve!', '');
                    // Remove a classe 'soon' para que o estilo padrão seja aplicado
                    botao.classList.remove('soon');
                    // Remove o atributo title que contém a mensagem "em breve"
                    botao.removeAttribute('title');
                });
            }
        });
    }
});