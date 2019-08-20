$(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#input").val());
    var numbers = [];
    var prime = 2;
    var primes = [];

    for(let i=prime; i<=number; i++) {
      numbers.push(i);
    }

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
