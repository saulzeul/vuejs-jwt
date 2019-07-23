const order = {
    state: {
        ticket: false,
        productsTicket: [
            { id: 1, nameProduct: "Hamburguesa sencilla", price: 45.0 },
            { id: 2, nameProduct: "Malteada chocolate", price: 24.0 },
            { id: 3, nameProduct: "Torta lomo", price: 32.0 },
            { id: 4, nameProduct: "Torta lomo", price: 34.0 }
        ],
        test: [

        ]
    },
    mutations: {
        ADD_PRODUCT_TICKET (state, product) {
            state.test.push(product)
            state.ticket = true
        },
        EDIT_PRODUCT_TICKET (state, product) {
            state.test.push(product)
            state.ticket = true
        },
        REMOVE_PRODUCT_TICKET (state, product) {
            state.test.push(product)
            state.ticket = true
        },                
        REMOVE_ALL_PRODUCTS_TICKET (state) {
            state.test = []
            state.ticket = false
        }

    },
    actions: {
        addProductToTicket({commit}, product) {
            commit('ADD_PRODUCT_TICKET', product)
        },
        clearAllProductsTicket({commit}) {
            commit('REMOVE_ALL_PRODUCTS_TICKET')
        }
    },
    getters: {

    }
}
export default order