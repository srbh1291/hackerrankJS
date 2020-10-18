// 2,3,5,7,11 ....... 6

const generatePrimeNos = ((num) => {
      num++;
      for (let i = 2; i < num; i++) {
         if(num%i === 0) {
            num++;
            i=2;
         } else {
            continue;
         }
      }
      return num;
})(5)


console.log(generatePrimeNos)
