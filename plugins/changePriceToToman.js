export default ({ app }, inject) => {
    function changeToToman(val) {
        return val/10
    }
    // Inject $hello(msg) in Vue, context and store.
    inject('toman', val => changeToToman(val))
  }