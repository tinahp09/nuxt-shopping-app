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
        return this.$axios.get('products/category/electronics').then(res => {
            return res.data
        },
        data => {
            return data
        }
        )
    },
    getSingleProduct(data) {
        // console.log(data.id)
        return this.$axios.get(`products/1`).then(res => {
            return res.data
        },
        data => {
            return data
        }
        )
    }
}