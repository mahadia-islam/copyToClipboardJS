const reedemCode = document.querySelector('.reedem-code');
const btn = document.querySelector('.btn');

btn.onclick = function () {
    reedemCode.select();
    document.execCommand('copy');
}
