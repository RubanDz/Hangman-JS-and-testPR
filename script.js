// Start game Hangman

// Приветствие и объяснение правил
alert('Привет! Правила игры: количество *, соответствует количеству букв в слове. Твоя цель: полностью отгадать слово. Удачи!)');
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
    answerArray[i] = ' * ';
}
var remainingLetters = word.length; // отслеживаем количество букв, которые осталось угадать

// Программируем игровой цикл
while (remainingLetters > 0) {
    // текущее состояние игры
    alert(answerArray.join(' '));
    //Обработка введенного ответа от игорока
    var guess = prompt('Угадай букву или нажми "Отмена" для выхода из игры');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста введите только одну букву!');
    } else {
        //Обновление состояние игры
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
// Конец игры
alert(answerArray.join(' '));
alert('Отлично! Было загадано слово ' + word);



    



