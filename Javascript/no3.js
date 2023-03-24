// Fungsi argWhere
function argWhere(arr) {
    const index = []; // Berisi index dari setiap elemen non nol (1)
    const ukuranDimensi = dim(arr); // array yang merepresentasikan dimensi dari arr
    arr.forEach((plane, z) => { // Pengulangan pada setiap 'plane' dan mengembalikan index z
      plane.forEach((row, y) => { // Pengulangan pada setiap row dan mengembalikan index y
        row.forEach((value, x) => { // Pengulangan pada setiap kolom dan mengembalikan index x
          if (value !== 0) {  // Jika nilai yang ditemukan bukan 0 maka index dimasukkan dalam variable index
            index.push([z, y, x]);
          }
        });
      });
    });
    return index; // Mengembalikan arr pada variable index
  }
  
  // Fungsi dim
  function dim(arr) {
    // Melakukan pengecekan apakah arr adalah array 
    if (arr instanceof Array) {
      return [arr.length].concat(dim(arr[0]));
    } else {
      return [];
    }
  }
  

  // Input program
  const input = [
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
  ];
  
  // Output program
  const output = argWhere(input);
  console.log(output);
  
