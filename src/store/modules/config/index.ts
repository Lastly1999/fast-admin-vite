
export type ConfigState = {
  systemTheme: 'default-theme'
}

export type configModule = {
  namespaced: boolean;
  state: () => ConfigState;
  getters: {

  },
  actions: {

  };
  mutations: {
    
  }
}
/**
 * 系统全局配置仓库
 * @date 2021年10月13日14:57:58
 */
export const configModule: configModule = {
  namespaced: true,
  state: () => {
    return {
      systemTheme: 'default-theme'
    }
  },
  getters: {},
  actions: {},
  mutations: {}
}