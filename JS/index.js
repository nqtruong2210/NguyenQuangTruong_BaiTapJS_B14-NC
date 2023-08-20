// EXERCISE 1
function nextDay() {
    let day = document.getElementById('ex5--ngay').value * 1;
    let month = document.getElementById('ex5--thang').value * 1;
    let year = document.getElementById('ex5--nam').value * 1;
    let result = document.getElementById('time');
  
    if (year > 1920) {
      if (
        day <= 31 &&
        (month === 1 ||
          month === 3 ||
          month === 5 ||
          month === 7 ||
          month === 8 ||
          month === 10 ||
          month === 12)
      ) {
        if (day === 31) {
          if (month === 12) {
            result.innerHTML = `1/1/${year + 1}`;
          } else {
            result.innerHTML = `1/${month + 1}/${year}`;
          }
        } else {
          result.innerHTML = `${day + 1}/${month}/${year}`;
        }
      } else if (day <= 30 && (month === 4 || month === 6 || month === 9 || month === 11)) {
        if (day === 30) {
          result.innerHTML = `1/${month + 1}/${year}`;
        } else {
          result.innerHTML = `${day + 1}/${month}/${year}`;
        }
      } else if (year % 4 === 0 && month === 2 && day <= 29) {
        if (day === 29) {
          result.innerHTML = `1/${month + 1}/${year}`;
        } else {
          result.innerHTML = `${day + 1}/${month}/${year}`;
        }
      } else if (year % 4 !== 0 && month === 2 && day <= 28) {
        if (day === 28) {
          result.innerHTML = `1/${month + 1}/${year}`;
        } else {
          result.innerHTML = `${day + 1}/${month}/${year}`;
        }
      } else {
        alert('Dữ liệu không hợp lệ.');
      }
    } else {
      alert('Vui lòng nhập số năm lớn hơn 1920');
    }
  }
  
  function prevDay() {
    let day = document.getElementById('ex5--ngay').value * 1;
    let month = document.getElementById('ex5--thang').value * 1;
    let year = document.getElementById('ex5--nam').value * 1;
    let result = document.getElementById('time');
  
    if (day === 1) {
      if (month === 1) {
        result.innerHTML = `31/12/${year - 1}`;
      } else if (
        month === 2 ||
        month === 4 ||
        month === 6 ||
        month === 8 ||
        month === 9 ||
        month === 11
      ) {
        result.innerHTML = `31/${month - 1}/${year}`;
      } else if (month === 5 || month === 7 || month === 10 || month === 12) {
        result.innerHTML = `30/${month - 1}/${year}`;
      } else if (year % 4 === 0 && month === 3) {
        result.innerHTML = `29/${month - 1}/${year}`;
      } else if (year % 4 !== 0 && month === 3) {
        result.innerHTML = `28/${month - 1}/${year}`;
      }
    } else if (
      (day <= 31 &&
        (month === 1 ||
          month === 3 ||
          month === 5 ||
          month === 7 ||
          month === 8 ||
          month === 10 ||
          month === 12)) ||
      (day <= 30 && (month === 4 || month === 6 || month === 9 || month === 11)) ||
      (year % 4 === 0 && month === 2 && day <= 29) ||
      (year % 4 !== 0 && month === 2 && day <= 28)
    ) {
      result.innerHTML = `${day - 1}/${month}/${year}`;
    } else {
      alert('Dữ liệu không hợp lệ.');
    }
  }
  
  // EXERCISE 2
  function calcDay() {
    let month = document.getElementById('ex5--month').value * 1;
    let year = document.getElementById('ex5--year').value * 1;
    let result = document.getElementById('day');
  
    if (year > 1920) {
      if (
        month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12
      ) {
        result.innerHTML = `Tháng ${month} năm ${year} có 31 ngày.`;
      } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        result.innerHTML = `Tháng ${month} năm ${year} có 30 ngày.`;
      } else if (year % 4 === 0 && month === 2) {
        result.innerHTML = `Tháng ${month} năm ${year} có 29 ngày.`;
      } else if (year % 4 !== 0 && month === 2) {
        result.innerHTML = `Tháng ${month} năm ${year} có 28 ngày.`;
      } else {
        alert('Dữ liệu không hợp lệ.');
      }
    } else {
      alert('Vui lòng nhập số năm lớn hơn 1920');
    }
  }
  
  // EXERCISE 3
  function readNumber() {
    let number = document.getElementById('ex6--number').value * 1;
    let result = document.getElementById('number');
    let hangTram = Math.floor(number / 100);
    let hangChuc = Math.floor(number / 10) % 10;
    let hangDonVi = number % 10;
  
    if (number > 99 && number < 1000) {
      switch (hangTram) {
        case 1:
          hangTram = 'Một trăm';
          break;
        case 2:
          hangTram = 'Hai trăm';
          break;
        case 3:
          hangTram = 'Ba trăm';
          break;
        case 4:
          hangTram = 'Bốn trăm';
          break;
        case 5:
          hangTram = 'Năm trăm';
          break;
        case 6:
          hangTram = 'Sáu trăm';
          break;
        case 7:
          hangTram = 'Bảy trăm';
          break;
        case 8:
          hangTram = 'Tám trăm';
          break;
        case 9:
          hangTram = 'Chín trăm';
          break;
      }
  
      switch (hangChuc) {
        case 0:
          hangChuc = 'lẻ';
          break;
        case 1:
          hangChuc = 'mười';
          break;
        case 2:
          hangChuc = 'hai mươi';
          break;
        case 3:
          hangChuc = 'ba mươi';
          break;
        case 4:
          hangChuc = 'bốn mươi';
          break;
        case 5:
          hangChuc = 'năm mươi';
          break;
        case 6:
          hangChuc = 'sáu mươi';
          break;
        case 7:
          hangChuc = 'bảy mươi';
          break;
        case 8:
          hangChuc = 'tám mươi';
          break;
        case 9:
          hangChuc = 'chín mươi';
          break;
      }
  
      switch (hangDonVi) {
        case 0:
          hangDonVi = '';
          break;
        case 1:
          hangDonVi = 'mốt';
          break;
        case 2:
          hangDonVi = 'hai';
          break;
        case 3:
          hangDonVi = 'ba';
          break;
        case 4:
          hangDonVi = 'bốn';
          break;
        case 5:
          hangDonVi = 'năm';
          break;
        case 6:
          hangDonVi = 'sáu';
          break;
        case 7:
          hangDonVi = 'bảy';
          break;
        case 8:
          hangDonVi = 'tám';
          break;
        case 9:
          hangDonVi = 'chín';
          break;
      }
  
      if (hangChuc == 'lẻ' && hangDonVi == '') {
        result.innerHTML = `${hangTram} `;
      } else {
        result.innerHTML = `${hangTram} ${hangChuc} ${hangDonVi}`;
      }
    } else {
        alert('Dữ liệu không hợp lệ.');
    }
  }
  
  //EXERCISE 4
  function find() {
    let person1 = document.getElementById('ex8--name1').value;
    let person2 = document.getElementById('ex8--name2').value;
    let person3 = document.getElementById('ex8--name3').value;
    let toaDoX1 = document.getElementById('toaDoX1').value * 1;
    let toaDoY1 = document.getElementById('toaDoY1').value * 1;
    let toaDoX2 = document.getElementById('toaDoX2').value * 1;
    let toaDoY2 = document.getElementById('toaDoY2').value * 1;
    let toaDoX3 = document.getElementById('toaDoX3').value * 1;
    let toaDoY3 = document.getElementById('toaDoY3').value * 1;
    let toaDoX4 = document.getElementById('toaDoX4').value * 1;
    let toaDoY4 = document.getElementById('toaDoY4').value * 1;
    let result = document.getElementById('find');
  
    let doDai1 = Math.sqrt(Math.pow(toaDoX4 - toaDoX1, 2) + Math.pow(toaDoY4 - toaDoY1, 2));
    let doDai2 = Math.sqrt(Math.pow(toaDoX4 - toaDoX2, 2) + Math.pow(toaDoY4 - toaDoY2, 2));
    let doDai3 = Math.sqrt(Math.pow(toaDoX4 - toaDoX3, 2) + Math.pow(toaDoY4 - toaDoY3, 2));
  
    if (
      person1 &&
      person2 &&
      person3 &&
      toaDoX1 &&
      toaDoY1 &&
      toaDoX2 &&
      toaDoY2 &&
      toaDoX3 &&
      toaDoY3 &&
      toaDoX4 &&
      toaDoY4
    ) {
      if (doDai1 > doDai2 && doDai1 > doDai3) {
        result.innerHTML = `Sinh viên xa trường nhất: ${person1}`;
      } else if (doDai2 > doDai1 && doDai2 > doDai3) {
        result.innerHTML = `Sinh viên xa trường nhất: ${person2}`;
      } else if (doDai3 > doDai1 && doDai3 > doDai2) {
        result.innerHTML = `Sinh viên xa trường nhất: ${person3}`;
      } else if (doDai1 === doDai2 && doDai1 === doDai3) {
        result.innerHTML = `Sinh viên xa trường nhất: ${person3}, ${person2}, ${person3}`;
      } else if (doDai1 === doDai2) {
        result.innerHTML = `Sinh viên xa trường nhất: ${person1}, ${person2}`;
      }
      if (doDai1 === doDai3) {
        result.innerHTML = `Sinh viên xa trường nhất: ${person1}, ${person3}`;
      } else if (doDai2 === doDai3) {
        result.innerHTML = `Sinh viên xa trường nhất: ${person2}, ${person3}`;
      }
    } else {
      alert('Dữ liệu không hợp lệ.');
    }
  }
  