// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini


// let myNUmber = 5;
// let boluv = myNUmber % 2;
// alert(boluv)




// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

// let myNumber = Math.ceil(Math.random() * 10 )
// alert(myNumber);



// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// let myNumber = 12.510;   
// let resultat = Math.floor(myNumber)
// console.log(resultat);





// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

// function countLetters(harif) {
//     let mars = harif.replace(/\s/g, '').length;
//     alert("Hariflarning soni: " + mars)
// }

// countLetters("MARS IT SCHOOL")

// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering


// let myText = "MARS IT SCHOOL"
// let res = ''
// for (let index = 0; index < 10; index++) {
//    res += myText

//    console.log(res);
// }



// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let hariflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z"]

// console.log(hariflar[19]+hariflar[11]+hariflar[0]+hariflar[16]);


// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// let userAge = +prompt("Yoshingizni kiriting")

// if (userAge === 18) {
//     console.log("Balogat yoshingiz bilan tabriklayman");
// } else if (userAge < 18) {
//     console.log("Siz balog'at yoshiga yetmagansiz");
// } else if (userAge > 18) {
//     console.log("Siz balog'at yoshiga yetgansiz");

// } else {
//     console.log("Iltimos yoshingizni kiriting");
// }



// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering


// let myName = prompt("Ismingizni kiriting")
// let res = myName.split('')
// console.log(myName);
// let ser = res.reverse()
// let emaNym = ser.join('')
// console.log(emaNym)

// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering


// let body = document.querySelector('body')
// let card = document.createElement('div')
// let userName = prompt("Ismingizni kiriting")
// let name = document.createElement('h1')
// name.innerHTML = userName
// let userAge = prompt("Yoshingizni kiriting")
// let age = document.createElement('h1')
// age.innerHTML = userAge

// body.append(card)
// card.append(name, age)

// card.style.border = '3px solid blue';
// card.style.padding = '20px';
// card.style.margin = '100px auto';
// card.style.width = '300px';
// card.style.textAlign = 'center';
// card.style.color = 'blue'; 
// card.style.borderRadius = '10px';


// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering


// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sonlar.forEach(son => {
//     if (son % 2 === 0) {
//         console.log(son);
//     }
// });