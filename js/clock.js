// Seleciona os elementos HTML onde vão aparecer os dados
const ano = document.querySelector('.year')
const mes = document.querySelector('.month')
const dia = document.querySelector('.day')
const semana = document.querySelector('.wday')
const hora = document.querySelector('.hh')
const minuto = document.querySelector('.mm')
const segundo = document.querySelector('.ss')
const feriado = document.querySelector('.holiday')

// Monta o Relógio
const relogio = setInterval(function time() {
    let dataHoje = new Date();
    let year = dataHoje.getFullYear();
    let month = dataHoje.getMonth();
    if (month == 0) { month = "JAN" }
    if (month == 1) { month = "FEV" }
    if (month == 2) { month = "MAR" }
    if (month == 3) { month = "ABR" }
    if (month == 4) { month = "MAI" }
    if (month == 5) { month = "JUN" }
    if (month == 6) { month = "JUL" }
    if (month == 7) { month = "AGO" }
    if (month == 8) { month = "SET" }
    if (month == 9) { month = "OUT" }
    if (month == 10) { month = "NOV" }
    if (month == 11) { month = "DEZ" }

    let day = dataHoje.getDate();
    if (month == "ABR" && day == 19) {
        holiday = "Hoje é dia do Índio";
    }
    let wday = dataHoje.getDay();
    if (wday == 0) { wday = "domingo" }
    if (wday == 1) { wday = "segunda-feira" }
    if (wday == 2) { wday = "terça-feira" }
    if (wday == 3) { wday = "quarta-feira" }
    if (wday == 4) { wday = "quinta-feira" }
    if (wday == 5) { wday = "sexta-feira" }
    if (wday == 6) { wday = "sábado" }

    let hh = dataHoje.getHours();
    let mm = dataHoje.getMinutes();
    let ss = dataHoje.getSeconds();

    ano.textContent = year;
    mes.textContent = month;
    dia.textContent = day;
    semana.textContent = wday;
    hora.textContent = hh;
    minuto.textContent = mm;
    segundo.textContent = ss;
    feriado.textContent = holiday;
})