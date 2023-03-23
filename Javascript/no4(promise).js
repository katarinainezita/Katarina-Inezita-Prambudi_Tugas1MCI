function lulusSemester4() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ipk = 3.5; 
        if (ipk >= 3) {
          resolve("Anda lulus semester 4 dengan nilai memuaskan!");
        } else {
          reject("Anda tidak lulus semester 4 dengan nilai memuaskan.");
        }
      }, 2000); 
    });
  }
  
  function dapatBeasiswa() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dapatBeasiswa = 7000000;
        if (dapatBeasiswa >= 5000000) {
          resolve("Anda telah menerima beasiswa!");
        } else {
          reject("Anda tidak menerima beasiswa.");
        }
      }, 3000);
    });
  }
  
  function ikutOrganisasi() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const jumlahOrganisasi = 2; 
        if (jumlahOrganisasi >= 1) {
          resolve("Anda telah mengikuti beberapa organisasi!");
        } else {
          reject("Anda belum mengikuti organisasi.");
        }
      }, 4000); 
    });
  }

  function jadiAdminMCI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const nilai = 90;
            if(nilai >= 80){
                resolve("Anda diterima menjadi admin MCI");
            } else {
                reject("Anda tidak diterima menjadi admin MCI");
            }
        }, 5000);
    });
  }
  
  function dapatUang() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const uang = 10000000;
            if(uang > 5000000){
                resolve("Anda mendapat uang");
            } else {
                reject("Anda tidak mendapat uang");
            }
        }, 6000);
    });
  }

  lulusSemester4()
    .then((result) => {
      console.log(result);
      return dapatBeasiswa();
    })
    .then((result) => {
      console.log(result);
      return ikutOrganisasi();
    })
    .then((result) => {
        console.log(result);
        return jadiAdminMCI();
    })
    .then((result) => {
        console.log(result);
        return dapatUang();
    })
    .then((result) => {
      console.log(result);
      console.log("Selamat, Anda telah mencapai ketiga target hidup Anda!");
    })
    .catch((error) => {
      console.log(error);
    });