$(document).ready(function(){

    function calculator(){
      let sum = "";
      let inputArr;
      let inputVal = document.getElementById("screen");

      $(".buttons .digit").on('click', function() {
        let num = $(this).attr('value');
        sum += num;
        $("#screen").html(sum);

        inputArr = inputVal.innerHTML.split("");

      });

      $(".buttons .operator").on('click', function(e) {
        e.preventDefault();
        let ops = $(this).attr('value');
        sum += ops;
        $("#screen").html(sum);
        inputArr = inputVal.innerHTML;
      });
  
  
      $("#equal").on('click', function() {
        let total =  eval(sum);
        $("#screen").html(total);
        
      });
  
      $("#clear").on('click', function() {
        sum = "";
        $("#screen").html(0);
      });
  
      };
            calculator();
  });
  