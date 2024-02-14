/* Это объявление переменной, мы наши кнопку по тегу */
const buttonHi = document.getElementById('buttonHi');
const buttonNo = document.getElementById('buttonNo');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
buttonHi.addEventListener('click', function() {
	alert('И тебе не болеть')
})

buttonNo.addEventListener('click', function() {
	
event.preventDefault();

window.location.href = 'https://shattereddisk.github.io/rickroll/rickroll.mp4';

      setTimeout(function() {
        alert("Я же предупреждал");
      }, 1);
    });