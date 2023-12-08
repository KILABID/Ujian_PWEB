// save.js
function save() {
    let contactList = JSON.parse(localStorage.getItem('listItem')) || [];
    let kodeBk = document.getElementById('kodeBk').value;

    if (kodeBk) {
        // Edit existing data
        contactList.forEach(value => {
            if (kodeBk == value.kodeBk) {
                value.judul = document.getElementById('judul').value;
                value.penulis = document.getElementById('penulis').value;
                value.tahun = document.getElementById('tahun').value;
            }
        });

        // Clear hidden input
        document.getElementById('kodeBk').value = '';
    } else {
        // Save new data
        let item = {
            kodeBk: contactList.length > 0 ? Math.max(...contactList.map(item => item.kodeBk)) + 1 : 1,
            judul: document.getElementById('judul').value,
            penulis: document.getElementById('penulis').value,
            tahun: document.getElementById('tahun').value
        };

        contactList.push(item);
    }

    localStorage.setItem('listItem', JSON.stringify(contactList));
    allData();
    clearData();
}
