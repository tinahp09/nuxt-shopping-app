export const state = () => ({
    productsList: [
        
    ],
    cartProducts:[]
})

export const mutations = {
    setProducts(state, products) {
        state.productsList = products;
    }
}

export const actions = {
    getAllProducts() {
        return this.$axios.get('products').then(res => {
            return res.data
        },
            data => {
                return data
            }
        )
    },
    bestSelling() {
        return this.$axios.get('products?limit=3').then(res => {
            return res.data
        },
            data => {
                return data
            }
        )
    },
    getSingleProduct(context, payload) {
        console.log('Hi')
        console.log(payload.id)
        return this.$axios.get(`products/${payload.id}`).then(res => {
            return res.data
        },
            data => {
                return data
            }
        )
    },
    getRecentProduct() {
        return this.$axios.get('products?limit=3').then(res => {
            return res.data
        },
            data => {
                return data
            }
        )
    },
    async getAllCarts(context) {
        const product = await this.$axios.get('carts')
        this.$cookies.set('product', product)
        console.log('shop ', product)
        const products = product.data[0].products
        console.log(products)
        // if (process.client) {
        //     localStorage.setItem('product', JSON.stringify(products))
        // }
        this.$cookies.set('cartInfo', products)
        const arrayProduct = []
        products.forEach(item => {
            console.log(item)
            arrayProduct[item.productId] = item.quantity
        });
        console.log('arayyyyys')
        console.log(arrayProduct)
        context.commit('setProducts', arrayProduct)
    },
    async addToCart(context, payload) {
        console.log('payload: ' , payload)
       return await this.$axios.post('carts', {
            userId: 5,
            date: 2020,
            products: [payload]
        }).then(res => {
            return res;
        },
            data => {
                return data;
            }
        )
        
    
    },
    getUserOrder(context) {
        return this.$axios.get('https://fakestoreapi.com/carts/user/2').then(res => {
            return res.data
        },
        data => {
            return data
        }
        )
    }
}