// querySelector() ile bize ilk bulduğu elementi döndürür.
// Ve addEventListener() ile click eventini dinleriz.
// Fakat burda dikkat edilmesi gereken bir nokta var.
// querySelector() ile bize dönen elementin içindeki butonu dinlemek istiyoruz.
// Ve click eventini dilerken çalıştırılacak olan fonksiyonu da handleClick() olarak belirledik.
// Ama eğer handleClick() fonksiyonunu handleClick() şeklinde yazarsak bu durumda
// Fonksiyonu direkt olarak çağırmış oluruz. Ve sayfa daha yüklenmeden fonksiyonu çalıştırmış oluruz.
// Ama fonsiyonu handleClick şeklinde yazarsak bu durumda ise
// Click eventi gerçekleştiğinde handleClick() fonksiyonunu çağırmış oluruz.

// ! Kısa bir not : addEventListener() fonksiyonu high order function'dır.
// ! Yani bir fonksiyonu başka bir fonksiyonun içinde çağırmak demektir.

// document.querySelector('button').addEventListener('click', handleClick);



var array = document.querySelectorAll('.drum');

for (var i = 0; i < array.length; i++) {
    // İsimlendirilmiş fonksiyonu çağırmak yerine anonim fonksiyon kullanabiliriz.
    array[i].addEventListener('click', function () {

        //? BU KISIMDA ANONIM FONKSİYON KULLANILDIĞINDA BU FONKSİYONUN İÇİNDEKİ this
        //? O AN KULLANILAN ELEMENTİN İFADE ETTİĞİNİ GÖSTERİR. 

        handleClick(this.innerHTML);

        // Daha kısa bir yol ise
        // Dosya isimleri ile buton isimlerini aynı olarak değiştirip aşağıdaki gibi kullanmak.
        // Ama şu an buna çok erindiğim için bu şekilde kullanmayacağım :)))
        // var audio = new Audio('sounds/' + this.innerHTML + '.mp3');
        // audio.play();

    });
}

// Bu kısımda ise klavyeden tuşa basıldığında o tuşa ait sesin çalması için
// keydown eventini dinleyeceğiz.
document.addEventListener('keydown', function (event) {
    // 'event' parametresi bize bir obje döndürür.
    // Bu objenin içinde key isimli bir property var.
    // Bu property bize klavyeden basılan tuşun ismini verir.

    handleClick(event.key);
});

// Aynı şeyleri tekrar tek tek yazmak yerine fonksiyonlar oluşturup
// Bu fonksiyonları çağırmak daha mantıklı olacaktır. 

function handleClick(eventName) {
    switch (eventName) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:
            break;
    }

}


//***********************************************/


/// ! JS'te bir obje oluşturmak için 3 farklı yöntem vardır.

// 1. Object Literal
// 2. Constructor Function
// 3. Class

// 1. Object Literal

// var obj = {
//     name: 'Mehmet',
//     age: 22,
//     sayHello: function () {
//         console.log('Hello');
//     }
// }

// obj.sayHello();

// 2. Constructor Function (Diğer dillerde class isimleri gibi büyük harfle başlar.)

// function Person(name, age, sayHello) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function () {
//         console.log('Hello');
//     }
// }


// var obj = new Person('Mehmet', 22);
// obj.sayHello();

// 3. Class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log('Hello');
//     }
// }

// var obj = new Person('Mehmet', 22);
// obj.sayHello();

// ! Class'lar ES6 ile gelen bir özelliktir. Ve class component'ler çok kullanılmamaktadır.
// ! Onun yerine function component'ler kullanılır.