import {createStore} from "vuex"

// 分装仓库 非module式
import State from './state/install'
import Actions from './actions/install'
import Getters from './getters/install'
import Mutations from './mutations/install'

// modules 仓库分装
import Modules from './modules/install'

/**
 * store instance vuex实例
 * @author lastly
 * @date 2021年8月10日00:36:37
 */
const store = createStore({
    state: {...State} as any,
    actions: {...Actions} as any,
    mutations: {...Mutations} as any,
    getters: {...Getters} as any,
    modules: {...Modules} as any
})

export default store