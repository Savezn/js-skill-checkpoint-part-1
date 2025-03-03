// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
// 1)
inventory[0].quantity = 200;
console.log(inventory[0].quantity);

// 2)
inventory.push({name: "Orange",price: 20,quantity: 300})
console.log(inventory);

// 3)
let totalAmount = 0;
for (let i = 0; i < inventory.length; i++) {
  totalAmount += inventory[i].price * inventory[i].quantity; 
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalAmount} บาท`);