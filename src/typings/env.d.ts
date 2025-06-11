/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

// 声明自动引入的 vue 组件
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// // 声明 icons 引入的组件
// declare module '~icons/*' {
//   import { FunctionalComponent, SVGAttributes } from 'vue'
//   const component: FunctionalComponent<SVGAttributes>
//   export default component
// }


// 声明 vite 环境变量
declare interface ImportMetaEnv {
  readonly VITE_MODE_ENV: string
  readonly VITE_API_BASEURL: string
  readonly VITE_APP_TITLE: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

type ComponentSize = any

// declare module 'element-china-area-data'


