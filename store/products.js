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
    addProductToCart(context, data) {
        return this.$axios.get('https://fakestoreapi.com/carts', {
            params:{
                productId: data.id,
                count: data.quantity
            }
        }).then(res =>{
            console.log(res)
        })
    }
}