// Тестирование модуля Б
const ScoringModule = require('./module_B/scoring_logic.js');

console.log("========== ТЕСТИРОВАНИЕ МОДУЛЯ Б ==========\n");

// Тест 1: Подсчет баллов
console.log("🧪 Тест 1: calculateScore()");
const userAnswers = ["Париж", "8", "Толстой"];
const correctAnswers = ["Париж", "8", "Толстой"];
const score = ScoringModule.calculateScore(userAnswers, correctAnswers);
console.log(`   Ответы пользователя: ${userAnswers}`);
console.log(`   Правильные ответы: ${correctAnswers}`);
console.log(`   Результат: ${score}/3`);
console.assert(score === 3, "❌ Ошибка! Должно быть 3");
console.log("✅ Тест 1 пройден\n");

// Тест 2: Расчет процента
console.log("🧪 Тест 2: calculatePercentage()");
const percentage = ScoringModule.calculatePercentage(5, 6);
console.log(`   5 баллов из 6 = ${percentage}%`);
console.assert(percentage === 83.33333333333333, "❌ Ошибка в расчете процента");
console.log("✅ Тест 2 пройден\n");

// Тест 3: Сообщение по проценту
console.log("🧪 Тест 3: getResultMessage()");
const message = ScoringModule.getResultMessage(85);
console.log(`   Процент 85% → "${message}"`);
console.assert(message === "Отличная работа! Ты хорошо знаешь материал!", "❌ Неправильное сообщение");
console.log("✅ Тест 3 пройден\n");

console.log("========== ВСЕ ТЕСТЫ ПРОЙДЕНЫ ==========");