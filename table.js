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
    const btn = document.createElement("button");
    btn.style.borderColor = "#B4E197";
    btn.style.borderStyle = "solid";
    btn.style.borderWidth = "2px";
    btn.style.borderRadius = "5px";
    btn.innerHTML = "Delete";
    kol4.appendChild(btn);
    kol4.addEventListener("click", function () {
      const index = this.parentElement.rowIndex;
      var c = confirm("Lanjut hapus data?");
      if (c === true) {
        table.deleteRow(index);
        kol4.removeChild(btn);
      }
    });
}
