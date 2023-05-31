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