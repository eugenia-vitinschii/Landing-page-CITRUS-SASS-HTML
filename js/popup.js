//popup

const openPurchase =  document.getElementById('purchase-open');
const closePurchase = document.getElementById('purchase-close');
const purchase = document.getElementById('purchase');

openPurchase.addEventListener( 'click', ()=> {
   purchase.classList.add("open");
});

closePurchase.addEventListener( 'click', ()=> {
   purchase.classList.remove("open");
});

 
//popup
const openIngredients = document.getElementById('ingredient-open');
const closeIngredients = document.getElementById('ingredient-close');
const ingredients = document.getElementById('ingredient');

openIngredients.addEventListener( 'click', () => {
   ingredients.classList.add("open");
   console.log('open')
});

closeIngredients.addEventListener( 'click', ()=> {
   ingredients.classList.remove('open');
   console.log('cloase')
});