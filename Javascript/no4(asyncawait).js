function lulusSemester4() {
    return new Promise(resolve => {
      console.log("Mencari nilai memuaskan di semester 4...");
      setTimeout(() => {
        console.log("Target 1 berhasil dicapai! Lulus semester 4 dengan nilai memuaskan.");
        resolve();
      }, 2000); 
    });
  }
  
  function dapatBeasiswa() {
    return new Promise(resolve => {
      console.log("Mengajukan beasiswa...");
      setTimeout(() => {
        console.log("Target 2 berhasil dicapai! Mendapatkan beasiswa.");
        resolve();
      }, 3000); 
    });
  }
  
  function ikutOrganisasi() {
    return new Promise(resolve => {
      console.log("Mengikuti beberapa organisasi...");
      setTimeout(() => {
        console.log("Target 3 berhasil dicapai! Mengikuti beberapa organisasi.");
        resolve();
      }, 4000); 
    });
  }

  function jadiAdminMCI() {
    return new Promise(resolve => {
      console.log("Mengikuti beberapa pelatihan...");
      setTimeout(() => {
        console.log("Target 4 berhasil dicapai! Menjadi admin MCI.");
        resolve();
      }, 5000); 
    });
  }

  function dapatUang() {
    return new Promise(resolve => {
      console.log("Mencari Uang...");
      setTimeout(() => {
        console.log("Target 5 berhasil dicapai! Mendapatkan uang.");
        resolve();
      }, 6000);
    });
  }
  
  async function main() {
    await lulusSemester4();
    await dapatBeasiswa();
    await ikutOrganisasi();
    await jadiAdminMCI();
    await dapatUang();
  }
  
  main();