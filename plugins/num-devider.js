import Vue from 'vue'

Vue.filter('numDevider', val => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})