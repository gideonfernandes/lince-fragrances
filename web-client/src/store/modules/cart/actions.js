export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
};

export function removeFromCart(productId) {
  return {
    type: '@cart/REMOVE',
    productId,
  };
};

export function updateAmount(productId, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    productId,
    amount,
  };
};
