function buatIdentitas () {
    var nama = document.getElementById("input-nama").value;
    var alamat = document.getElementById("input-alamat").value;
    var imageUrl = document.getElementById("input-image-url").value;
    var user  = document.getElementById("input-username").value;
    document.getElementById('nama').innerHTML = nama; 
    document.getElementById('namadaftar').innerHTML = `Selamat, ${nama}! Anda berhasil buat card name.`; 
    document.getElementById("alamat").innerHTML = alamat; 
    document.getElementById("image").src=imageUrl;
    document.getElementById("username").innerHTML = user;
    document.getElementById("instagram").href = `https://www.instagram.com/in/${user}/`;
}