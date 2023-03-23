function argWhere(arr) {
    const indices = [];
    const dimSizes = dim(arr);
    arr.forEach((plane, z) => {
      plane.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            indices.push([z, y, x]);
          }
        });
      });
    });
    return indices;
  }
  
  function dim(arr) {
    if (arr instanceof Array) {
      return [arr.length].concat(dim(arr[0]));
    } else {
      return [];
    }
  }
  
  // contoh penggunaan
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
  
  const output = argWhere(input);
  console.log(output);
  