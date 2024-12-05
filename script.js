function calcBMI () {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
  
    var bmi = weight / (height / 100) ** 2;
    bmi = bmi.toFixed(2);
    
    
    if (bmi < 18.5) {
      document.getElementById('result').innerHTML = 'Your BMI is : ' + bmi + '<br>Your weight is <span>Underweight</span>.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById('result').innerHTML = 'Your BMI is : ' + bmi + '<br>Your weight is <span>Normal weight</span>.';
    } else if (bmi >= 25 && bmi <= 29.9) {
      document.getElementById('result').innerHTML = 'Your BMI is : ' + bmi + '<br>Your weight is <span>Overweight</span>.';
    } else if (bmi > 30) {
      document.getElementById('result').innerHTML = 'Your BMI is : ' + bmi + '<br>Your weight is <span>Obese</span>.';
    } else {
      document.getElementById('result').innerHTML = 'Please type valid numbers.';
    }
  }



