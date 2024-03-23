document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Установим размер canvas равным размерам окна браузера
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Нарисуем круг по центру экрана
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 50; // Можете изменить радиус круга по вашему усмотрению

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "blue"; // Цвет круга
    ctx.fill();

    canvas.addEventListener("mousemove", function(event) {
        drawLine(event.clientX, event.clientY);
    });

    function drawLine(x, y) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Нарисуем круг заново при каждом движении мыши, чтобы он не перекрывал линию
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "blue"; // Цвет круга
        ctx.fill();

        // Нарисуем линию от центра круга до текущего положения курсора
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "red"; // Цвет линии
        ctx.lineWidth = 2; // Толщина линии
        ctx.stroke();
    }
});
