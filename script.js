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

    if (mesAtual === 8) {
        let semanaAtualElemento = null;
        const container = document.querySelector('.columns-container');
        
        semanas.forEach(semana => {
            const elemento = document.getElementById(semana.id);
            if (elemento) {
                if (diaAtual >= semana.inicio && diaAtual <= semana.fim) {
                    semanaAtualElemento = elemento;
                } else if (diaAtual > semana.fim) {
                    elemento.classList.add('passado');
                }

                // Remove a mensagem "Em Breve!" e a classe 'soon' dos botões da semana atual
                const botoes = elemento.querySelectorAll('.button');
                botoes.forEach(botao => {
                    if (diaAtual >= semana.inicio && diaAtual <= semana.fim) {
                        if (botao.textContent.includes(' - Em Breve!')) {
                            botao.textContent = botao.textContent.replace(' - Em Breve!', '');
                        }
                        botao.classList.remove('soon');
                        botao.removeAttribute('title');
                    } else if (diaAtual < semana.inicio) {
                        // Para semanas futuras, mantém a mensagem "Em Breve!" e desabilita o link
                        botao.removeAttribute('href');
                        botao.setAttribute('aria-disabled', 'true');
                    } else {
                        // Para semanas passadas, o link deve permanecer ativo
                        botao.classList.remove('soon'); // Garante que o estilo de "em breve" é removido
                    }
                });
            }
        });
        
        if (semanaAtualElemento && container) {
            container.classList.add('reordered');
            semanaAtualElemento.classList.add('destaque');
            
            const elementoAnterior = container.firstElementChild;
            if (elementoAnterior !== semanaAtualElemento) {
                container.insertBefore(semanaAtualElemento, container.firstChild);
            }
        }
    }
});