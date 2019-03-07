const ui = {
    state: {
        isCollapse: true
    },
    mutations: {
        showAside: function (state) {
            state.isCollapse = !state.isCollapse;
        }
    },
    actions: {
        showAside({commit}) {
            commit('showAside')
        }
    },
    getters: {
        collapse: (state) => {
            return state.isCollapse
        }
    }
}
export default ui 