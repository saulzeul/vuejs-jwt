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
        addProductToTicket (state, product) {
            state.test = product
        }

    },
    actions: {

    },
    getters: {

    }
}
export default order