// find.js
function find(kodeBk) {
    let contactList = JSON.parse(localStorage.getItem('listItem')) || [];

    contactList.forEach(function (value) {
        if (value.kodeBk == kodeBk) {
            document.getElementById('kodeBk').value = value.kodeBk;
            document.getElementById('judul').value = value.judul;
            document.getElementById('penulis').value = value.penulis;
            document.getElementById('tahun').value = value.tahun;
        }
    });
}
