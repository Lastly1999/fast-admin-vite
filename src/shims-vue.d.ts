declare module '*.vue' {
    import {DefineComponent} from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-typings
    const component: DefineComponent<{}, {}, any>
    export default component
}


declare module "@/*"
declare module "utils/*"
declare module "typings/*"