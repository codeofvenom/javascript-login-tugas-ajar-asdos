      function popUp(){
        jendelaBaru=window.open('','NewWin','toolbar=no,status=no,width=500,height=200');
        jendelaBaru.document.write("<title>TGS PBP - NIM </title>");
        jendelaBaru.document.write("<script>alert('Saya Reinhart - 672015116 ');</script>");
        jendelaBaru.document.write("<body bgcolor='white'><h3>Data Form</h3>");
        jendelaBaru.document.write("<b>NIM Anda:</b> " +
            document["form1"].nim.value);
        jendelaBaru.document.write("<br/><b>NIM Anda:</b> " +
            document["form1"].nama.value);
        jendelaBaru.document.write("<br/><b>Password Anda:</b> " +
            document["form1"].password.value);
        jendelaBaru.document.write("<br/><b>Ulangi Password Anda: </b></body>"
           +document["form1"].password2.value);

        jendelaBaru.document.close();
      }

