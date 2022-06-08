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
    getSingleProducts(item) {
        return this.$axios.get('products/'+ item.id).then(res => {
            return res.data
        },
            data => {
                return data
            }
        )
    }
}