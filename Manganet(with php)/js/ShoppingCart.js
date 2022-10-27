import inCartItem from './inCartItem.js';
import shoppingCartButtons from './shoppingCartButtons.js';

var cartItemQuantity = new inCartItem();
var cartButtons = new shoppingCartButtons();

cartItemQuantity.getItemQuantity();
cartItemQuantity.getItemsFromLocalStorage();
cartItemQuantity.getSubTotal();

cartButtons.addRemoveButtonsListener();
cartButtons.addIncreaseButtonsListener();
cartButtons.addDecreaseButtonsListener();
cartButtons.addCheckoutListener();