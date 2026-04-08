/**
 * МОДУЛЬ Б: Логика подсчета баллов
 * Этот модуль отвечает за расчет результатов викторины
 */

const ScoringModule = {
    // Функция подсчета баллов
    calculateScore: (userAnswers, correctAnswers) => {
        let score = 0;
        for(let i = 0; i < userAnswers.length; i++) {
            if(userAnswers[i] === correctAnswers[i]) {
                score++;
            }
        }
        return score;
    },
    
    // Функция расчета процента
    calculatePercentage: (score, total) => {
        return (score / total) * 100;
    },
    
    // Функция получения сообщения по проценту
    getResultMessage: (percentage) => {
        if(percentage === 100) return "Идеально! Ты гений!";
        if(percentage >= 80) return "Отличная работа! Ты хорошо знаешь материал!";
        if(percentage >= 60) return "Хорошая попытка! Продолжай учиться!";
        if(percentage >= 40) return "Неплохо! Попробуй еще раз!";
        return "Продолжай заниматься! У тебя обязательно получится!";
    },
    
    // Функция подсчета правильных ответов из массива
    countCorrectAnswers: (answersArray) => {
        return answersArray.filter(answer => answer.correct === true).length;
    }
};

// Экспорт (для Node.js)
if(typeof module !== 'undefined' && module.exports) {
    module.exports = ScoringModule;
}

// Для браузера
if(typeof window !== 'undefined') {
    window.ScoringModule = ScoringModule;
}

console.log("✅ Модуль Б загружен! Доступные функции:", Object.keys(ScoringModule));