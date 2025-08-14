document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const currentMonth = today.getMonth(); // Janeiro = 0, Agosto = 7
    const currentYear = today.getFullYear();

    // A lógica só deve ser executada para o mês de agosto de 2025
    if (currentMonth === 7 && currentYear === 2025) {
        const currentDay = today.getDate();
        let currentWeekId = '';

        // Define o ID da semana atual com base no dia do mês
        if (currentDay >= 4 && currentDay <= 8) {
            currentWeekId = 'semana1';
        } else if (currentDay >= 11 && currentDay <= 15) {
            currentWeekId = 'semana2';
        } else if (currentDay >= 18 && currentDay <= 22) {
            currentWeekId = 'semana3';
        } else if (currentDay >= 25 && currentDay <= 29) {
            currentWeekId = 'semana4';
        }

        if (currentWeekId) {
            // Remove o destaque de todas as colunas
            document.querySelectorAll('.button-column').forEach(column => {
                column.classList.remove('highlight');
            });

            const currentWeekElement = document.getElementById(currentWeekId);

            if (currentWeekElement) {
                // Adiciona a classe de destaque à semana atual
                currentWeekElement.classList.add('highlight');

                // PROCURA TODOS OS BOTÕES NA SEMANA ATUAL E REMOVE A CLASSE '.soon'
                currentWeekElement.querySelectorAll('.button.soon').forEach(button => {
                    button.classList.remove('soon');

                    // Também restaura os títulos dos botões para o original
                    const originalTitle = button.getAttribute('title').replace(' - Em Breve!', '');
                    button.setAttribute('title', originalTitle);

                    // Remove " - Em Breve!" do texto visível do botão
                    button.textContent = button.textContent.replace(' - Em Breve!', '');
                });
            }
        }
    }
});
