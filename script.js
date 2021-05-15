/*
Подготавливаем проект к дальнейшим урокам

1) Создать HTML страницу и подключить к ней файл скрипта

2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:

·      Первая будет спрашивать "Ваш бюджет на месяц?"

·      Вторая "Введите дату в формате YYYY-MM-DD"

3) Создать объект appData, который будет содержать такие данные:

·      бюджет (передаем сюда переменную из п.2)

·      данные времени - timeData (передаем сюда переменную из п.2)

·      объект с обязательными расходами - expenses (смотри пункт 4)

·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)

·      массив данных с доп. доходом - income (оставляем пока пустым)

·      свойство savings (выставляем его как false)

4) Задать пользователю по 2 раза вопросы:

    “Введите обязательную статью расходов в этом месяце”

    “Во сколько обойдется?”

    Записать ответы в объект expenses в формате: 

    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)

6) Проверить, чтобы все работало без ошибок в консоли

7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием

*/



let money = +prompt('Ваш бюджет на месяц?', 150000),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2021-05-15'),
    appData = {
        budget: money,
        income: '',
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        savings: 120000,
    }

    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = +prompt('Во сколько обойдется?')

            if( (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null)) {
                appData.expenses[a] = b
            }
    }

    console.log(money)
    switch (money) {
        case money < 100000:
            console.log('poorman')
            break
        case 150000:
            console.log('wealthy')
            break
        default:
            console.log('error')
            break
    }

    console.log(appData)


// let money = +prompt('Ваш бюджет на месяц?', 100000),
//     time = prompt('Введите дату в формате YYYY-MM-DD', '2020.05.15')

// let appData = {
//     budget: money,
//     income: '',
//     savings: '',
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     expensesPerDay:''
// }

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = +prompt('Во сколько обойдется?')

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a.length < 50) {
//         appData.expenses[a] = b
//     }
// }

// appData.expensesPerDay = appData.budget / 30

// console.log(appData)
// alert(appData.expensesPerDay)