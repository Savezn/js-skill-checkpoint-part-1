// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
// function
function calculateTotalPrice(a, b) {
  let sum = 0;
  let discount = 0;
  let totalAmount = 0;
  // loop
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price * products[i].quantity;
    
  }
  console.log(sum);

  // if-else
  if (promotionCode === "SALE20") {
    discount = 20 / 100;
  } else if (promotionCode === "SALE50") {
    discount = 50 / 100;
  } else {
    discount = 0;
  }
  console.log(discount);
  
  totalAmount = sum - sum * discount;
  console.log(totalAmount);
  
  return totalAmount;
}

console.log(calculateTotalPrice(products, promotionCode));
