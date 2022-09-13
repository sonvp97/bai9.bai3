function interpretation() {
    let Weight = Number(document.getElementById('weight').value);
    Height = Number(document.getElementById('height').value);
    BMI = Weight / (Height * Height);
    result;
    if (BMI < 18.5) {
        result = 'Underweight';
    } else if (BMI < 25.0) {
        result = 'Normal';
    } else if (BMI < 30.0) {
        result = 'Overweight';
    } else {
        result = 'Obese';
    }
    document.getElementById('result').innerHTML = result;
}