$(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#input").val());
    var numbers = [];
    var prime = 2;
    var primes = [];//[prime];


    for(let i=prime; i<=number; i++) {
      numbers.push(i);
    }

    // for(let i=2; i<numbers.length; i++) {
    //   numbers.splice(i, 1);
    // }

    // for(let i=2; i<numbers.length; i++){
    //   if(numbers[i] % 2 === 0) {
    //     numbers.splice(i, 1);
    //   }
    // }
    // for(let i=3; i<numbers.length; i++){
    //   if(numbers[i] % 3 === 0) {
    //     numbers.splice(i, 1);
    //   }
    // }
    // for(let i=5; i<numbers.length; i++){
    //   if(numbers[i] % 5 === 0) {
    //     numbers.splice(i, 1);
    //   }
    // }
    // for(let i=7; i<numbers.length; i++){
    //   if(numbers[i] % 7 === 0) {
    //     numbers.splice(i, 1);
    //   }
    // }

    for(let j=0; j<numbers.length; j++) {
      primes.push(numbers[j]);
      for(let i=primes[j]; i<numbers.length; i++) {
        if(numbers[i] % primes[j] === 0) {
          numbers.splice(i, 1);
        }
      }
    }

    console.log(numbers);
  });
});
