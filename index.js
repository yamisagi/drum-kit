// querySelector() ile bize ilk bulduğu elementi döndürür.
// Ve addEventListener() ile click eventini dinleriz.
// Fakat burda dikkat edilmesi gereken bir nokta var.
// querySelector() ile bize dönen elementin içindeki butonu dinlemek istiyoruz.
// Ve click eventini dilerken çalıştırılacak olan fonksiyonu da handleClick() olarak belirledik.
// Ama eğer handleClick() fonksiyonunu handleClick() şeklinde yazarsak bu durumda
// Fonksiyonu direkt olarak çağırmış oluruz. Ve sayfa daha yüklenmeden fonksiyonu çalıştırmış oluruz.
// Ama fonsiyonu handleClick şeklinde yazarsak bu durumda ise
// Click eventi gerçekleştiğinde handleClick() fonksiyonunu çağırmış oluruz.

// document.querySelector('button').addEventListener('click', handleClick);


function handleClick() {
    alert('I got clicked!');

}



var array = document.querySelectorAll('.drum');

for (var i = 0; i < array.length; i++) {
    array[i].addEventListener('click', handleClick);
}
