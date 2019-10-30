function huruf(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if ((charCode < 65 || charCode > 90)&&(charCode < 97 || charCode > 122)&&charCode>32)
        return false;
        return true;
}
 function angka(evt) {
     var char = (evt.which) ? evt.which : event.keyCode
     if (char > 31 && (char < 48 || char > 57))
         return false;
     return true;
 }

 function checkLength(el) {
     var message = document.getElementById('valid_nama');
     var badColor = "red";
     if (el.value.length < 3 || el.value.length >= 15) {   
        message.style.color = badColor;
        message.innerHTML = ' <i class = "fa fa-times" aria-hidden= "true"></i>&nbsp;<b>Jumlah karakter Input min 3 - max 14 !</b>'
        document.getElementById("simpan").disabled = true;
     }else{
           message.innerHTML = '';
           document.getElementById("simpan").disabled = false;
     }
     
 }