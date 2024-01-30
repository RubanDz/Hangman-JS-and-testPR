// Start game Hangman

// Приветствие и объяснение правил
alert('Привет! Правила игры: количество *, соответствует количеству букв в слове. Твоя цель: полностью отгадать слово. Удачи!)');
// alert('Все буквы нужно вводить строчными!');

// Выбор случайного слова
var words = [
    'программа',
    'макака', 
    'прекрасный',
    'оладушек',
    'автомобиль',
    'собака',
    'лошадь', 
    'дом'
];
var word = words[Math.floor(Math.random() * words.length)];

// Итоговый массив (отображает результат отгадывания)
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = ' * ';
}
var remainingLetters = word.length; // отслеживаем количество букв, которые осталось угадать
var maxAttempts = 6; // Максимаоьное количество попыток
var attempts = 0; // Текущее количество попыток
// Программируем игровой цикл
while (remainingLetters > 0 && attempts < maxAttempts) {
    // текущее состояние игры
    alert(answerArray.join(' '));
    //Обработка введенного ответа от игорока
    var guess = prompt('Угадай букву или нажми "Отмена" для выхода из игры');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста введите только одну букву!');
    } else {
        guess = guess.toLocaleLowerCase(); // преобразование введенной буквы в нижний регистр
        //Обновление состояние игры
        var correctGuess = false;
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
                correctGuess = true;
            }
        }
        // Если угадана неверная буква, увеличиваем количество попыток
        if (!correctGuess) {
            attempts++;
            alert('Неверная буква! Осталось попыток: ' + (maxAttempts - attempts))
        }
    }
}
// Конец игры
if (remainingLetters === 0) {

    alert(answerArray.join(' '));
    alert('Отлично! Было загадано слово ' + word);
} else {
    alert('Вы проиграли. Было загадано слово: ' + word);
}



    



