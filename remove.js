// remove.js
function removeData(kodeBk) {
    let contactList = JSON.parse(localStorage.getItem('listItem')) || [];

    contactList = contactList.filter(function (value) {
        return value.kodeBk != kodeBk;
    });

    localStorage.setItem('listItem', JSON.stringify(contactList));
    allData();
}
