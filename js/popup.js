//purchase popup for start section

const openPurchase =  document.getElementById('purchase-open');
const closePurchase = document.getElementById('purchase-close');
const purchase = document.getElementById('purchase');

openPurchase.addEventListener( 'click', ()=> {
   purchase.classList.add("open");
   console.log("open")
})

closePurchase.addEventListener( 'click', ()=> {
   purchase.classList.remove("open");
   console.log("close")
})