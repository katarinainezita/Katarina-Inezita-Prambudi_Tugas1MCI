
# TUGAS MCI 1

Nama : Katarina Inezita Prambudi

NRP : 5025211148


# SQL

Sebelum mengerjakan soal yang diberikan, wajib mengunduh dataset yang telah di siapkan [disini](https://docs.google.com/document/d/1-FRkt4ltol1MiuhwPquN5O35lRB5lkW_J5_oyLca-Lw/edit). Setelah dataset diunduh, dapat membuat sebuah table dan melakukan insert pada table tersebut.

Untuk membuat sebuah table digunakan :
```
CREATE TABLE data_mahasiswa(  
   	NRP      INTEGER  NOT NULL,  
	Nama     VARCHAR(11) NOT NULL,  
  	Usia     INTEGER  NOT NULL,  
  	Semester INTEGER  NOT NULL,  
  	IPK      NUMERIC(4,2) NOT NULL,  
  	UKT      INTEGER  NOT NULL,  
    PRIMARY KEY (NRP)  
)
```

Untuk dapat mengubah data dari CSV ke SQL dapat menggunakan website [ini](https://www.convertcsv.com/csv-to-sql.htm). 

### 1. Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal! 

![App Screenshot](https://github.com/katarinainezita/Katarina-Inezita-Prambudi_Tugas1MCI/blob/main/Screenshoot/SQL_1.jpg)

Untuk dapat menampilkan data seperti pada gambar diatas, digunakan :

```
SELECT Nama, UKT  
FROM data_mahasiswa  
ORDER BY UKT DESC
```

### 2. Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal. 

![ScreenShot](https://raw.github.com/katarinainezita/Katarina-Inezita-Prambudi_Tugas1MCI/blob/main/Screenshoot/SQL_2.jpg)

Untuk dapat menampilkan data seperti pada gambar diatas, digunakan :

```
SELECT Nama, UKT  
FROM data_mahasiswa  
ORDER BY UKT DESC, Nama ASC
```

### 3. Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8 

![ScreenShot](https://raw.github.com/katarinainezita/Modul2_Probstat_5025211148/main/Screenshoot/Tabel1.jpg)

SQL_3

Untuk dapat menampilkan data seperti pada gambar diatas, digunakan :

```
SELECT COUNT(*) as Jumlah_Mahasiswa  
FROM data_mahasiswa  
WHERE IPK >= 3.5 AND Semester = 8
```

### 4. Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". Jika ukt mahasiswa diatas 1 juta sampai denga 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".

![ScreenShot](https://raw.github.com/katarinainezita/Modul2_Probstat_5025211148/main/Screenshoot/Tabel1.jpg)

SQL_4

Untuk dapat menampilkan data seperti pada gambar diatas, digunakan :

```
SELECT Nama, UKT,   
  CASE   
    WHEN UKT <= 1000000 THEN 'A'   
    WHEN UKT <= 2000000 THEN 'B'   
    ELSE 'C'   
  END AS Golongan  
FROM data_mahasiswa
```

### 5. Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. Diurutkan berdasarkan semesternya. Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.

![ScreenShot](https://raw.github.com/katarinainezita/Modul2_Probstat_5025211148/main/Screenshoot/Tabel1.jpg)

SQL_5

Untuk dapat menampilkan data seperti pada gambar diatas, digunakan :

```
SELECT Nama, Semester, IPK  
FROM data_mahasiswa dm1  
WHERE IPK = (  
  SELECT MAX(IPK)  
  FROM data_mahasiswa dm2  
  WHERE dm2.semester = dm1.semester  
)  
ORDER BY Semester, Nama
```


# Javascript

### 1. Buatkan program menggunakan Function Expression dengan JavaScript dengan tujuan menampilkan kalimat (“Saya Calon Admin MCI”) dengan delay 3000 ms lalu tampilkan nama anda.

Untuk dapat menjalankan program diatas digunakan :
```
const tampilkanPesan = function() {
  console.log("Saya Calon Admin MCI");
  setTimeout(function() {
    console.log("Katarina Inezita Prambudi");
  }, 3000);
};

tampilkanPesan();
```

Hasil yang dikeluarkan adalah :

![ScreenShot](https://raw.github.com/katarinainezita/Modul2_Probstat_5025211148/main/Screenshoot/Tabel1.jpg)

JS_1


### 2. Buatlah 2 file dengan tujuan sebagai berikut:

* File pertama berisikan fungsi aritmatika sederhana seperti penjumlahan, pengurangan, perkalian, pembagian
* File kedua tampilkan hasil perhitungan berikut menggunakan modul dari file pertama : 4000 / 2 + 25 - 2

Untuk dapat menjalankan program diatas pertama membuat sebuah file dengan nama kalkulator.js dengan kode program seperti :
```
const kalkulator = {
    tambah: function(num1, num2) {
      return num1 + num2;
    },
    kurang: function(num1, num2) {
      return num1 - num2;
    },
    kali: function(num1, num2) {
      return num1 * num2;
    },
    bagi: function(num1, num2) {
      return num1 / num2;
    }
  };
  
  module.exports = kalkulator;
```

Kemudian buat file kedua dengan nama app.js dengan kode program seperti :
```
const kalkulator = require("./kalkulator");

const hasil = kalkulator.bagi(4000, 2) + kalkulator.tambah(25, -2) - kalkulator.kurang(0, 0);
console.log(hasil);
```

Hasil yang dikeluarkan adalah :

![ScreenShot](https://raw.github.com/katarinainezita/Modul2_Probstat_5025211148/main/Screenshoot/Tabel1.jpg)

JS_2

### 3. np.argwhere merupakan sebuah fungsi yang tersedia pada library numpy di bahasa pemrograman python. Fungsi tersebut akan mengembalikan sebuah array 2 dimensi yang berisikan index - index value pada array n-d yang tidak bernilai 0, lakukan pencarian secara mandiri untuk mengetahui lebih lanjut mengenai fungsi np.argwhere. Implementasikan fungsi tersebut pada bahasa pemrograman Javascript untuk input array 3 dimensi.

Fungsi berikut mungkin akan digunakan dalam menyelesaikan soal :

```
function dim(arr) {
  if (arr instanceof Array) {
    return [arr.length].concat(dim(arr[0]));
  } else {
    return [];
  }
}
// fungsi di atas akan mengembalikan ukuran dari array yang menjadi input value.
```
```
input :
[
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
]
output : 
[
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
]
```

Untuk dapat menjalankan program diatas digunakan :
```
masih bingung ---
```

Hasil yang dikeluarkan adalah :

![ScreenShot](https://raw.github.com/katarinainezita/Modul2_Probstat_5025211148/main/Screenshoot/Tabel1.jpg)

JS_3

### 4. Implementasi Asynchronous dengan membuat minimal 5 target hidup yang ingin kalian raih di tahun 2023, bisa menggunakan salah satu dari ketiga macam Asynchronous , (Menggunakan ketiganya akan lebih baik).

Untuk dapat menjalankan program diatas dengan menggunakan callback : 
```
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
```

Hasil yang dikeluarkan adalah :

![ScreenShot](https://raw.github.com/katarinainezita/Modul2_Probstat_5025211148/main/Screenshoot/Tabel1.jpg)

JS_4(callback)

Untuk dapat menjalankan program diatas dengan menggunakan promise :
```
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
```

Hasil yang dikeluarkan adalah :

![ScreenShot](https://raw.github.com/katarinainezita/Modul2_Probstat_5025211148/main/Screenshoot/Tabel1.jpg)

JS_4(promise)

Untuk dapat menjalankan program diatas dengan menggunakan async / await :
```
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
```
Hasil yang dikeluarkan adalah :

![ScreenShot](https://raw.github.com/katarinainezita/Modul2_Probstat_5025211148/main/Screenshoot/Tabel1.jpg)

JS_4(asyncawait)
