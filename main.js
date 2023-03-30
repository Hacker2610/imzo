var string = "Golden glass - является одним из популярным и надёжным для клиентов. Мы всегда готовы и рады помочь вам!.Вы можете дать заказ быстро и легко и эффективно в разделе Дать Заказ";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 60);
})();