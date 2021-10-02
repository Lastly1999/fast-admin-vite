import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// jsx plugin
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "path"

// const api_url = 'http://159.75.22.114:5600/'
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
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    // 更改主题在这里
                    // 'primary-color': '#52c41a',
                    // 'link-color': '#1DA57A',
                    // 'border-radius-base': '2px'
                },
                javascriptEnabled: true
            }
        }
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js', // 定义vue的别名，如果使用其他的插件，可能会用到别名
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
        vue()
    ],
})
