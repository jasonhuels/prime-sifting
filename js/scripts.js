$(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var number = $("#input").val();
    var numbers = [];
    var prime = 2;
    var primes = [prime];


    for(let i=prime; i<=number; i++) {
      numbers.push(i);
    }

    for(let i=prime; i<=numbers.length; i++) {
      for(let j=i; j<=numbers.length; j+=i) {
        numbers.splice(j, 1);
        console.log(numbers);
      }
    }

    console.log(numbers);
  });
});
