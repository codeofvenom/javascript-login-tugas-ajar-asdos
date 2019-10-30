function checkPass() {    

    var pass1 = document.getElementById('xpassword');
    var pass2 = document.getElementById('xpassword2');
    var nim = document.getElementById('nim');
    var message = document.getElementById('errornya');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
   if (nim.value == pass1.value){
         pass1.style.backgroundColor = goodColor;
        if (pass1.value == pass2.value) {
            pass2.style.backgroundColor = goodColor;
            message.style.color = goodColor;
            message.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>&nbsp;<b>Passwords Sesuai!</b>'
            document.getElementById("simpan").disabled = false;
        } else {
            pass2.style.backgroundColor = badColor;
            message.style.color = badColor;
            message.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>&nbsp;<b>Passwords Tidak sesuai!</b>'
            document.getElementById("simpan").disabled = true;
            document.getElementById("xpassword2").focus();
        }
    } else {
         pass1.style.backgroundColor = badColor;
         message.style.color = badColor;
         message.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>&nbsp;<b>NIM dengan Password harus sama!</b>'
         document.getElementById("simpan").disabled = true;
         document.getElementById("xpassword").focus();

     }

}