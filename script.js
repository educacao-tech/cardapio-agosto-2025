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
                    // Adiciona a classe 'passado' para semanas que já terminaram
                    elemento.classList.add('passado');
                }

                // Lógica para modificar os botões
                const botoes = elemento.querySelectorAll('.button');
                botoes.forEach(botao => {
                    if (diaAtual >= semana.inicio && diaAtual <= semana.fim) {
                        // Semana atual: remove a mensagem "em breve"
                        if (botao.textContent.includes(' - Em Breve!')) {
                            botao.textContent = botao.textContent.replace(' - Em Breve!', '');
                        }
                        botao.classList.remove('soon');
                        botao.removeAttribute('title');
                    } else if (diaAtual < semana.inicio) {
                        // Semanas futuras: mantém a mensagem "em breve" e desabilita o link
                        botao.removeAttribute('href');
                        botao.setAttribute('aria-disabled', 'true');
                    } else {
                        // Semanas passadas: remove o estilo de "em breve" mas mantém o link
                        botao.classList.remove('soon');
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