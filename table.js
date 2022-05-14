var table = document.getElementById("tabelKartu");
function isiTabel() {
    var newRow = table.insertRow();
    var kol1 = newRow.insertCell();
    var kol2 = newRow.insertCell();
    var kol3 = newRow.insertCell();
    var kol4 = newRow.insertCell();
    kol1.innerHTML= document.getElementById("input-nama").value;
    kol2.innerHTML= document.getElementById("input-alamat").value;
    kol3.innerHTML= document.getElementById("input-username").value;
    kol4.innerHTML = `<button style="border: #B4E197 solid 2px; border-radius: 5px;" onClick="onDelete();">Delete</button>`;
}

function resetForm() {
    document.getElementById("input-nama").value = "";
    document.getElementById("input-alamat").value = "";
    document.getElementById("input-username").value = "";
}

function onDelete() {
    if (confirm('Lanjut Hapus Data?')) {
        for (var i=1; i<table.rows.length;i++){
            var row = i;
            document.getElementById("tabelKartu").deleteRow(row);
            resetForm();
        }
        
    }
}