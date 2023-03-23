function lulusSemester(callback) {
    setTimeout(() => {
      const ipk = 3.6;
      if (ipk >= 3) {
        callback(null, 'Lulus semester 4 dengan nilai memuaskan');
      } else {
        callback('Gagal lulus semester 4', null);
      }
    }, 2000);
  }
  
  function dapatBeasiswa(callback) {
    setTimeout(() => {
      const besaran = 7000000;
      if (besaran >= 5000000) {
        callback(null, 'Menerima beasiswa');
      } else {
        callback('Gagal mendapatkan beasiswa', null);
      }
    }, 3000);
  }
  
  function ikutOrganisasi(callback) {
    setTimeout(() => {
      const jumlah = 2;
      if (jumlah === 2) {
        callback(null, 'Mengikuti beberapa organisasi');
      } else {
        callback('Gagal mengikuti beberapa organisasi', null);
      }
    }, 4000);
  }

  function jadiAdminMCI(callback) {
    setTimeout(() => {
      const nilai = 90;
      if(nilai >= 80){
        callback(null, 'Menjadi admin MCI');
      } else {
        callback('Gagal menjadi admin MCI', null);
      }
    }, 5000);
  }

  function dapatUang(callback){
    setTimeout(() => {
      const uang = 10000000;
      if(uang >= 8000000){
        callback(null, 'Mendapatkan uang');
      } else {
        callback('Gagal mendapatkan uang', null);
      }
    }, 6000);
  }
  
  lulusSemester((error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      dapatBeasiswa((error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
          ikutOrganisasi((error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log(result);
              jadiAdminMCI((error, result) => {
                if(error){
                  console.log(error);
                } else {
                  console.log(result);
                  dapatUang((error, result) => {
                    if(error){
                      console.log(error);
                    } else {
                      console.log(result);
                    }
                  })
                }
              })
            }
          });
        }
      });
    }
  });