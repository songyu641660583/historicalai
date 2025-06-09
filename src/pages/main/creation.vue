<template>
  <div class="creation">
    <div class="creation-left module">
      <div class="title">文生图</div>
         <div class=form-wrapper-_4819c>
                              <form class="arco-form arco-form-horizontal arco-form-size-default">
                                <div
                                  class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal">
                                  <div class="arco-col arco-col-24 arco-form-item-wrapper">
                                    <div class=arco-form-item-control-wrapper>
                                      <div class=arco-form-item-control id=prompt>
                                        <div class=arco-form-item-control-children>
                                          <div class=prompt-container-_7730c>
                                            <div class=arco-textarea-wrapper><textarea maxlength=800
                                                class="arco-textarea input-d73634" placeholder=描述想要生成的图片，或点击下方的推荐词试试吧
                                                style="height:160px;min-height:160px;max-height:160px"></textarea><span
                                                class=arco-textarea-word-limit>0/800</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal">
                                  <div class="arco-col arco-form-label-item arco-form-label-item-left"
                                    style="flex:0 0 64px"><label for=ModelName_input> 声音模块</label></div>
                                  <div class="arco-col arco-form-item-wrapper" style="flex:1 1 0%">
                                    <div class=arco-form-item-control-wrapper>
                                      <div class=arco-form-item-control id=ModelName>
                                        <div class=arco-form-item-control-children>
                                          <div
                                            class="flex flex-row items-center gap-2 justify-between p-[12px] rounded-md bg-[#F6F8FA] w-[380px] h-[52px]">
                                            <div class="flex flex-row items-center gap-2">
                                              <div
                                                class="w-[28px] h-[28px] rounded-md border-[1px] border-[#DDE2E9] flex items-center justify-center overflow-hidden bg-white">
                                               </div>
                                              <div class="text-xs font-[500]">Doubao-Seedream-3.0-t2i</div><svg
                                                class="force-icon force-icon-info-circle hover:cursor-pointer text-[#737A87]"
                                                width=1em height=1em viewBox="0 0 48 48" fill=none
                                                xmlns=http://www.w3.org/2000/svg> <path fill-rule=evenodd
                                                clip-rule=evenodd
                                                d="M24 2c12.15 0 22 9.85 22 22s-9.85 22-22 22S2 36.15 2 24 11.85 2 24 2zm0 4C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6zm1 15a1 1 0 011 1v9h1.625a1 1 0 011 1v2.125a1 1 0 01-1 1H20a1 1 0 01-1-1V32a1 1 0 011-1h2v-5.875h-1a1 1 0 01-1-1V22a1 1 0 011-1h4zm0-8a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1h3z"
                                                fill=currentColor></path></svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal">
                                  <div class="arco-col arco-form-label-item arco-form-label-item-left"
                                    style="flex:0 0 64px"><label for=imgScale_input> 视频比例</label></div>
                                  <div class="arco-col arco-form-item-wrapper" style="flex:1 1 0%">
                                    <div class=arco-form-item-control-wrapper>
                                      <div class=arco-form-item-control id=imgScale>
                                        <div class=arco-form-item-control-children>
                                          <div
                                            class="arco-radio-group arco-radio-size-default arco-radio-mode-outline custom-radio-group-ab3432"
                                            role=radiogroup>
                                            <label class="arco-radio" :class="{active: index === activeIndex}" @click="handleRate(index)" v-for="(item, index) in radioList" :key="index" >
                                              <div class=custom-radio-item-_97ae6>{{item.value}}</div>
                                            </label>
                                            <label class=arco-radio>
                                            
                                              <div class=custom-radio-item-_97ae6>自定义</div>
                                            </label></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                             
                              </form>
                            </div>
    </div>
    <div class="creation-right module"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const keywords = ref('')
const activeIndex = ref(0)
const radioList = ref([
  {
    value: '1:1'
  },
  {
    value: '3:4'
  },
  {
    value: '4:3'
  },
  {
    value: '16:9'
  },
  {
    value: '9:16'
  }
])
const handleRate = (index) => {
  activeIndex.value = index
  const item = radioList.value[index]
  console.log('item', item)
}

</script>
<style lang="scss">
.creation {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
  .module {
    min-height: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
  }
  &-left {
    flex: none;
    width: 420px;
    overflow-y:auto;
  }
  &-right {
    flex: auto;

  }
}
.form-wrapper-_4819c {
  margin-top:20px;
    flex: 1 1;
    overflow-y: scroll;
    scrollbar-width: none
  }

  .form-wrapper-_4819c ::-webkit-scrollbar {
    display: none
  }

  .form-wrapper-_4819c .arco-form-label-item {
    padding-right: 12px
  }

  .form-wrapper-_4819c .arco-form-label-item label {
    color: #0c0d0e;
    font-size: 12px
  }

  .form-wrapper-_4819c .fold-button-f935cb {
    color: #737a87;
    cursor: pointer
  }

  .form-wrapper-_4819c .fold-button-f935cb:hover {
    opacity: .7
  }

  .form-wrapper-_4819c .fold-content-_9ece8 {
    overflow: hidden
  }

 
</style>

  <style>

  .arco-checkbox-mask-icon {
    color: var(--color-white);
    display: block;
    height: 100%;
    margin: 0 auto;
    position: relative;
    transform: scale(0);
    transform-origin: center 75%;
    width: 8px
  }

  .arco-divider-horizontal {
    border-bottom: 1px solid var(--color-border-2);
    clear: both;
    margin: 20px 0;
    max-width: 100%;
    min-width: 100%;
    position: relative;
    width: 100%
  }

  .arco-form {
    display: flex;
    flex-direction: column;
    width: 100%
  }

  .arco-form-item {
    margin-bottom: 24px;
    width: 100%
  }

  .arco-form-extra {
    color: var(--color-text-3);
    font-size: 12px;
    margin-top: 4px
  }

  .arco-form-label-item {
    line-height: 32px;
    white-space: nowrap
  }

  .arco-form-label-item>label {
    white-space: normal
  }

  .arco-form-label-item-left {
    text-align: left
  }

  .arco-form-item-control {
    align-items: center;
    display: flex;
    min-height: 32px;
    width: 100%
  }

  .arco-form-item-control-children {
    flex: 1 1;
    width: 100%
  }

  .arco-form-item-control-wrapper {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%
  }

  .arco-form .arco-slider {
    display: block
  }

  .arco-form-item-control-children {
    position: relative
  }



  .arco-row {
    display: flex;
    flex-flow: row wrap
  }

  .arco-row-align-start {
    align-items: flex-start
  }

  .arco-row-justify-start {
    justify-content: flex-start
  }

  .arco-col {
    box-sizing: border-box;
    position: relative
  }

  .arco-col-24 {
    display: block;
    flex: 0 0 100%;
    width: 100%
  }


  .arco-textarea {
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    color: var(--color-text-1);
    font-size: 13px;
    line-height: 1.5715;
    max-width: 100%;
    overflow: auto;
    padding-left: 12px;
    padding-right: 12px;
    position: relative;
    transition: color .1s linear, border-color .1s linear, background-color .1s linear;
    vertical-align: top;
    width: 100%
  }

  .arco-textarea::-webkit-input-placeholder {
    color: var(--color-text-3)
  }

  .arco-textarea::placeholder {
    color: var(--color-text-3)
  }

  .arco-textarea:hover {
    background-color: var(--color-bg-white);
    border-color: rgb(var(--primary-5))
  }

  .arco-textarea.arco-textarea-focus,
  .arco-textarea:focus {
    background-color: var(--color-bg-white);
    border-color: rgb(var(--primary-7));
    box-shadow: 0 0 0 0 transparent
  }

  .arco-textarea-wrapper {
    display: inline-block;
    position: relative;
    width: 100%
  }

  .arco-textarea-word-limit {
    color: var(--color-text-3);
    font-size: 12px;
    position: absolute;
    right: 10px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
  }





  .arco-textarea.arco-textarea-focus,
  .arco-textarea:focus {
    box-shadow: 0 0 0 2px rgba(22, 100, 255, .3)
  }
  .arco-radio {
    cursor: pointer;
  }
  .arco-radio.active .custom-radio-item-_97ae6{
    color: #514cf9;
    background-color: #f5f5ff;
    font-weight: 600;
  }

  .arco-radio-group-type-button .arco-radio-button:not(.arco-radio-checked):not(.arco-radio-disabled):hover {
    background-color: initial;
    color: rgb(var(--primary-7))
  }

  .arco-radio-group-type-button .arco-radio-checked:not(.arco-radio-disabled) {
    box-shadow: 0 1px 2px rgba(0, 0, 0, .07), 0 .5px 1px rgba(0, 0, 0, .05), 0 0 0 .5px rgba(213, 219, 227, .7)
  }

  .arco-slider .arco-slider-road:not(.arco-slider .arco-slider-road.arco-slider-road-vertical) .arco-slider-button {
    border-radius: 4px;
    box-shadow: 0 3.81242px 6.35403px rgba(0, 0, 0, .15), 0 0 1.27081px rgba(0, 0, 0, .1);
    height: 18px;
    margin-top: -5px;
    width: 10px
  }

  .arco-slider .arco-slider-road:not(.arco-slider .arco-slider-road.arco-slider-road-vertical) .arco-slider-button:after {
    border-radius: 4px;
    height: 18px;
    transform: scale(1);
    width: 10px
  }

  .arco-slider .arco-slider-road:not(.arco-slider .arco-slider-road.arco-slider-road-disabled) .arco-slider-button:hover {
    box-shadow: 0 3.81242px 6.35403px rgba(9, 30, 66, .2), 0 0 1.27081px rgba(9, 30, 66, .4)
  }

  .arco-slider .arco-slider-road:not(.arco-slider .arco-slider-road.arco-slider-road-disabled) .arco-slider-button:hover:after {
    border-color: rgb(var(--primary-6))
  }

</style>


<style>

  textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    margin: 0
  }



  



  .m-0 {
    margin: 0
  }

  .my-\[12px\] {
    margin-bottom: 12px;
    margin-top: 12px
  }

  .mb-\[24px\] {
    margin-bottom: 24px
  }

  .flex {
    display: flex
  }

  .h-\[20px\] {
    height: 20px
  }

  .h-\[28px\] {
    height: 28px
  }

  .h-\[52px\] {
    height: 52px
  }

  .w-\[140px\] {
    width: 140px
  }

  .w-\[20px\] {
    width: 20px
  }

  .w-\[28px\] {
    width: 28px
  }

  .w-\[380px\] {
    width: 380px
  }

  .flex-shrink-0 {
    flex-shrink: 0
  }

  .-translate-y-\[2px\] {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }

  .-translate-y-\[2px\] {
    --tw-translate-y: -2px
  }


  .flex-row {
    flex-direction: row
  }

  .items-center {
    align-items: center
  }

  .justify-center {
    justify-content: center
  }

  .justify-between {
    justify-content: space-between
  }

  .gap-2 {
    gap: .5rem
  }

  .overflow-hidden {
    overflow: hidden
  }

  .rounded-md {
    border-radius: .375rem
  }

  .border-\[1px\] {
    border-width: 1px
  }

  .border-\[\#DDE2E9\] {
    --tw-border-opacity: 1;
    border-color: rgb(221 226 233/var(--tw-border-opacity))
  }

  .bg-\[\#F6F8FA\] {
    --tw-bg-opacity: 1;
    background-color: rgb(246 248 250/var(--tw-bg-opacity))
  }

  .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity))
  }

  .p-\[12px\] {
    padding: 12px
  }

  .text-\[12px\] {
    font-size: 12px
  }

  .text-xs {
    font-size: .75rem;
    line-height: 1rem
  }

  .font-\[500\] {
    font-weight: 500
  }

  .font-medium {
    font-weight: 500
  }

  .text-\[\#0C0D0E\] {
    --tw-text-opacity: 1;
    color: rgb(12 13 14/var(--tw-text-opacity))
  }

  .text-\[\#737A87\] {
    --tw-text-opacity: 1;
    color: rgb(115 122 135/var(--tw-text-opacity))
  }

</style>
