import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import styleImport from "vite-plugin-style-import"
// jsx plugin
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "path"

const api_url = 'http://127.0.0.1:5600/'
const api_base = 'v1'

// https://vitejs.dev/config/
export default defineConfig({ // ...
    server: {
        proxy: {
            '/api': {
                target: `${api_url}${api_base}`,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
    resolve: {
        alias: {
            // 路径别名配置
            "@": path.resolve(__dirname, "src"),
            // 组件路径别名
            components: path.resolve(__dirname, "src/components"),
            // 视图组件路径别名
            views: path.resolve(__dirname, "src/views"),
            // 布局组件路径别名
            layouts: path.resolve(__dirname, "src/layouts"),
            // 工具类路径别名
            utils: path.resolve(__dirname, "src/utils"),
            // api层路径别名
            services: path.resolve(__dirname, "src/services"),
            // 类型层文件别名
            typings: path.resolve(__dirname, "src/typings"),
        },
    },
    plugins: [
        vueJsx(),
        vue(),
        // element plus 按需引入配置
        // 说明见 https://element-plus.gitee.io/#/zh-CN/component/quickstart
        styleImport({
            libs: [
                {
                    libraryName: "element-plus",
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: (name) => {
                        name = name.slice(3)
                        return `element-plus/packages/theme-chalk/src/${name}.scss`
                    },
                    resolveComponent: (name) => {
                        return `element-plus/lib/${name}`
                    },
                },
            ],
        }),
    ],
})
