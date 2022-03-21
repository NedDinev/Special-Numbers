function specialNumbers(input) {
  let number = Number(input[0]);
  let buff = "";
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let f = 1; f <= 9; f++) {
          if (
            number % i === 0 &&
            number % j === 0 &&
            number % k === 0 &&
            number % f === 0
          ) {
            buff += "" + i + j + k + f + " ";
          }
        }
      }
    }
  }
  console.log(buff);
}

specialNumbers(["3"]);
