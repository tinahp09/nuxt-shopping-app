export const actions = {
    getAllProducts() {
        return this.$axios.get('products').then(res => {
            console.log(res.data)
        },
        data => {
            return data
        }
        )
    }
}