const generatePrimeNos = ((num) => {
      num++;
      for (let i = 2; i < num; i++) {
         if(num%i === 0) {
            num++;
         }
      }
      return num;
})(1797)
