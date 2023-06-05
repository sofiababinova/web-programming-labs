function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');

    let out1 = document.getElementById('current-date1');
    let today1 = new Date();
    out1.innerHTML = 'Дата и время для локали ОАЭ: ' + today1.toLocaleString('ar-AE');

    let out2 = document.getElementById('current-date2');
    let today2 = new Date();
    out2.innerHTML = 'Дата и время для локали Испании: ' + today2.toLocaleString('es-ES');

    let out3 = document.getElementById('current-date3');
    let today3 = new Date();
    out3.innerHTML = 'Дата и время для локали Индонезии: ' +  today3.toLocaleString('id-ID');

    let out4 = document.getElementById('current-date4');
    let today4 = new Date();
    out4.innerHTML = 'Дата и время для локали Филиппин: ' +   today4.toLocaleString('tl-PH');
}

function showDateCount() {
    var Days;
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = 'Количество дней с даты рождения: ' + Math.floor((today - birthday)/1000/60/60/24);
    document.getElementById('KBD').innerHTML = daysCount;
}

function Del() {
    var Days;
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    document.getElementById('KBD').innerHTML = '';
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000)