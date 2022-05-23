var table = document.getElementById("tabelKartu");
function isiTabel() {
    let idRow = new Date().valueOf();
    const newRow = document.createElement('div');
      newRow.setAttribute('class', 'row');
      newRow.setAttribute('data-timecreate', idRow);
      newRow.style.paddingBottom = "10px";
      table.appendChild(newRow);
    const kol0 = document.createElement('div');
      kol0.setAttribute('class', 'col-sm');
      kol0.style.textAlign="center";
      const kol0RowImg = document.createElement('IMG');
        const urlImage = document.getElementById('input-image-url').value;
        kol0RowImg.setAttribute("src", urlImage);
        kol0RowImg.setAttribute("width", "50");
        kol0RowImg.setAttribute("height", "50");
        kol0RowImg.setAttribute("alt", "Foto Profil");
        kol0RowImg.setAttribute("style", "border-radius: 50%; border: #007BFF solid 4px; justify-content:center");
      kol0.appendChild(kol0RowImg);
      newRow.appendChild(kol0);
    const kol1 = document.createElement('div');
      kol1.setAttribute('class', 'col-sm');
      kol1.style.textAlign="left";
      kol1.innerHTML= document.getElementById("input-nama").value;
      newRow.appendChild(kol1);
    const kol2 = document.createElement('div');
      kol2.setAttribute('class', 'col-sm');
      kol2.style.textAlign="left";
      kol2.innerHTML= document.getElementById("input-alamat").value;
      newRow.appendChild(kol2);
    const kol3 = document.createElement('div');
      kol3.setAttribute('class', 'col-sm');
      kol3.style.textAlign="left";
      const linkIg = document.getElementById("input-username").value;
        const ling = document.createElement('a');
          const userIg = document.createElement('p');
            userIg.innerHTML = `@${document.getElementById("input-username").value}`;
            ling.appendChild(userIg);
          ling.setAttribute('href', `https://www.instagram.com/in/${linkIg}/`);
          ling.style.textDecoration= "none";
        kol3.appendChild(ling);  
      newRow.appendChild(kol3);
    const kol4 = document.createElement('div');
      kol4.setAttribute('class', 'col-sm');
      kol4.style.textAlign="center";
      const btn = document.createElement("button");
        btn.style.backgroundColor = "#007BFF";
        btn.style.color = "white";
        btn.style.borderColor = "#007BFF";
        btn.style.borderStyle = "solid";
        btn.style.borderWidth = "2px";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "cursor";
        btn.innerHTML = "Delete";
      kol4.appendChild(btn);
      let selectedRow = document.querySelectorAll('[data-timecreate]');
      for (let i = 0; i < selectedRow.length; i++) {
          selectedRow[i].addEventListener("click", function () {
            selectedRow[i].remove();
          });
        }
      newRow.appendChild(kol4);
    
    const kol5 = document.createElement('div');
      kol5.setAttribute('class', 'col-sm');
      kol5.style.textAlign="center";
      const show = document.createElement('button');
      show.style.backgroundColor = "#007BFF";
      show.style.color = "white";
      show.style.borderColor = "#007BFF";
      show.style.borderStyle = "solid";
      show.style.borderWidth = "2px";
      show.style.borderRadius = "5px";
      btn.style.cursor = "cursor";
      show.innerHTML = "Show";
      kol5.appendChild(show);
      kol5.addEventListener('click', function(e){
        for (let i = 0; i < selectedRow.length; i++) {
          let nama = selectedRow[i].childNodes[1].innerHTML;
          let alamat = selectedRow[i].childNodes[2].innerHTML;
          let imageUrl = selectedRow[i].childNodes[0].childNodes[0].attributes[0].value;
          let user  = selectedRow[i].childNodes[3].innerHTML;
          document.getElementById('nama').innerHTML = nama;
          document.getElementById("alamat").innerHTML = alamat; 
          document.getElementById("image").src=imageUrl;
          document.getElementById("username").innerHTML = user;
          document.getElementById("instagram").href = `https://www.instagram.com/in/${user}/`;
        }
          
          var modal = document.getElementById("myModal");
          modal.style.display = "block";
          var span = document.getElementsByClassName("close")[0];
          span.onclick = function() {
              modal.style.display = "none";
          }
          window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
          }
          e.stopPropagation();
      });
      newRow.appendChild(kol5);

    // resetForm();
}

function resetForm(){
  document.getElementById('input-image-url').value ="";
  document.getElementById("input-nama").value="";
  document.getElementById("input-alamat").value="";
  document.getElementById("input-username").value="";
  document.getElementById("gender").value="";
  document.getElementById("cb").checked=false;
}