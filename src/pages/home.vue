<script setup lang="ts">
import headerComponent from '../components/header.vue'
import { ref } from 'vue'
import { useUserStore } from "@/store"
import { useRouter } from "vue-router"
import firstVideo1 from '@/assets/video/home-1.mp4'
import firstVideo2 from '@/assets/video/home-2.mp4'
import firstVideo3 from '@/assets/video/home-3.mp4'
import firstVideo4 from '@/assets/video/home-4.mp4'
import firstVideoPoster1 from '@/assets/home-banner3.jpeg'
import firstVideoPoster2 from '@/assets/home-banner6.jpeg'
import firstVideoPoster3 from '@/assets/home-banner12.jpeg'
import firstVideoPoster4 from '@/assets/home-banner13.jpeg'


const userStore = useUserStore()
const router = useRouter()
const headerRef: any = ref(null)

const firstData = ref([firstVideo1, firstVideo2, firstVideo3, firstVideo4])
const firstDataPoster = ref([firstVideoPoster1, firstVideoPoster2, firstVideoPoster3, firstVideoPoster4])
// const firstData = ref(['https://media.w3.org/2010/05/sintel/trailer.mp4','https://vjs.zencdn.net/v/oceans.mp4','https://www.w3schools.com/html/movie.mp4','https://stream7.iqilu.com/10339/upload_transcode/202002/09/20200209105011F0zPoYzHry.mp4'])
const firstIndex = ref(0)

const handleFirstChange = (index: number) => {
  firstIndex.value = index
}
setInterval(() => {
  let nextIndex = firstIndex.value + 1
  if(nextIndex > firstData.value.length - 1) {
    nextIndex = 0
  }
 handleFirstChange(nextIndex)
}, 15000)

const handleCreate = () => {
  if(userStore.getUserInfo.user_id) {
    router.push('/main/creation')
  }else{
if (headerRef.value) {
    headerRef.value.handleLogin()
  }
  }
  // window.location.href = '/create'
}

</script>

<template>
  <div id=root>
    <headerComponent isFixed ref="headerRef" />
    <section class=box-weRFZa>
      <div class=bg-box-iGxURO>
        <video :src="firstData[firstIndex]" class=video-_dSgML
          style="display:block" preload=auto  disablepictureinpicture disableremoteplayback
          playsinline muted loop autoplay >
          <track kind=caption>
        </video>
      </div>
      <div class=right-box-rgRoBY>
        <img @click="handleFirstChange(index)" class=right-box-item-qgzhq3 :class="{active: firstIndex === index}" :src="item" alt=""  v-for="(item, index) in firstDataPoster" :key="index" />
      </div>
      <!-- <div class=bottom-bYPxPC>
        <div class="input-DoV4AV input-flrsTo">
          <div class=text-HqXWWy>时尚斑马在水里吐泡泡</div><a target=_blank href=https://jimeng.jianying.com/ai-tool/home><button
              class="jimeng-button jimeng-button-primary button-_IoMtQ"><svg xmlns=http://www.w3.org/2000/svg width=18
                height=18 fill=currentColor viewBox="0 0 18 18" class=icon-HfdJ8F>
                <path fill-rule=evenodd
                  d="M10.921 4.229a4 4 0 0 0-.198.007l-.054-.004a.19.19 0 0 1-.142-.136l-.002-.008a.2.2 0 0 1 .08-.22c.947-.633 1.301-1.48 1.062-2.963a.12.12 0 0 1 .08-.136.115.115 0 0 1 .141.064c.603 1.365 1.398 1.84 2.526 1.8a.19.19 0 0 1 .185.134l.002.007a.2.2 0 0 1-.04.193l-.053.043q-.081.051-.161.107c-.337.202-.948.476-1.667.71s-1.373.37-1.759.402M4.07 13.088q-.301.002-.595.02a2 2 0 0 1-.162-.01.57.57 0 0 1-.425-.41l-.007-.022a.6.6 0 0 1 .24-.66c2.842-1.9 3.903-4.44 3.186-8.89a.366.366 0 0 1 .243-.409.344.344 0 0 1 .421.194c1.81 4.094 4.194 5.517 7.577 5.4.25-.01.476.155.554.4l.007.023a.6.6 0 0 1-.12.578q-.07.06-.158.128-.244.154-.485.322c-1.01.607-2.842 1.43-5 2.13-2.16.7-4.117 1.109-5.276 1.206m5.552-.449c1.072-.35 2.04-.787 2.854-1.247l-.002.001c-1.011 1.124-1.739 2.471-1.755 3.912a.46.46 0 0 1-.312.436.44.44 0 0 1-.498-.18c-.805-1.195-2.117-1.894-3.545-2.228.987-.1 2.108-.32 3.258-.694m4.101-8.976a5.287 5.287 0 0 1-2.037.647c.476.112.913.345 1.181.743.038.055.104.08.166.06a.15.15 0 0 0 .105-.145c.005-.48.248-.93.585-1.304"
                  clip-rule=evenodd></path>
              </svg><span>即梦成片</span></button></a>
        </div>
        <div class=tip-q4L709>此视频内容由 历史漫绘 生成</div>
      </div> -->

      
    </section>
    <section class=box-WDLjs6>
      <div class=header-tD8TNM>
        <!-- <div class=header-tips-KCLXJJ><svg xmlns=http://www.w3.org/2000/svg width=18 height=18 fill=currentColor
            viewBox="0 0 18 18">
            <path fill-rule=evenodd
              d="M10.921 4.229a4 4 0 0 0-.198.007l-.054-.004a.19.19 0 0 1-.142-.136l-.002-.008a.2.2 0 0 1 .08-.22c.947-.633 1.301-1.48 1.062-2.963a.12.12 0 0 1 .08-.136.115.115 0 0 1 .141.064c.603 1.365 1.398 1.84 2.526 1.8a.19.19 0 0 1 .185.134l.002.007a.2.2 0 0 1-.04.193l-.053.043q-.081.051-.161.107c-.337.202-.948.476-1.667.71s-1.373.37-1.759.402M4.07 13.088q-.301.002-.595.02a2 2 0 0 1-.162-.01.57.57 0 0 1-.425-.41l-.007-.022a.6.6 0 0 1 .24-.66c2.842-1.9 3.903-4.44 3.186-8.89a.366.366 0 0 1 .243-.409.344.344 0 0 1 .421.194c1.81 4.094 4.194 5.517 7.577 5.4.25-.01.476.155.554.4l.007.023a.6.6 0 0 1-.12.578q-.07.06-.158.128-.244.154-.485.322c-1.01.607-2.842 1.43-5 2.13-2.16.7-4.117 1.109-5.276 1.206m5.552-.449c1.072-.35 2.04-.787 2.854-1.247l-.002.001c-1.011 1.124-1.739 2.471-1.755 3.912a.46.46 0 0 1-.312.436.44.44 0 0 1-.498-.18c-.805-1.195-2.117-1.894-3.545-2.228.987-.1 2.108-.32 3.258-.694m4.101-8.976a5.287 5.287 0 0 1-2.037.647c.476.112.913.345 1.181.743.038.055.104.08.166.06a.15.15 0 0 0 .105-.145c.005-.48.248-.93.585-1.304"
              clip-rule=evenodd></path>
          </svg><span>支持文/图 生视频</span></div> -->
        <div class=header-right-wrapper-acr3jw>
          <h2 style="#000" class=header-title-_0vLTk>灵感即刻成片</h2>
          <div style="#000" class=header-desc-HoXsdg>A漫绘历史故事，AI生成漫画，输入一段历史或文化故事，即刻生成优质有声漫画</div>
        </div>
      </div>
      <div>
        <div class=box-nt966n>
          <div class=left-wrapper-_KDFs8>
            <div class=info-wrapper-GtziBS>
              <div class=info-WFSzvO>
                <h3 class=title-ITEvEZ>意境深远，以简驭繁</h3>
                <div class=desc-egHxcp>中国文化故事与中国绘画结合，讲最好听的中国故事</div>
              </div><a class="btn-EoHtfv" @click="handleCreate"><span>立即创作</span></a>
            </div>
            <div class=indexed-FjnNj2>01</div>
          </div>
          <div class=media-wrapper-mac_RP>
            <div class=glitch-wrapper-H049jO>
              <img src="../assets/home-banner2.jpeg"
                class="swiper-item-img-MKsgw0" loading=lazy>
              <!-- <video :src="secondVideoSrc" playsinline muted
                loop preload=auto crossorigin=anonymous autoplay
                class="placeholder-RiOie5 media-IWKWD4"></video> -->
            </div>
          </div>
        </div>
        <div class=box-nt966n>
          <div class=left-wrapper-_KDFs8>
            <div class=info-wrapper-GtziBS>
              <div class=info-WFSzvO>
                <h3 class=title-ITEvEZ>
                  <p>文化基因的现代表达</p>
                </h3>
                <div class=desc-egHxcp>使用ai技术把历史从一维空间变换到多维空间，更生动的表达</div>
              </div><a class="btn-EoHtfv" @click="handleCreate"><span>立即创作</span></a>
            </div>
            <div class=indexed-FjnNj2>02</div>
          </div>
          <div class=media-wrapper-mac_RP>
            <div class=glitch-wrapper-H049jO>
              <img src="../assets/home-banner3.jpeg"
                class="swiper-item-img-MKsgw0" loading=lazy>
                            <!-- <video :src="secondVideoSrc" playsinline muted
                loop preload=auto crossorigin=anonymous autoplay
                class="placeholder-RiOie5 media-IWKWD4"></video> -->
              </div>
          </div>
        </div>
        <div class=box-nt966n>
          <div class=left-wrapper-_KDFs8>
            <div class=info-wrapper-GtziBS>
              <div class=info-WFSzvO>
                <h3 class=title-ITEvEZ>情感共振的独特路径</h3>
                <div class=desc-egHxcp>娓娓道来的声音与宣纸上的墨色触发最丰富的文化记忆与情感共鸣</div>
              </div><a class="btn-EoHtfv" @click="handleCreate"><span>立即创作</span></a>
            </div>
            <div class=indexed-FjnNj2>03</div>
          </div>
          <div class=media-wrapper-mac_RP>
            <div class=glitch-wrapper-H049jO>
              <img src="../assets/home-banner4.jpeg"
                class="swiper-item-img-MKsgw0" loading=lazy>
                          <!-- <video :src="secondVideoSrc" playsinline muted
                loop preload=auto crossorigin=anonymous autoplay
                class="placeholder-RiOie5 media-IWKWD4"></video> -->
              </div>
          </div>
        </div>
      </div>
    </section>
    <section class=scroll-box-GKIdsN>
      <div class=box-JJ9yeN>
        <div class=header-A6lXCo>
          <div class=header-wrapper-H8cAcb>
            <!-- <section class=header-left-rcmLJe><svg xmlns=http://www.w3.org/2000/svg width=18 height=18 fill=currentColor
                viewBox="0 0 18 18">
                <path fill-rule=evenodd
                  d="M10.921 4.229a4 4 0 0 0-.198.007l-.054-.004a.19.19 0 0 1-.142-.136l-.002-.008a.2.2 0 0 1 .08-.22c.947-.633 1.301-1.48 1.062-2.963a.12.12 0 0 1 .08-.136.115.115 0 0 1 .141.064c.603 1.365 1.398 1.84 2.526 1.8a.19.19 0 0 1 .185.134l.002.007a.2.2 0 0 1-.04.193l-.053.043q-.081.051-.161.107c-.337.202-.948.476-1.667.71s-1.373.37-1.759.402M4.07 13.088q-.301.002-.595.02a2 2 0 0 1-.162-.01.57.57 0 0 1-.425-.41l-.007-.022a.6.6 0 0 1 .24-.66c2.842-1.9 3.903-4.44 3.186-8.89a.366.366 0 0 1 .243-.409.344.344 0 0 1 .421.194c1.81 4.094 4.194 5.517 7.577 5.4.25-.01.476.155.554.4l.007.023a.6.6 0 0 1-.12.578q-.07.06-.158.128-.244.154-.485.322c-1.01.607-2.842 1.43-5 2.13-2.16.7-4.117 1.109-5.276 1.206m5.552-.449c1.072-.35 2.04-.787 2.854-1.247l-.002.001c-1.011 1.124-1.739 2.471-1.755 3.912a.46.46 0 0 1-.312.436.44.44 0 0 1-.498-.18c-.805-1.195-2.117-1.894-3.545-2.228.987-.1 2.108-.32 3.258-.694m4.101-8.976a5.287 5.287 0 0 1-2.037.647c.476.112.913.345 1.181.743.038.055.104.08.166.06a.15.15 0 0 0 .105-.145c.005-.48.248-.93.585-1.304"
                  clip-rule=evenodd></path>
              </svg><span>支持文/图生图片</span></section> -->
            <section class=header-right-Qj0MQu>
              <h2 class=header-right-title-wwVbiL>AI绘画 梦境成真</h2>
              <div class=header-right-text-_sJ2oa> AI漫绘 穿越时光，只需简单的一篇历史故事或文化故事， 一段视觉绘画艺术的有声视频马上会呈现在你面前</div>
            </section>
          </div>
        </div>
        <div class=swiper-ZMH7zV>
          <div class=swiper-scroll-YOzToa>
            <div class=swiper-item-O8OmVh><img src="../assets/home-banner5.jpeg"
                class=swiper-item-img-MKsgw0 loading=lazy>
              <!-- <div class="input-DoV4AV input-AGWlqC">
                <div class=text-HqXWWy>3D游戏人物风格，戴夸张耳饰的民族风少女</div><a target=_blank
                  href=https://jimeng.jianying.com/ai-tool/login><button
                    class="jimeng-button jimeng-button-primary button-_IoMtQ"><svg xmlns=http://www.w3.org/2000/svg
                      width=18 height=18 fill=currentColor viewBox="0 0 18 18" class=icon-HfdJ8F>
                      <path fill-rule=evenodd
                        d="M10.921 4.229a4 4 0 0 0-.198.007l-.054-.004a.19.19 0 0 1-.142-.136l-.002-.008a.2.2 0 0 1 .08-.22c.947-.633 1.301-1.48 1.062-2.963a.12.12 0 0 1 .08-.136.115.115 0 0 1 .141.064c.603 1.365 1.398 1.84 2.526 1.8a.19.19 0 0 1 .185.134l.002.007a.2.2 0 0 1-.04.193l-.053.043q-.081.051-.161.107c-.337.202-.948.476-1.667.71s-1.373.37-1.759.402M4.07 13.088q-.301.002-.595.02a2 2 0 0 1-.162-.01.57.57 0 0 1-.425-.41l-.007-.022a.6.6 0 0 1 .24-.66c2.842-1.9 3.903-4.44 3.186-8.89a.366.366 0 0 1 .243-.409.344.344 0 0 1 .421.194c1.81 4.094 4.194 5.517 7.577 5.4.25-.01.476.155.554.4l.007.023a.6.6 0 0 1-.12.578q-.07.06-.158.128-.244.154-.485.322c-1.01.607-2.842 1.43-5 2.13-2.16.7-4.117 1.109-5.276 1.206m5.552-.449c1.072-.35 2.04-.787 2.854-1.247l-.002.001c-1.011 1.124-1.739 2.471-1.755 3.912a.46.46 0 0 1-.312.436.44.44 0 0 1-.498-.18c-.805-1.195-2.117-1.894-3.545-2.228.987-.1 2.108-.32 3.258-.694m4.101-8.976a5.287 5.287 0 0 1-2.037.647c.476.112.913.345 1.181.743.038.055.104.08.166.06a.15.15 0 0 0 .105-.145c.005-.48.248-.93.585-1.304"
                        clip-rule=evenodd></path>
                    </svg><span>即梦成片</span></button></a>
              </div> -->
            </div>
            <div class=swiper-item-O8OmVh><img src="../assets/home-banner6.jpeg"
                class=swiper-item-img-MKsgw0 loading=lazy alt=插画风格，太空飞行器在粉色星球低空飞行>
              <!-- <div class="input-DoV4AV input-AGWlqC">
                <div class=text-HqXWWy>插画风格，太空飞行器在粉色星球低空飞行</div><a target=_blank
                  href=https://jimeng.jianying.com/ai-tool/login><button
                    class="jimeng-button jimeng-button-primary button-_IoMtQ"><svg xmlns=http://www.w3.org/2000/svg
                      width=18 height=18 fill=currentColor viewBox="0 0 18 18" class=icon-HfdJ8F>
                      <path fill-rule=evenodd
                        d="M10.921 4.229a4 4 0 0 0-.198.007l-.054-.004a.19.19 0 0 1-.142-.136l-.002-.008a.2.2 0 0 1 .08-.22c.947-.633 1.301-1.48 1.062-2.963a.12.12 0 0 1 .08-.136.115.115 0 0 1 .141.064c.603 1.365 1.398 1.84 2.526 1.8a.19.19 0 0 1 .185.134l.002.007a.2.2 0 0 1-.04.193l-.053.043q-.081.051-.161.107c-.337.202-.948.476-1.667.71s-1.373.37-1.759.402M4.07 13.088q-.301.002-.595.02a2 2 0 0 1-.162-.01.57.57 0 0 1-.425-.41l-.007-.022a.6.6 0 0 1 .24-.66c2.842-1.9 3.903-4.44 3.186-8.89a.366.366 0 0 1 .243-.409.344.344 0 0 1 .421.194c1.81 4.094 4.194 5.517 7.577 5.4.25-.01.476.155.554.4l.007.023a.6.6 0 0 1-.12.578q-.07.06-.158.128-.244.154-.485.322c-1.01.607-2.842 1.43-5 2.13-2.16.7-4.117 1.109-5.276 1.206m5.552-.449c1.072-.35 2.04-.787 2.854-1.247l-.002.001c-1.011 1.124-1.739 2.471-1.755 3.912a.46.46 0 0 1-.312.436.44.44 0 0 1-.498-.18c-.805-1.195-2.117-1.894-3.545-2.228.987-.1 2.108-.32 3.258-.694m4.101-8.976a5.287 5.287 0 0 1-2.037.647c.476.112.913.345 1.181.743.038.055.104.08.166.06a.15.15 0 0 0 .105-.145c.005-.48.248-.93.585-1.304"
                        clip-rule=evenodd></path>
                    </svg><span>即梦成片</span></button></a>
              </div> -->
            </div>
          </div>
        </div>
        <div class="footer-hyIk9i sf-hidden"></div>
      </div>
    </section>
    <!-- <section class=box-OEFnpI>
      <div class=header-VkY2QN>
        <h2 class=title-VW8Iaq>智能画布 多图AI融合</h2>
        <div class=desc-y0bP_u>
          <div>历史漫绘一站式智能画布，集成AI拼图生成能力，并提供局部重绘、一键扩图、图像消除和抠图等多功能强大操作。你可以在同一画布上实现多元素的无缝拼接，确保AI绘画的创作风格统一和谐。</div>
        </div>
        <div class=cta-btn-wrapper-C8T0Ze><a class="btn-EoHtfv"
            href=https://jimeng.jianying.com/ai-tool/login><svg xmlns=http://www.w3.org/2000/svg width=18 height=18
              fill=currentColor viewBox="0 0 18 18">
              <path fill-rule=evenodd
                d="M10.921 4.229a4 4 0 0 0-.198.007l-.054-.004a.19.19 0 0 1-.142-.136l-.002-.008a.2.2 0 0 1 .08-.22c.947-.633 1.301-1.48 1.062-2.963a.12.12 0 0 1 .08-.136.115.115 0 0 1 .141.064c.603 1.365 1.398 1.84 2.526 1.8a.19.19 0 0 1 .185.134l.002.007a.2.2 0 0 1-.04.193l-.053.043q-.081.051-.161.107c-.337.202-.948.476-1.667.71s-1.373.37-1.759.402M4.07 13.088q-.301.002-.595.02a2 2 0 0 1-.162-.01.57.57 0 0 1-.425-.41l-.007-.022a.6.6 0 0 1 .24-.66c2.842-1.9 3.903-4.44 3.186-8.89a.366.366 0 0 1 .243-.409.344.344 0 0 1 .421.194c1.81 4.094 4.194 5.517 7.577 5.4.25-.01.476.155.554.4l.007.023a.6.6 0 0 1-.12.578q-.07.06-.158.128-.244.154-.485.322c-1.01.607-2.842 1.43-5 2.13-2.16.7-4.117 1.109-5.276 1.206m5.552-.449c1.072-.35 2.04-.787 2.854-1.247l-.002.001c-1.011 1.124-1.739 2.471-1.755 3.912a.46.46 0 0 1-.312.436.44.44 0 0 1-.498-.18c-.805-1.195-2.117-1.894-3.545-2.228.987-.1 2.108-.32 3.258-.694m4.101-8.976a5.287 5.287 0 0 1-2.037.647c.476.112.913.345 1.181.743.038.055.104.08.166.06a.15.15 0 0 0 .105-.145c.005-.48.248-.93.585-1.304"
                clip-rule=evenodd></path>
            </svg><span @click="handleCreate">立即创作</span></a></div>
      </div>
      <div class=tab-hNTmV4>
        <div class="tab-item-MBIsXG tab-item-active-bGPvXj">多图层编辑</div>
        <div class=tab-item-MBIsXG>精细化控制</div>
      </div>
      <div class=board-wrapper-yfyaLu>
        <div class=board-vFBptQ><img loading=lazy src="../assets/260674ecec39bf0c4238d58daf89c646.png"
            class=board-bg-azKUFV alt=智能画布-背景板>
          <div class=board-border-wrapper-BH6PDm><img loading=lazy src=../assets/3bc0119d351e4b3532a09c3961e5e99a.png
              class="board-border-B1tKEB board-border-active-HRgReR" alt=智能画布-多图层编辑-操作区域><img loading=lazy
              src="../assets/d61bb4677a049b8109d3c3c943f57fe1.png" class=board-border-B1tKEB alt=智能画布-精细化控制-操作区域></div>
          <div class=board-main-wrapper-Iazk5O><video poster=../assets/bdf9ec510322415730f32184943bd0b5.jpg
              class="board-main-XEqPHG board-main-active-ylZl_3" preload=auto width=100% height=100% playsinline muted
              loop>
              <track kind=caption>
            </video><a
              href=https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/growth/jimeng/landing_page/static/media/1.main.f33a0ef8.mp4
              target=_blank
              style="z-index:2147483647!important;position:absolute!important;top:8px!important;left:8px!important;width:16px!important;height:16px!important;min-width:16px!important;min-height:16px!important;max-width:16px!important;max-height:16px!important"><img
                src=../assets/fe18703bc2f2e2198248c1e3a821b045.png
                style="width:16px!important;height:16px!important;min-width:16px!important;min-height:16px!important;max-width:16px!important;max-height:16px!important"></a><video
              poster="../assets/c5c7eb777d4dc9fc074ecc290cc07123.jpg" class=board-main-XEqPHG preload=auto width=100%
              height=100% playsinline muted loop>
              <track kind=caption>
            </video><a
              href=https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/growth/jimeng/landing_page/static/media/2.main.a4fb2911.mp4
              target=_blank
              style="z-index:2147483647!important;position:absolute!important;top:8px!important;left:8px!important;width:16px!important;height:16px!important;min-width:16px!important;min-height:16px!important;max-width:16px!important;max-height:16px!important"><img
                src=../assets/fe18703bc2f2e2198248c1e3a821b045.png
                style="width:16px!important;height:16px!important;min-width:16px!important;min-height:16px!important;max-width:16px!important;max-height:16px!important"></a>
          </div>
        </div>
      </div>
      <div class="static-e5w9sH sf-hidden"></div>
    </section> -->
    <section class=box-u5bhZT>
      <div class=main-whiUyf>
        <h2 class=title-lyHCac>创意涌动 灵感绽放</h2>
        <div class=desc-VYvN1G>相同故事不同创意</div>
        <a class="btn-EoHtfv" @click="handleCreate">
          <span>立即创作</span></a>
      </div>
      <div class=animate-box-tJU6nw>
        <div><a
            class="box-T63Hos fifth-gli-0-0 animate-box-col-item-ZEEtY9"
            style=opacity:1;transform:none;will-change:auto><img src="../assets/home-banner7.jpeg" loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src="../assets/bba253381c98b6b9d5f9756f20609860.png"
                  class=info-user-avatar-oqMcG_ alt=🍰Berry-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>🍰Berry</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>16</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a><a

            class="box-T63Hos fifth-gli-0-1 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner8.jpeg"
              alt=盒饭饭喜欢吃丸子的作品 loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src="../assets/home-banner8.jpeg"
                  class=info-user-avatar-oqMcG_ alt=盒饭饭喜欢吃丸子-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>盒饭饭喜欢吃丸子</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>26</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a></div>
        <div><a
            class="box-T63Hos fifth-gli-0-2 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner9.jpeg"
              alt=小树树爱世界！的作品 loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src="../assets/aff6013bfae6bbb6c2f0b95fdd897ee4.png"
                  class=info-user-avatar-oqMcG_ alt=小树树爱世界！-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>小树树爱世界！</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>56</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a></div>
        <div><a
            class="box-T63Hos fifth-gli-0-3 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner10.jpeg"
              alt=晓梦的作品 loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src="../assets/0c030e5c6cdd41697fd23f9abc4461ba.png"
                  class=info-user-avatar-oqMcG_ alt=晓梦-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>晓梦</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>35</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a></div>
        <div><a
            class="box-T63Hos fifth-gli-0-4 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner11.jpeg"
              alt=公主的作品 loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src=../assets/d397a8c8cee1d176b3e7002ba592fb7f.png
                  class=info-user-avatar-oqMcG_ alt=公主-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>公主</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>34</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a><a
            class="box-T63Hos fifth-gli-0-5 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner12.jpeg"
              alt=塔尼雅的作品 loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src="../assets/1d246226398958ee3404c4f3349fc162.png"
                  class=info-user-avatar-oqMcG_ alt=塔尼雅-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>塔尼雅</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>10</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a></div>
        <div><a
            class="box-T63Hos fifth-gli-0-6 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner13.jpeg"
              alt="不吃草的 花牛的作品" loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src="../assets/8b362aff3c866a4ae5de60c176e45442.png"
                  class=info-user-avatar-oqMcG_ alt="不吃草的 花牛-avatar" loading=lazy>
                <div class=info-user-username-qTlg_K>不吃草的 花牛</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>25</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a></div>
        <div><a
            class="box-T63Hos fifth-gli-0-7 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner14.jpeg"
              alt=水水的作品 loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src=../assets/188a11e0382cd013ad100c12c31baed7.png
                  class=info-user-avatar-oqMcG_ alt=水水-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>水水</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>19</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a><a
            class="box-T63Hos fifth-gli-0-8 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner15.jpeg"
              alt=晗槑槑的作品 loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src="../assets/a18a8ebdaf49a5cbe3bb47c05f4716a8.png"
                  class=info-user-avatar-oqMcG_ alt=晗槑槑-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>晗槑槑</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>17</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a></div>
        <div><a
            class="box-T63Hos fifth-gli-0-9 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner16.jpeg"
              alt=🍰Berry的作品 loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src="../assets/bba253381c98b6b9d5f9756f20609860.png"
                  class=info-user-avatar-oqMcG_ alt=🍰Berry-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>🍰Berry</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>10</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a><a
            class="box-T63Hos fifth-gli-0-10 animate-box-col-item-ZEEtY9"
            style="opacity:1;transform:none;will-change:auto"><img src="../assets/home-banner2.jpeg"
              alt=檬檬的作品 loading=lazy class=img-ereslv>
            <div class=info-HRkDXz>
              <div class=info-user-grfmwA><img src="../assets/89bdb0eece32df4c4ff7a9da59a1d5db.png"
                  class=info-user-avatar-oqMcG_ alt=檬檬-avatar loading=lazy>
                <div class=info-user-username-qTlg_K>檬檬</div>
              </div>
              <div class=info-like-zNGxJT><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=currentColor
                  viewBox="0 0 16 16">
                  <path fill-rule=evenodd
                    d="m2.267 7.555.002.006c.158.407.371.806.622 1.193 1.252 1.929 3.455 3.544 4.512 4.252a1.07 1.07 0 0 0 1.198 0c1.057-.708 3.26-2.323 4.512-4.252.25-.387.464-.786.622-1.193l.002-.006v-.001h-.002v-.001l.002-.005a3.6 3.6 0 0 0 .265-1.358 3.6 3.6 0 0 0-6-2.683 3.6 3.6 0 0 0-5.733 4.047h-.002m1.22-.192c.41.896 1.169 1.81 2.049 2.64a20 20 0 0 0 2.466 1.96 20 20 0 0 0 2.466-1.96c.88-.83 1.638-1.743 2.048-2.64l.108-.264A2.4 2.4 0 0 0 8.802 4.4l-.8.716-.8-.716A2.4 2.4 0 0 0 3.38 7.099z"
                    clip-rule=evenodd></path>
                </svg><span>5</span></div>
            </div>
            <div class=mask-HMWAaq>
              <div>创作同款</div><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 fill=none viewBox="0 0 16 16">
                <path fill=#E0F5FF fill-opacity=0.85
                  d="M7.738 3.2c.458 1.39 2.452 3.631 3.67 4.4H2.4v.8h9.008c-1.218.767-3.212 3.008-3.67 4.4h.85c.594-1.552 2.939-3.826 4.55-4.322l.196-.06V7.58l-.197-.06c-1.61-.496-3.955-2.771-4.55-4.322z">
                </path>
              </svg>
            </div>
          </a></div>
      </div>
    </section>
    <section class=box-aQs010><img class=icon-SyMPuO src=../assets/logo.png alt=历史漫绘
        loading=lazy>
         <a class="btn-EoHtfv" @click="handleCreate">
          <span>开启智能创作</span></a>
    </section>
    <section class=footer-container_b27af>
      <!-- <div class="links-wrapper_b27af nav-wrapper_b27af"><span><a
            class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af" >文生图</a></span><span><a
            class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af">视频生成</a></span><span><a
            class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af" >智能画布</a></span><span><a
            class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af" >探索</a></span><span><a
            class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af">未来影像计划</a></span></div> -->
      <div class="links-wrapper_b27af privacy-wrapper_b27af">
        <div class=anchor-wrapper_b27af>
          <!-- <div class=inner-wrapper_b27af><a
              class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af small_b27af"
              aria-label=历史漫绘-营业执照 >营业执照</a><span
              class="divider_b27af small_b27af"></span><a
              class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af small_b27af"
              aria-label=历史漫绘-用户协议>用户协议</a><span
              class="divider_b27af small_b27af"></span><a
              class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af small_b27af"
              aria-label=历史漫绘-隐私政策 >隐私政策</a>
          </div> -->
          <div class="inner-wrapper_b27af company-wrapper_b27af">
            <div class=icp-wrapper_b27af><span class="divider_b27af small_b27af"></span>
              <a
                class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af small_b27af"
                aria-label="历史漫绘-京ICP备2024090455号" target="_blank" rel="noopener;noreferrer"
                 >京ICP备2024090455号</a>
                <span class="divider_b27af small_b27af"></span>
                <a class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af small_b27af"
                 target=_blank rel=noopener;noreferrer
                >粤B2-20190879</a>
            </div>
            <div class=icp2_b27af><span class="divider_b27af small_b27af"></span><a
                class="jimeng-link jimeng-link-theme-black jimeng-link-underline link_b27af small_b27af link-icon-anchor_b27af"
                aria-label=历史漫绘-京ICP备2024090455号-2 target=_blank rel=noopener;noreferrer
                ><img class=link-icon_b27af
                  src="../assets/eeae7db8a09c133147bbdec1a5ed50ef.png" width=12 height=13 alt=公安图标>京ICP备2024090455号-2</a>
            </div>
          </div>
        </div>
        <div class="inner-wrapper_b27af privacy-text-wrapper_b27af"><span class="divider_b27af small_b27af"></span><span
            class="link_b27af small_b27af text_b27af">北京阿班智能科技有限公司</span><span
            class="divider_b27af small_b27af"></span>
            <!-- <span
            class="link_b27af small_b27af text_b27af">深圳市南山区招商街道水湾社区太子路51号太子广场1104</span> -->
            </div>
      </div>
      <!-- <div class=social-wrapper_b27af><a class="jimeng-link jimeng-link-theme-black social_b27af"
          aria-label=历史漫绘-undefined target=_blank
         ><svg
            xmlns=http://www.w3.org/2000/svg width=1em height=1em viewBox="0 0 20 20">
            <path fill-rule=evenodd
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m5.57-13.22v.471l-.001.001V8.9a5.26 5.26 0 0 1-3.006-.919 468 468 0 0 0 .015 4.062c.002.13.004.26-.006.388a4.1 4.1 0 0 1-.584 1.818 4.1 4.1 0 0 1-1.126 1.237 3.74 3.74 0 0 1-2.072.684 4.7 4.7 0 0 1-1.12-.087 4 4 0 0 1-1.448-.61l-.03-.026a3.89 3.89 0 0 1-1.61-2.393 3.8 3.8 0 0 1 .504-2.819c.334-.53.79-.975 1.329-1.296a4.08 4.08 0 0 1 2.645-.54q0 .082-.002.166c-.001.11-.003.22.002.331.008.15.007.3.006.453l-.001.164v1.06a1.6 1.6 0 0 0-.862-.026 2.24 2.24 0 0 0-.926.432 1.55 1.55 0 0 0-.396.48 1.77 1.77 0 0 0-.188 1.015c.042.341.188.66.418.916q.241.265.553.442a1.84 1.84 0 0 0 2.443-.699c.15-.26.23-.552.235-.85V6.906q.008-1.19.005-2.38v-.7h2.185q-.002.274.049.54h.012q.096.452.316.856c.22.428.555.787.966 1.038a.3.3 0 0 1 .065.059c.49.3 1.054.46 1.63.462"
              clip-rule=evenodd></path>
          </svg></a><a class="jimeng-link jimeng-link-theme-black social_b27af" aria-label=历史漫绘-B站空间 target=_blank
         ><svg
            xmlns=http://www.w3.org/2000/svg width=1em height=1em viewBox="0 0 20 20">
            <path fill-rule=evenodd
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m-2.45-4.844h4.92l-.028.007v.171c0 .178.064.343.193.471a.65.65 0 0 0 .47.193.65.65 0 0 0 .472-.193.65.65 0 0 0 .193-.471v-.164h.321c1.193 0 2.157-.886 2.157-1.978v-5.22a1.83 1.83 0 0 0-.55-1.335c-.4-.414-.986-.65-1.593-.65h-2.377l1.27-1.135q.354-.312.044-.657c-.207-.236-.429-.25-.657-.043l-2.042 1.821h-.686l-2.042-1.82c-.236-.2-.45-.186-.657.042-.2.236-.186.45.043.657L8.258 5.98H5.894c-1.192 0-2.156.886-2.156 1.978v5.22c0 1.092.964 1.977 2.156 1.977h.329v.165a.63.63 0 0 0 .192.47.68.68 0 0 0 .472.194.65.65 0 0 0 .47-.193.65.65 0 0 0 .194-.471zm3.435-2.378a.44.44 0 0 1-.278.093.45.45 0 0 1-.357-.179l-.372-.457-.378.45a.47.47 0 0 1-.65.057l-.514-.428a.28.28 0 0 1-.1-.257.26.26 0 0 1 .172-.207.27.27 0 0 1 .27.05l.458.378.393-.464a.45.45 0 0 1 .357-.164c.142 0 .27.064.357.17l.385.472.529-.393a.26.26 0 0 1 .285-.05c.1.036.164.122.172.229 0 .107-.043.207-.136.257zM8.722 9.322a.416.416 0 0 1-.322.5s-2.092.47-2.085.47a.413.413 0 0 1-.5-.32.413.413 0 0 1 .322-.5l2.078-.479a.45.45 0 0 1 .321.057q.152.1.186.272m4.977.978-2.078-.478a.466.466 0 0 1-.343-.507.44.44 0 0 1 .186-.272.4.4 0 0 1 .32-.057l2.079.479a.424.424 0 0 1 .235.7.43.43 0 0 1-.4.135"
              clip-rule=evenodd></path>
          </svg></a><a class="jimeng-link jimeng-link-theme-black social_b27af" aria-label=历史漫绘-小红书主页 target=_blank
         ><svg xmlns=http://www.w3.org/2000/svg
            width=1em height=1em viewBox="0 0 20 20">
            <path fill-rule=evenodd
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10M3.357 8.308H2.294c-.124 2.485-.248 2.603-.248 2.602l.541 1.18c.464-.534.58-1.376.614-1.689.032-.312.156-2.093.156-2.093m1.79-1.413H4.079l-.027 4.685v-.004.001c-.003.011-.013.078-.072.078h-.69l.468.927h.573c.6.01.818-.765.818-.765zM8.897 8.07l.539-1.218H8.417s-.609 1.338-.852 1.843.252.609.252.609l.548-.01s-.322.757-.54 1.236c-.217.478.314.556.314.556h1.22l.37-.87h-.556c-.147 0-.07-.217-.07-.217l.749-1.677s-.739.008-.896 0c-.156-.01-.06-.252-.06-.252m-1.983.226H5.861s.031.638.139 1.883c.13 1.508.626 1.882.626 1.882l.537-1.212c-.11-.01-.25-2.553-.25-2.553m1.183 3.225c-.4 0-.435-.095-.435-.095l-.498 1.034c-.01.122.367.113.367.113h1.296l.487-1.052zm4.513-3.216V7.25h-2.435l.026 1.036.635.008-.017 3.235h-.905l-.46 1.043h3.521v-1.052h-1.026V8.304zm5.386 3.347v-1.478c0-.878-.932-.913-.932-.913h-.27v-.974c.01-.895-1.077-1.035-1.077-1.035h-.67v-.408h-1.043l.017.408h-.739v1.035h.713v.983h-1.079v1.051l1.078.01v2.242h1.052v-2.25h1.678c.226 0 .243.225.243.225s.057.615.042.878c-.016.26-.207.243-.207.243h-.87l.418.905h.791c.923 0 .855-.922.855-.922m-2.228-3.273v.87h-.739v-.949h.631c.122 0 .108.079.108.079M17 8.268h.5c.275 0 .5-.225.5-.5s-.225-.5-.5-.5-.5.225-.5.5z"
              clip-rule=evenodd></path>
          </svg></a><span class=social_b27af><svg xmlns=http://www.w3.org/2000/svg width=1em height=1em
            viewBox="0 0 20 20">
            <path fill-rule=evenodd
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m2.955-12.335a4 4 0 0 0-.478-.03c-2.353 0-4.212 1.758-4.213 3.922 0 .362.057.708.154 1.04a6 6 0 0 1-.462.018c-.518 0-.95-.088-1.441-.188l-.295-.06-1.732.869.495-1.49C3.743 10.877 3 9.76 3 8.399c0-2.358 2.232-4.214 4.956-4.214 2.436 0 4.57 1.484 5 3.48m-2.521-.754c0-.373-.246-.619-.62-.619-.372 0-.744.245-.744.62 0 .37.373.619.743.619.375 0 .62-.249.62-.62m-4.835 0c0 .371.375.62.747.62.371 0 .618-.249.618-.62 0-.374-.247-.619-.618-.619-.372 0-.747.246-.747.62m7.192.991c2.227 0 4.21 1.615 4.21 3.596 0 1.117-.742 2.107-1.737 2.854l.372 1.24-1.358-.746c-.496.124-.994.247-1.487.247-2.357 0-4.214-1.609-4.214-3.595 0-1.98 1.856-3.596 4.214-3.596m-1.862 2.48c0 .25.25.495.495.495.376 0 .62-.245.62-.495 0-.246-.244-.495-.62-.495-.246 0-.495.248-.495.495m2.728 0c0 .25.249.495.493.495.373 0 .62-.245.62-.495 0-.246-.247-.495-.62-.495-.245 0-.493.248-.493.495"
              clip-rule=evenodd></path>
          </svg></span><span class=social_b27af><svg xmlns=http://www.w3.org/2000/svg width=1em height=1em
            viewBox="0 0 20 20">
            <path fill-rule=evenodd
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m5.46-15.87a1.6 1.6 0 0 0-.58-.112c-.848 0-1.528.65-1.952 1.145-.51.595-1.032 1.358-1.627 2.25a67 67 0 0 1-.85 1.245c-.169.24-.325.467-.466.694a16 16 0 0 0-.465-.694l-.43-.62-.42-.625c-.595-.89-1.118-1.67-1.628-2.25-.425-.496-1.102-1.145-1.952-1.145-.196 0-.396.042-.579.112-.34.128-.807.424-1.062 1.133-.142.409-.211.905-.198 1.541.028 1.076.27 2.448.538 3.863.298 1.556.552 2.588.849 3.351.197.525.41.922.65 1.205.44.523.906.636 1.23.636.221 0 .44-.048.638-.142.17-.07.708-.325 1.812-2.108q.576-.922 1.032-1.91.458.987 1.032 1.91c1.054 1.726 1.606 2.006 1.793 2.1l.018.01c.199.093.416.14.636.14.326 0 .793-.114 1.232-.636.28-.364.499-.77.65-1.204.297-.765.552-1.796.849-3.352.269-1.415.524-2.787.537-3.863.015-.636-.043-1.132-.225-1.543-.255-.706-.722-1.003-1.062-1.13M5.077 5.588c.013-.014.027-.014.042-.014.042 0 .268.028.792.622.453.51.948 1.245 1.515 2.094q.197.282.399.583.164.245.336.492a2 2 0 0 1 .127.184q.235.305.424.638c.068.111.108.197.136.255l.02.041c-.227.594-.665 1.457-1.145 2.25-.638 1.046-1.035 1.471-1.176 1.584-.084-.085-.297-.339-.552-1.104-.225-.65-.438-1.54-.678-2.815-.255-1.359-.495-2.646-.51-3.609 0-.438.03-.763.114-.99.066-.169.12-.194.149-.208zm9.04.594c.523-.594.75-.623.797-.623a.1.1 0 0 1 .037.015l.008.003c.03.014.084.037.162.181.085.226.127.551.113.99-.029.96-.254 2.25-.509 3.607-.24 1.26-.452 2.165-.68 2.816-.254.778-.466 1.034-.551 1.104-.141-.116-.538-.538-1.174-1.585-.481-.793-.92-1.655-1.147-2.25a1.5 1.5 0 0 1 .157-.297 7 7 0 0 1 .384-.573q.014-.018.026-.037l.126-.181c.253-.366.493-.718.731-1.068l.006-.008c.567-.85 1.061-1.584 1.513-2.094"
              clip-rule=evenodd></path>
          </svg></span></div> -->
    </section>
  </div>
</template>



<style lang="scss" scoped></style>
<style>
:root {
  --sf-img-0: url("../assets/d61bb4677a049b8109d3c3c943f57fe1.png")
}
</style>
<style>
a,
body,
canvas,
div,
h1,
h2,
h3,
html,
img,
p,
section,
span,
video {
  border: 0;
  box-sizing: border-box;
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  vertical-align: baseline
}

section {
  display: block
}

html {
  margin: 0;
  padding: 0
}

p {
  margin: 0
}

a {
  color: inherit;
  text-decoration: none
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box
}

* ::-webkit-scrollbar {
  display: none
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

body,
html {
  cursor: -webkit-image-set(var(--sf-img-0) 1x, var(--sf-img-1) 2x)4 0, auto;
  cursor: image-set(var(--sf-img-0) 1x, var(--sf-img-1) 2x)4 0, auto;
  font-family: Albert Sans, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif !important
}
</style>

<style>



.box-aQs010 {
  align-items: center;
  background-color: #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 120px 0 120px;
  position: relative
}

.icon-SyMPuO {
  height: 100px;
  width: 300px;
  object-fit: cover;
}


@media screen and (max-width:1440px) {
  .box-aQs010 {
    padding: 114px 0 120px
  }

  .icon-SyMPuO {
    height: 76px;
    width: 252px
  }
}

@media screen and (max-width:1024px) {
  .box-aQs010 {
    padding: 60px 0
  }

  .icon-SyMPuO {
    height: 40px;
    margin-bottom: 28px;
    width: 140px
  }
}

.btn-EoHtfv {
  align-items: center;
  border: 1px solid rgba(224, 245, 255, .6);
  border-radius: 8px;
  box-sizing: border-box;
  color: #ebf8ff;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  gap: 4px;
  justify-content: center;
  line-height: 20px;
  outline: none;
  padding: 19px 0;
  transition: background-color .3s ease-in-out, color .3s ease-in-out;
  width: 300px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

.btn-EoHtfv>* {
  pointer-events: none
}

@media (hover:hover) and (pointer:fine) {
  .btn-EoHtfv:hover {
    background-color: #ebf8ff;
    color: #1d2129
  }
}

@media screen and (max-width:1440px) {
  .btn-EoHtfv {
    width: 270px
  }
}

@media screen and (max-width:1024px) {
  .btn-EoHtfv {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    padding: 11px 0;
    width: 200px
  }
}

.box-OEFnpI {
  background-color: #000;
  overflow: hidden;
  padding: 120px 0;
  position: relative
}

.box-OEFnpI,
.header-VkY2QN {
  box-sizing: border-box
}

.title-VW8Iaq {
  color: #ebf8ff;
  font-size: 54px;
  font-weight: 500;
  line-height: 64px;
  margin-bottom: 12px;
  text-align: center
}

.desc-y0bP_u {
  align-items: center;
  color: rgba(224, 245, 255, .6);
  display: flex;
  font-size: 16px;
  justify-content: center;
  line-height: 24px;
  margin-bottom: 32px;
  text-align: center
}

.desc-y0bP_u>div {
  max-width: 900px
}

.cta-btn-wrapper-C8T0Ze,
.tab-hNTmV4 {
  display: flex;
  justify-content: center
}

.tab-hNTmV4 {
  margin-top: 60px
}

.tab-item-MBIsXG {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  color: rgba(224, 245, 255, .6);
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  padding: 0 24px 8px;
  position: relative;
  transition: color .3s ease-in-out
}

.tab-item-MBIsXG:after {
  background-color: #00cae0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  opacity: 0;
  position: absolute;
  transform: translateX(-50%);
  transition: opacity .3s ease-in-out;
  width: 24px
}

.tab-item-active-bGPvXj {
  color: #00cae0;
  font-weight: 500
}

.tab-item-active-bGPvXj:after {
  opacity: 1
}

@media (hover:hover) and (pointer:fine) {
  .tab-item-MBIsXG:hover {
    color: #00cae0
  }
}

.board-wrapper-yfyaLu {
  display: flex;
  justify-content: center
}

.board-vFBptQ {
  height: 648px;
  position: relative;
  width: 1200px
}

.board-bg-azKUFV {
  height: 100%;
  left: 0;
  object-fit: contain;
  position: absolute;
  top: 0;
  transform: scale(1);
  transition: transform .3s ease-in;
  width: 100%
}

.board-border-wrapper-BH6PDm {
  height: 105%;
  left: 0;
  position: absolute;
  top: 0;
  transform: scale(1);
  transition: transform .3s ease-in;
  width: 100%
}

.board-border-B1tKEB {
  height: 100%;
  left: 0;
  object-fit: cover;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity .2s ease-in-out;
  width: 100%
}

.board-border-active-HRgReR {
  opacity: 1
}

.board-main-wrapper-Iazk5O {
  bottom: 54px;
  height: 427px;
  left: 280px;
  position: absolute;
  transform: scale(1);
  transition: transform .4s ease-in-out;
  width: 636px
}

.board-main-XEqPHG {
  height: 100%;
  left: 0;
  object-fit: cover;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity .2s ease-in-out;
  width: 100%
}

.board-main-active-ylZl_3 {
  opacity: 1
}

@media screen and (max-width:1440px) {
  .box-OEFnpI {
    padding: 80px 0
  }

  .board-vFBptQ {
    height: 540px;
    width: 1000px
  }

  .board-border-wrapper-BH6PDm {
    height: 100%
  }

  .board-main-wrapper-Iazk5O {
    height: 355px;
    left: 233px;
    width: 536px
  }
}

@media screen and (max-width:1024px) {
  .header-VkY2QN {
    padding: 0 24px
  }

  .title-VW8Iaq {
    font-size: 32px;
    line-height: 48px
  }

  .tab-hNTmV4 {
    margin-top: 40px
  }

  .board-vFBptQ {
    height: 54.1333333333vw;
    width: 100vw
  }

  .board-main-wrapper-Iazk5O {
    bottom: 5.3333333333vw;
    height: 35.4666666667vw;
    left: 21.3333333333vw;
    width: 53.6vw
  }
}

.input-DoV4AV {
  align-items: center;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background: hsla(0, 0%, 100%, .141);
  border: 1px solid hsla(0, 0%, 100%, .078);
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 8px 8px 8px 12px;
  width: 520px
}

.text-HqXWWy {
  color: #ebf8ff;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.button-_IoMtQ {
  gap: 4px
}

.button-_IoMtQ>* {
  pointer-events: none
}

@media screen and (max-width:1024px) {

  .button-_IoMtQ,
  .text-HqXWWy {
    font-size: 12px;
    line-height: 18px
  }

  .button-_IoMtQ {
    font-weight: 400;
    gap: 2px;
    padding: 6px 10px
  }

  .icon-HfdJ8F {
    display: none
  }
}

.btn-LHv9H0>* {
  pointer-events: none
}

.box-weRFZa {
  color: #ebf8ff;
  height: 1200px;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%
}

.bg-box-iGxURO {
  background: radial-gradient(88.89% 182.5%at 69.13% 5.25%, #1375c8 0, #157acd 28.99%, #0c3560 72.78%, #060c20 100%);
  pointer-events: none;
  z-index: -1
}

.bg-box-iGxURO,
.bg-box-mask-a6jaeQ {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.bg-box-mask-a6jaeQ {
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .51))
}

.video-_dSgML {
  height: 100%;
  left: 0;
  object-fit: cover;
  /* opacity: 0; */
  position: absolute;
  top: 0;
  transition-duration: .15s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  width: 100%
}

.video-active-fDaDaY {
  opacity: 1 !important
}

.right-box-rgRoBY {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  z-index: 0
}

.right-box-item-qgzhq3 {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
  height: 20px;
  opacity: .3;
  overflow: hidden;
  transition-duration: .3s;
  transition-property: width, height, opacity;
  transition-timing-function: ease-in-out;
  width: 20px;
  background: green;
  
}
.right-box-item-qgzhq3.active {
 height: 40px;
  opacity: 1;
  width: 40px
}
.bottom-bYPxPC {
  bottom: 0;
  box-sizing: border-box;
  gap: 40px;
  left: 0;
  padding-bottom: 16px;
  position: absolute
}

.tip-q4L709 {
  color: hsla(0, 0%, 100%, .2);
  flex: 0 1;
  font-size: 12px;
  line-height: 18px
}

@media screen and (max-width:2560px) {
  .box-weRFZa {
    height: 1200px
  }
}

@media screen and (max-width:1920px) {
  .box-weRFZa {
    height: 1000px
  }
}

@media screen and (max-width:1440px) {
  .box-weRFZa {
    height: 810px
  }
}

@media screen and (max-width:1024px) {
  .box-weRFZa {
    height: 620px
  }

  .input-flrsTo,
  .right-box-rgRoBY {
    display: none
  }
}

.box-T63Hos {
  border-radius: 8px;
  box-sizing: border-box;
  display: block;
  outline: none;
  overflow: hidden;
  position: relative;
  width: 198px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

.box-T63Hos>* {
  pointer-events: none
}

.img-ereslv {
  height: 100%;
  object-fit: cover;
  width: 100%
}

.info-HRkDXz {
  background: linear-gradient(transparent, rgba(0, 0, 0, .6));
  bottom: 0;
  box-sizing: border-box;
  justify-content: space-between;
  left: 0;
  padding: 12px 16px;
  position: relative;
  transform: translateY(-100%);
  width: 100%
}

.info-HRkDXz,
.info-user-grfmwA {
  align-items: center;
  display: flex;
  flex: 1 1;
  gap: 8px
}

.info-user-grfmwA {
  justify-content: flex-start
}

.info-user-avatar-oqMcG_ {
  border-radius: 50%;
  height: 20px;
  width: 20px
}

.info-user-username-qTlg_K {
  color: rgba(224, 245, 255, .851);
  flex: 1 1;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 0
}

.info-like-zNGxJT {
  color: rgba(224, 245, 255, .851);
  flex-shrink: 0;
  font-size: 13px
}

.info-like-zNGxJT,
.mask-HMWAaq {
  align-items: center;
  display: flex;
  font-weight: 500;
  gap: 4px;
  line-height: 20px
}

.mask-HMWAaq {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, .302);
  border-radius: 8px;
  color: #ebf8ff;
  cursor: pointer;
  font-size: 14px;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: opacity .2s ease-in-out;
  width: 100%
}

@media screen and (max-width:1024px) {
  .box-T63Hos {
    width: 123px
  }

  .info-HRkDXz {
    padding: 12px 8px
  }

  .info-user-grfmwA {
    gap: 4px
  }

  .info-user-avatar-oqMcG_ {
    height: 14px;
    width: 14px
  }

  .info-like-zNGxJT {
    font-size: 12px;
    transform: scale(.8)
  }
}

@media (hover:hover) and (pointer:fine) {
  .box-T63Hos:hover .mask-HMWAaq {
    opacity: 1
  }
}

.box-u5bhZT {
  background-color: #111318;
  box-sizing: border-box;
  padding-top: 120px;
  position: relative
}

.main-whiUyf {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center
}

.title-lyHCac {
  color: #ebf8ff;
  font-size: 54px;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center
}

.desc-VYvN1G {
  color: rgba(224, 245, 255, .6);
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
  text-align: center
}

.animate-box-tJU6nw {
  align-items: flex-end;
  background-color: transparent;
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: -168px;
  overflow: hidden;
  width: 100%;
  --fifth-item-height-0-0: 356px;
  --fifth-item-height-0-1: 235px;
  --fifth-item-height-0-2: 440px;
  --fifth-item-height-0-3: 366px;
  --fifth-item-height-0-4: 120px;
  --fifth-item-height-0-5: 129px;
  --fifth-item-height-0-6: 366px;
  --fifth-item-height-0-7: 264px;
  --fifth-item-height-0-8: 162px;
  --fifth-item-height-0-9: 420px;
  --fifth-item-height-0-10: 174px;
  --fifth-item-height-1-0: 319px;
  --fifth-item-height-1-1: 272px;
  --fifth-item-height-1-2: 279px;
  --fifth-item-height-1-3: 174px;
  --fifth-item-height-1-4: 221px;
  --fifth-item-height-1-5: 119px;
  --fifth-item-height-1-6: 262px;
  --fifth-item-height-1-7: 237px;
  --fifth-item-height-1-8: 117px;
  --fifth-item-height-1-9: 260px;
  --fifth-item-height-1-10: 166px;
  --fifth-item-height-1-11: 376px;
  --fifth-item-height-1-12: 218px;
  --fifth-item-height-2-0: 247px;
  --fifth-item-height-2-1: 344px;
  --fifth-item-height-2-2: 317px;
  --fifth-item-height-2-3: 111px;
  --fifth-item-height-2-4: 366px;
  --fifth-item-height-2-5: 261px;
  --fifth-item-height-2-6: 237px;
  --fifth-item-height-2-7: 117px;
  --fifth-item-height-2-8: 438px;
  --fifth-item-height-2-9: 433px;
  --fifth-item-height-2-10: 161px
}

.animate-box-col-item-ZEEtY9 {
  margin-bottom: 12px
}

.animate-box-col-item-ZEEtY9:last-child {
  margin-bottom: 0
}

.animate-box-tJU6nw .fifth-gli-0-0 {
  height: var(--fifth-item-height-0-0) !important
}

.animate-box-tJU6nw .fifth-gli-0-1 {
  height: var(--fifth-item-height-0-1) !important
}

.animate-box-tJU6nw .fifth-gli-0-2 {
  height: var(--fifth-item-height-0-2) !important
}

.animate-box-tJU6nw .fifth-gli-0-3 {
  height: var(--fifth-item-height-0-3) !important
}

.animate-box-tJU6nw .fifth-gli-0-4 {
  height: var(--fifth-item-height-0-4) !important
}

.animate-box-tJU6nw .fifth-gli-0-5 {
  height: var(--fifth-item-height-0-5) !important
}

.animate-box-tJU6nw .fifth-gli-0-6 {
  height: var(--fifth-item-height-0-6) !important
}

.animate-box-tJU6nw .fifth-gli-0-7 {
  height: var(--fifth-item-height-0-7) !important
}

.animate-box-tJU6nw .fifth-gli-0-8 {
  height: var(--fifth-item-height-0-8) !important
}

.animate-box-tJU6nw .fifth-gli-0-9 {
  height: var(--fifth-item-height-0-9) !important
}

.animate-box-tJU6nw .fifth-gli-0-10 {
  height: var(--fifth-item-height-0-10) !important
}

@media screen and (max-width:1440px) {
  .box-u5bhZT {
    padding-top: 80px
  }

  .title-lyHCac {
    font-size: 48px
  }
}

@media screen and (max-width:1024px) {
  .animate-box-tJU6nw {
    gap: 8px;
    margin-top: -100px;
    --fifth-item-height-0-0: 221.076px;
    --fifth-item-height-0-1: 145.935px;
    --fifth-item-height-0-2: 273.24px;
    --fifth-item-height-0-3: 227.286px;
    --fifth-item-height-0-4: 74.52px;
    --fifth-item-height-0-5: 80.109px;
    --fifth-item-height-0-6: 227.286px;
    --fifth-item-height-0-7: 163.944px;
    --fifth-item-height-0-8: 100.602px;
    --fifth-item-height-0-9: 260.82px;
    --fifth-item-height-0-10: 108.054px;
    --fifth-item-height-1-0: 198.099px;
    --fifth-item-height-1-1: 168.912px;
    --fifth-item-height-1-2: 173.259px;
    --fifth-item-height-1-3: 108.054px;
    --fifth-item-height-1-4: 137.241px;
    --fifth-item-height-1-5: 73.899px;
    --fifth-item-height-1-6: 162.702px;
    --fifth-item-height-1-7: 147.177px;
    --fifth-item-height-1-8: 72.657px;
    --fifth-item-height-1-9: 161.46px;
    --fifth-item-height-1-10: 103.086px;
    --fifth-item-height-1-11: 233.496px;
    --fifth-item-height-1-12: 135.378px;
    --fifth-item-height-2-0: 153.387px;
    --fifth-item-height-2-1: 213.624px;
    --fifth-item-height-2-2: 196.857px;
    --fifth-item-height-2-3: 68.931px;
    --fifth-item-height-2-4: 227.286px;
    --fifth-item-height-2-5: 162.081px;
    --fifth-item-height-2-6: 147.177px;
    --fifth-item-height-2-7: 72.657px;
    --fifth-item-height-2-8: 271.998px;
    --fifth-item-height-2-9: 268.893px;
    --fifth-item-height-2-10: 99.981px
  }

  .animate-box-col-item-ZEEtY9 {
    margin-bottom: 10px
  }

  .animate-box-col-item-ZEEtY9:last-child {
    margin-bottom: 0
  }

  .main-whiUyf {
    padding: 0 24px
  }

  .title-lyHCac {
    font-size: 32px
  }

  .desc-VYvN1G {
    margin-bottom: 24px;
    max-width: 550px
  }
}

.scroll-box-GKIdsN {
  background-color: #111318;
  color: #ebf8ff;
  position: relative
}

.box-JJ9yeN,
.scroll-box-GKIdsN {
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content
}

.box-JJ9yeN {
  left: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%
}

.header-A6lXCo {
  display: flex;
  gap: 180px;
  justify-content: center;
  padding: 120px 68px 80px
}

.header-wrapper-H8cAcb {
  box-sizing: border-box;
  display: flex;
  flex: 1 1;
  justify-content: space-between;
  max-width: 1200px
}

.header-left-rcmLJe {
  color: rgba(224, 245, 255, .851);
  display: flex;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 300;
  gap: 4px;
  line-height: 20px
}

.header-right-Qj0MQu {
  max-width: 714px
}

.header-right-title-wwVbiL {
  color: #ebf8ff;
  display: inline-block;
  font-size: 54px;
  font-weight: 500;
  line-height: 64px;
  margin-bottom: 10px
}

.header-right-text-_sJ2oa {
  color: rgba(224, 245, 255, .6);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 815px
}

.swiper-ZMH7zV {
  height: 563px;
  overflow-x: auto;
  width: 100%
}

.swiper-scroll-YOzToa {
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
  height: 100%;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content
}

.swiper-item-O8OmVh {
  flex: 0 0 1000px;
  height: 100%;
  position: relative;
  width: 1000px
}

.swiper-item-img-MKsgw0 {
  height: 100%;
  object-fit: cover;
  width: 100%
}

.swiper-item-O8OmVh .input-AGWlqC {
  bottom: 48px;
  left: 50%;
  opacity: 0;
  position: absolute;
  transform: translateX(-50%);
  transition: opacity .3s ease-in-out
}

.swiper-ZMH7zV {
  -webkit-scroll-snap-type: x mandatory;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none
}

.swiper-ZMH7zV::-webkit-scrollbar {
  display: none
}

@media screen and (max-width:1440px) {
  .swiper-ZMH7zV {
    height: 450px
  }

  .swiper-item-O8OmVh {
    flex: 0 0 800px;
    width: 800px
  }
}

@media screen and (max-width:1024px) {
  .scroll-box-GKIdsN {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content
  }

  .swiper-scroll-YOzToa {
    animation: none
  }

  .swiper-ZMH7zV {
    -ms-overflow-style: none;
    height: 198px;
    overflow-x: auto;
    -webkit-scroll-snap-type: x mandatory;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    scrollbar-width: none
  }

  .swiper-ZMH7zV::-webkit-scrollbar {
    display: none
  }

  .swiper-scroll-YOzToa {
    gap: 12px
  }

  .swiper-item-O8OmVh {
    flex: 0 0 352px;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    width: 352px
  }

  .input-AGWlqC {
    display: none
  }

  .header-A6lXCo {
    gap: 24px;
    padding: 80px 24px 40px
  }

  .header-A6lXCo,
  .header-wrapper-H8cAcb {
    align-items: center;
    flex-direction: column
  }

  .header-wrapper-H8cAcb {
    display: flex;
    justify-content: center
  }

  .header-left-rcmLJe {
    margin-bottom: 24px
  }

  .header-right-Qj0MQu {
    align-items: center;
    display: flex;
    flex-direction: column
  }

  .header-right-title-wwVbiL {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 12px
  }

  .header-right-text-_sJ2oa {
    font-weight: 400;
    text-align: center;
    text-wrap: pretty
  }
}

@media (hover:hover) and (pointer:fine) {
  .swiper-item-O8OmVh:hover .input-AGWlqC {
    opacity: 1
  }
}

.placeholder-RiOie5 {
  left: 0;
  position: absolute;
  top: 0;
  transition: opacity .3s ease-in-out
}

.canvas-ZaQYjd {
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s ease-in-out
}

.box-nt966n {
  align-items: flex-start;
  display: flex;
  justify-content: center
}

.box-nt966n .media-wrapper-mac_RP {
  padding-bottom: 100px
}

.box-nt966n:last-child .media-wrapper-mac_RP {
  padding-bottom: 189px
}

.left-wrapper-_KDFs8 {
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding-right: var(--second-l-padding-right);
  width: var(--second-l-wrapper-width)
}

.info-WFSzvO {
  margin-bottom: 48px;
  width: 329px
}

.title-ITEvEZ {
  color: #ebf8ff;
  font-size: 36px;
  line-height: 50px;
  margin-bottom: 8px
}

.title-ITEvEZ>p {
  font-size: inherit;
  line-height: inherit;
  margin-bottom: 0
}

.desc-egHxcp {
  color: rgba(224, 245, 255, .851);
  font-size: 16px;
  line-height: 24px
}

.indexed-FjnNj2 {
  color: rgba(224, 245, 255, .851);
  font-size: 40px;
  font-weight: 100;
  line-height: 48px
}

.media-wrapper-mac_RP {
  box-sizing: border-box;
  flex-shrink: 0;
  padding-left: var(--second-r-padding-left);
  position: relative;
  width: var(--second-r-wrapper-width)
}

.media-wrapper-mac_RP:before {
  background-color: #e9e9e9;
  content: "";
  display: var(--second-amazing-line-display);
  height: 100%;
  left: 0;
  opacity: .2;
  position: absolute;
  top: 0;
  width: 1px
}

.glitch-wrapper-H049jO {
  height: var(--second-media-height);
  position: relative
}

.media-IWKWD4 {
  box-sizing: border-box;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  width: 100%
}

@media screen and (max-width:1440px) {
  .box-nt966n .media-wrapper-mac_RP {
    padding-bottom: 80px
  }

  .box-nt966n:last-child .media-wrapper-mac_RP {
    padding-bottom: 160px
  }

  .glitch-wrapper-H049jO {
    height: 32vw
  }

  .media-IWKWD4 {
    height: 100%
  }

  .info-WFSzvO {
    width: 270px
  }

  .title-ITEvEZ {
    font-size: 28px;
    line-height: 36px
  }

  .indexed-FjnNj2 {
    font-size: 24px;
    line-height: 32px
  }
}

@media screen and (max-width:1440px) and (min-width:1024px) {
  .media-wrapper-mac_RP {
    flex: 1 1
  }

  .media-IWKWD4 {
    min-width: var(--second-r-wrapper-width)
  }
}

@media screen and (max-width:1024px) {
  .box-nt966n {
    align-items: center;
    flex-direction: column-reverse
  }

  .box-nt966n .media-wrapper-mac_RP,
  .box-nt966n:last-child .media-wrapper-mac_RP {
    padding-bottom: 0
  }

  .info-wrapper-GtziBS {
    box-sizing: border-box;
    flex-direction: column;
    padding: 24px 24px 80px
  }

  .info-wrapper-GtziBS,
  .title-ITEvEZ {
    align-items: center;
    display: flex;
    justify-content: center
  }

  .title-ITEvEZ {
    flex-wrap: wrap;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 12px
  }

  .info-WFSzvO {
    margin-bottom: 32px;
    text-align: center;
    width: 100%
  }

  .indexed-FjnNj2 {
    display: none
  }

  .media-wrapper-mac_RP {
    max-width: var(--second-media-width);
    width: 100%
  }

  .media-IWKWD4 {
    width: 100%
  }
}

.box-WDLjs6 {
  --second-l-wrapper-width: 467px;
  --second-l-padding-right: 20px;
  --second-r-wrapper-width: 841px;
  --second-r-padding-left: 20px;
  --second-media-width: var(--second-r-wrapper-width);
  --second-media-height: 486px;
  --second-amazing-line-display: block;
 /* background-color: #004dc8;
  background-image: url(../assets/0f78492865d51594acd23c4953b826c0.jpg); */
  background: #111;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;
  padding: 151px 58px 0;
  position: relative;
  width: 100%
}

.header-tD8TNM {
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  justify-content: center
}

.header-tips-KCLXJJ {
  align-items: center;
  box-sizing: border-box;
  color: rgba(224, 245, 255, .851);
  display: flex;
  font-size: 14px;
  font-weight: 300;
  justify-content: flex-start;
  line-height: 20px;
  padding-right: var(--second-l-padding-right);
  width: var(--second-l-wrapper-width)
}

.header-right-wrapper-acr3jw {
  box-sizing: border-box;
  flex-shrink: 0;
  padding-bottom: 206px;
  padding-left: var(--second-r-padding-left);
  position: relative;
  width: var(--second-r-wrapper-width)
}

.header-right-wrapper-acr3jw:before {
  background-color: #e9e9e9;
  content: "";
  display: var(--second-amazing-line-display);
  height: 100%;
  left: 0;
  opacity: .2;
  position: absolute;
  top: 0;
  width: 1px
}

.header-title-_0vLTk {
  background: url(../assets/12bd57428557d7555b7ee8c64cc7c95a.svg)no-repeat 0/contain;
  color: transparent;
  font-size: 58px;
  line-height: 58px;
  margin-bottom: 16px;
  width: 486px
}

.header-desc-HoXsdg {
  color: #ebf8ff;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px
}

@media screen and (max-width:1440px) {
  .box-WDLjs6 {
    --second-r-wrapper-width: 591px;
    --second-media-height: 326px;
    padding: 151px 0 0 58px
  }

  .header-right-wrapper-acr3jw {
    padding-bottom: 160px
  }

  .header-title-_0vLTk {
    margin-bottom: 24px
  }

  .header-desc-HoXsdg {
    font-size: 18px;
    font-weight: 300;
    line-height: 28px
  }
}

@media screen and (max-width:1440px) and (min-width:1024px) {
  .header-right-wrapper-acr3jw {
    flex: 1 1;
    min-width: var(--second-r-wrapper-width)
  }
}

@media screen and (max-width:1024px) {
  .box-WDLjs6 {
    --second-amazing-line-display: none;
    --second-l-wrapper-width: fit-content;
    --second-l-padding-right: 0px;
    --second-r-padding-left: 0px;
    padding: 80px 0 0 0
  }

  .header-tD8TNM {
    padding: 0 24px 40px
  }

  .header-right-wrapper-acr3jw,
  .header-tD8TNM {
    align-items: center;
    flex-direction: column;
    justify-content: center
  }

  .header-right-wrapper-acr3jw {
    display: flex;
    padding-bottom: 0;
    width: 100%
  }

  .header-tips-KCLXJJ {
    margin-bottom: 24px
  }

  .header-title-_0vLTk {
    font-size: 29px;
    line-height: 29px;
    margin-bottom: 12px;
    text-align: center;
    width: 214px
  }

  .header-desc-HoXsdg {
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    text-align: center
  }
}

.jimeng-button {
  align-items: center;
  border: .5px solid hsla(0, 0%, 100%, 0);
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  line-height: 20px;
  padding: 8px 16px;
  position: relative;
  transition-duration: .3s;
  transition-property: background-color, color, border, background, -webkit-backdrop-filter;
  transition-property: background-color, color, border, backdrop-filter, background;
  transition-property: background-color, color, border, backdrop-filter, background, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(.44, 0, .56, 1)
}

.jimeng-button-primary {
  background-color: #00cae0;
  border: .5px solid hsla(0, 0%, 100%, .12);
  color: #1d2129
}

.jimeng-button-primary:hover {
  background-color: #00a4c2;
  color: #1d2129
}

.jimeng-button-text {
  background-color: transparent;
  color: hsla(0, 0%, 100%, .8)
}

.jimeng-button-text:hover {
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background: hsla(0, 0%, 100%, .12);
  border: .5px solid hsla(0, 0%, 100%, .08);
  color: #fff
}

.jimeng-link {
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  transition: all .3s
}

.jimeng-link-theme-black {
  color: #3b4559
}

.jimeng-link-theme-black:hover {
  color: #1d2129
}

.jimeng-link-theme-white {
  color: rgba(224, 245, 255, .85)
}

.jimeng-link-theme-white:hover {
  color: #ebf8ff
}

.jimeng-link-underline:hover {
  text-decoration: underline
}

.navigation_43a49 {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 68px;
  justify-content: space-between;
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10
}

.home-logo_43a49 {
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: start;
  width: 190px
}

.home-logo-img_43a49 {
  height: 22.13px;
  width: 88px
}

.links-wrapper_43a49 {
  display: flex;
  gap: 32px;
  justify-content: space-around
}

.actions-wrapper_43a49 {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: right;
  width: 190px
}

.bg-effects_43a49 {
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  background-color: rgba(15, 17, 21, .4);
  transition: all .3s cubic-bezier(.44, 0, .56, 1)
}

@media screen and (max-width:1024px) {

  .actions-wrapper_43a49,
  .links-wrapper_43a49 {
    display: none
  }
}

@media screen and (min-width:1024px) {

  .actions-wrapper_43a49,
  .links-wrapper_43a49 {
    display: flex
  }
}

.footer-container_b27af {
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  padding: 80px 24px
}

.inner-wrapper_b27af,
.links-wrapper_b27af {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center
}

.links-wrapper_b27af .small_b27af {
  font-size: 14px;
  line-height: 20px
}

.links-wrapper_b27af .text_b27af {
  color: #3b4559
}

.links-wrapper_b27af .link-icon-anchor_b27af {
  align-items: center;
  display: flex;
  justify-content: center
}

.links-wrapper_b27af .link-icon_b27af {
  height: 14px;
  margin-right: 2px;
  width: 13px
}

.nav-wrapper_b27af {
  gap: 40px
}

.nav-wrapper_b27af .link_b27af {
  font-size: 16px;
  line-height: 24px
}

.anchor-wrapper_b27af,
.icp-wrapper_b27af,
.icp2_b27af {
  align-items: center;
  display: flex;
  justify-content: center
}

.anchor-wrapper_b27af,
.icp-wrapper_b27af,
.icp2_b27af,
.inner-wrapper_b27af,
.privacy-wrapper_b27af {
  gap: 8px
}

.privacy-wrapper_b27af {
  order: 2
}

.divider_b27af {
  background-color: rgba(15, 17, 21, .2);
  box-sizing: border-box;
  display: inline-block;
  height: 12px;
  width: 1px
}

.social-wrapper_b27af {
  display: flex;
  gap: 24px;
  height: 20px;
  justify-content: center;
  order: 3
}

.social-wrapper_b27af .social_b27af {
  align-items: center;
  display: flex;
  justify-content: center;
  fill: rgba(85, 94, 112, .8);
  cursor: pointer;
  font-size: 20px
}

.social-wrapper_b27af .social_b27af:hover {
  fill: #000
}

@media screen and (max-width:1299px) {
  .privacy-wrapper_b27af {
    flex-direction: column
  }

  .privacy-text-wrapper_b27af .divider_b27af:first-child {
    display: none
  }
}

@media screen and (max-width:1023px) {
  .footer-container_b27af {
    padding: 60px 24px
  }

  .anchor-wrapper_b27af {
    flex-direction: column
  }

  .inner-wrapper_b27af .divider_b27af {
    display: block
  }

  .links-wrapper_b27af {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: flex-start
  }

  .anchor-wrapper_b27af,
  .privacy-wrapper_b27af {
    gap: 8px
  }

  .icp-wrapper_b27af .divider_b27af:first-child {
    display: none
  }

  .social-wrapper_b27af {
    order: 1
  }
}

@media screen and (max-width:750px) {

  .company-wrapper_b27af,
  .privacy-text-wrapper_b27af {
    flex-direction: column
  }

  .company-wrapper_b27af .divider_b27af:first-child,
  .icp2_b27af .divider_b27af,
  .privacy-text-wrapper_b27af .divider_b27af {
    display: none
  }

  .links-wrapper_b27af .small_b27af {
    font-size: 12px;
    line-height: 18px
  }

  .links-wrapper_b27af .link-icon_b27af {
    height: 13px;
    width: 12px
  }
}

@media screen and (max-width:290px) {
  .icp-wrapper_b27af {
    flex-direction: column
  }

  .icp-wrapper_b27af .divider_b27af {
    display: none
  }
}
</style>
