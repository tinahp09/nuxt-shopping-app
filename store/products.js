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
    // getSingleProduct() {
    //     return this.$axios.get(`products/${id}`).then(res => {
    //         return res.data
    //     },
    //         data => {
    //             return data
    //         }
    //     )
    // }
}