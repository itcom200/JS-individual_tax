function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function calculateTax() {
    var annualIncome = parseFloat(document.getElementById('annualIncome').value);
  
    // คำนวณภาษี
    var tax = 0;
  
    if (annualIncome <= 150000) {
      tax = 0;
    } else if (annualIncome <= 300000) {
      tax = (annualIncome - 150000) * 0.05;
    } else if (annualIncome <= 500000) {
      tax = (annualIncome - 300000) * 0.1 + 7500;
    } else if (annualIncome <= 750000) {
      tax = (annualIncome - 500000) * 0.15 + 27500;
    } else if (annualIncome <= 1000000) {
      tax = (annualIncome - 750000) * 0.2 + 65000;
    } else if (annualIncome <= 2000000) {
      tax = (annualIncome - 1000000) * 0.25 + 115000;
    } else if (annualIncome <= 5000000) {
      tax = (annualIncome - 2000000) * 0.3 + 365000;
    } else {
      tax = (annualIncome - 5000000) * 0.35 + 1265000;
    }
  
    // แสดงผลลัพธ์
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'ภาษีที่ต้องชำระ: ' + numberWithCommas(tax.toFixed(2)) + ' บาท<br>เงินได้ต่อปี: ' + numberWithCommas(annualIncome.toFixed(2)) + ' บาท';
  }
  
  function clearInput() {
    var input = document.getElementById('annualIncome');
    input.value = '';
  
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
  }
  