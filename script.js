document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const currentDay = today.getDate();

    let currentWeekId = '';
    // A lógica para determinar a semana atual com base no dia do mês
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
        // Remove a classe highlight de todas as colunas
        document.querySelectorAll('.button-column').forEach(column => {
            column.classList.remove('highlight');
        });
        
        // Adiciona a classe highlight apenas à coluna da semana atual
        const currentWeekElement = document.getElementById(currentWeekId);
        if (currentWeekElement) {
            currentWeekElement.classList.add('highlight');
        }
    }
});