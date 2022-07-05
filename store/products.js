export const state = () => ({
    productsList: [
        {
            id: 1,
            productId: 1,
            productTitle: 'product',
            price: 10000,
            count:1,
        }
    ]
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
        const products = product.data[0].products
        console.log(products)
        if (process.client) {
            localStorage.setItem('product', JSON.stringify(products))
        }
        const arrayProduct = []
        products.forEach(item => {
            console.log(item)
            arrayProduct[item.productId] = item.quantity
        });
        console.log('arayyyyys')
        console.log(arrayProduct)
        context.commit('setProducts', arrayProduct)
    },
    addToCart(context, payload) {

        return this.$axios.post('carts', {
            userId: 5,
            date: 2020,
            products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
        }).then(res => {
            return res.data;
        },
            data => {
                return data;
            }
        )

    
    }
}