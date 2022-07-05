export default function (context) {
    // Add the userAgent property to the context
    context.store.dispatch('getAllCarts')
  }