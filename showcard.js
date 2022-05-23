var table = document.getElementById("tabelKartu");
function isiTabel() {
    var newRow = table.insertRow();
    var kol1 = newRow.insertCell();
    var kol2 = newRow.insertCell();
    var kol3 = newRow.insertCell();
    var kol4 = newRow.insertCell();
    var kol5 = newRow.insertCell();
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

    // const kol5 = document.createElement('div');
    // kol5.setAttribute('class', 'col-sm');
    // const show = document.createElement('button');
    // show.style.borderColor = "#B4E197";
    // show.style.borderStyle = "solid";
    // show.style.borderWidth = "2px";
    // show.style.borderRadius = "5px";
    // show.innerHTML = "show";
    // kol5.appendChild(show);
    // kol5.addEventListener('click', function(e){
    //     var nama = document.getElementById("input-nama").value;
    //     var alamat = document.getElementById("input-alamat").value;
    //     var imageUrl = document.getElementById("input-image-url").value;
    //     var user  = document.getElementById("input-username").value;
    //     document.getElementById('nama').innerHTML = nama;
    //     document.getElementById("alamat").innerHTML = alamat; 
    //     document.getElementById("image").src=imageUrl;
    //     document.getElementById("username").innerHTML = user;
    //     document.getElementById("instagram").href = `https://www.instagram.com/in/${user}/`;
    //     var modal = document.getElementById("myModal");
    //     modal.style.display = "block";
    //     var span = document.getElementsByClassName("close")[0];
    //     span.onclick = function() {
    //         modal.style.display = "none";
    //     }
    //     window.onclick = function(event) {
    //         if (event.target == modal) {
    //           modal.style.display = "none";
    //         }
    //     }
    //     e.stopPropagation();
    // });
}

