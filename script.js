let msg = {
    date: getRandomYmd('1990/01/01', '2023/12/31')
};
let app = new Vue ({
    el: '#app',
    data: msg
})

function getRandomYmd(fromYmd, toYmd) {
    let d1 = new Date(fromYmd);
    let d2 = new Date(toYmd);

    let c = (d2 - d1) / 86400000;
    let x = Math.floor(Math.random() * (c + 1));

    d1.setDate(d1.getDate() + x);

    let y = d1.getFullYear();
    let m = ("00" + (d1.getMonth() + 1)).slice(-2);
    let d = ("00" + d1.getDate()).slice(-2);

    return y + "/" + m + "/" + d;
}
function changeMsg() {
    let date = new Date;
    date = date.toLocaleDateString();

    msg.date = date;
}

let headerDetail = {
    title: '???'
};
let header = new Vue({
    el: '#header',
    data: headerDetail
})

function inputMsg(event) {
    headerDetail.title = event.target.value;
}
