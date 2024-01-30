// Start game Hangman

// Приветствие и объяснение правил
alert('Привет! Правила игры: количество подчеркиваний, соответствует количеству букв в слове. Твоя цель: полностью отгадать слово. Удачи!)');
alert('Все буквы нужно вводить строчными!');
// Выбор случайного слова
var words = [
    'программа',
    'макака', 
    'прекрасный',
    'оладушек'
];
var word = words[Math.floor(Math.random() * words.length)];
// Итоговый массив (отображает результат отгадывания)
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = ' _ ';
    
}
var remainingLetters = word.length;

console(remainingLetters);

