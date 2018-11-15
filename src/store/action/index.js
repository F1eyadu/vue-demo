export default {
    updatedAsync({commit},payload) {
        setTimeout(()=>{
            commit('addCount', payload.num)
        },payload.time)
    },
}