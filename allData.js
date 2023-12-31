// allData.js
function allData() {
    let table = document.getElementById('table');
    table.innerHTML = '';

    let contactList = JSON.parse(localStorage.getItem('listItem')) || [];

    contactList.forEach(function (value, i) {
        table.innerHTML += `
            <tr>
                <td>${value.kodeBk}</td>
                <td>${value.judul}</td>
                <td>${value.penulis}</td>
                <td>${value.tahun}</td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.kodeBk})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData(${value.kodeBk})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`;
    });
}
