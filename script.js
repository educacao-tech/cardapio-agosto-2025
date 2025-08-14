document.addEventListener("DOMContentLoaded", function() {
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth() + 1;

    const semanas = [
        { id: "semana1", inicio: 4, fim: 8 },
        { id: "semana2", inicio: 11, fim: 15 },
        { id: "semana3", inicio: 18, fim: 22 },
        { id: "semana4", inicio: 25, fim: 29 }
    ];

    const container = document.querySelector('.columns-container');
    let semanaAtualElemento = null;
    let outrosElementos = [];

    if (mesAtual === 8) {
        semanas.forEach(semana => {
            const elemento = document.getElementById(semana.id);
            if (elemento) {
                if (diaAtual >= semana.inicio && diaAtual <= semana.fim) {
                    semanaAtualElemento = elemento;
                    
                    // Aplica o destaque na semana atual
                    semanaAtualElemento.classList.add('destaque');
                    
                    // Remove a mensagem 'em breve' dos botões
                    const botoesDaSemana = semanaAtualElemento.querySelectorAll('.soon');
                    botoesDaSemana.forEach(botao => {
                        const textoOriginal = botao.textContent;
                        botao.textContent = textoOriginal.replace(' - Em Breve!', '');
                        botao.classList.remove('soon');
                        botao.removeAttribute('title');
                    });
                } else {
                    outrosElementos.push(elemento);
                }
            }
        });
    }

    // Se uma semana atual foi encontrada, move ela para a primeira coluna
    if (semanaAtualElemento && container) {
        // Limpa o conteúdo do container
        container.innerHTML = '';
        
        // Adiciona a semana atual no início
        container.appendChild(semanaAtualElemento);
        
        // Adiciona as outras semanas em seguida
        outrosElementos.forEach(elemento => {
            container.appendChild(elemento);
        });
    }
});