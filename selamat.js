function selamat() {
            var x = document.getElementById("nama").value;
            var d = new Date();
            h = d.getHours();
            if (h < 11) {
                if (x == null || x == '' ) {
                document.getElementById('selamat').innerHTML = 'Selamat pagi,Mahasiswa/Mahasiswi';
                }else{
                  document.getElementById('selamat').innerHTML = 'Selamat pagi, '+ x ;
                }
            }
            else {
                if (h < 15) {
                     if (x == null || x == '') {
                    document.getElementById('selamat').innerHTML = 'Selamat siang,Mahasiswa/Mahasiswi';
                       } else {
                           document.getElementById('selamat').innerHTML = 'Selamat siang, ' + x ;
                       }
                } else {
                    if (h < 19) {
                         if (x == null || x == '') {
                        document.getElementById('selamat').innerHTML = 'Selamat sore,Mahasiswa/Mahasiswi';
                          } else {
                              document.getElementById('selamat').innerHTML = 'Selamat sore, ' + x ;
                          }
                    } else {
                        if (h <= 23) {
                             if (x == null || x == '') {
                            document.getElementById('selamat').innerHTML = 'Selamat malam,Mahasiswa/Mahasiswi';
                               } else {
                                   document.getElementById('selamat').innerHTML = 'Selamat malam ,' + x ;
                               }
                        }
                    }
                }
            }
        }
  function checkTime(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }
  setInterval(selamat, 500);
        