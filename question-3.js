// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  let result = "";
  let totalLetter = 0;

  for (let i = 0; i < userPassword.length; i++) {
    if (userPassword[i]) {
      totalLetter++;
      // console.log(totalLetter);
    }
    if (totalLetter > 10) {
      result = "Strong";
    } else if (totalLetter >= 6) {
      result = "Medium";
    } else if (totalLetter < 6) {
      result = "Weak";
    }
  }

  return result;
}

userPassword = "ssswnalWadqQ";
console.log(checkPasswordStrength(userPassword));

userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword));

userPassword = "abcde";
console.log(checkPasswordStrength(userPassword));