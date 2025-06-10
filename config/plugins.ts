import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import viteCompression from 'vite-plugin-compression'
import { ConfigEnv } from 'vite'
import { svgBuilder } from '../src/icons'

export default (env: ConfigEnv) => {
  return [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    svgLoader(),
    svgBuilder('./src/icons/svg/'),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    AutoImport({ // 自动导入api
      dts: './src/typings/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router' , '@vueuse/core'],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: './src/typings/components.d.ts', // 全局生命文件
      extensions: ['vue', 'md'], // 配置需要将哪些后缀类型的文件进行自动按需引入
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ['src/components/'], // 指定组件所在位置
      resolvers: [ElementPlusResolver(), IconsResolver(), VueUseComponentsResolver()]
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true
    }),
    (viteCompression as any).default({
      // 是否在控制台输出压缩结果
      verbose: true,
      // 是否禁用
      disable: false,
      // 体积大于 threshold 才会被压缩,单位 b
      threshold: 10240,
      // 压缩算法
      algorithm: 'gzip',
      // 生成的压缩包后缀
      ext: '.gz',
      // 压缩后是否删除源文件
      deleteOriginFile: false
    }),
    (PkgConfig as any).default(), // 启动优化
    (OptimizationPersist as any).default() // 显示依赖项
  ]
}