<template>
  <div class="story" v-loading="submitLoading" element-loading-text="正在创作中，预计需要1-3分钟，请耐心等待...">
    <div class="story-left module">
      <!-- <div class="title">生成故事</div> -->
      <div class=form-wrapper-_4819c>
        <form class="arco-form arco-form-horizontal arco-form-size-default">
          <div class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal">
            <div class="arco-col arco-col-24 arco-form-item-wrapper">
              <div class=arco-form-item-control-wrapper>
                <div class=arco-form-item-control id=prompt>
                  <div class=arco-form-item-control-children>
                    <div class=prompt-container-_7730c>
                      <div class=arco-textarea-wrapper><textarea v-model="keywords" maxlength=20000
                          class="arco-textarea input-d73634" placeholder="描述想要生成的故事"
                          style="height:460px;min-height:460px;max-height:560px"></textarea><span
                          class=arco-textarea-word-limit>{{ keywords.length }}/20000</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div @click="handleGenerate"
            class="submit-button-container-_6fea6 submit-button-container-disabled-b37874 seaweed-submit-button-container-df22a0">
            <div style="display:flex;align-items:center;gap:8px">
              <!-- <svg xmlns=http://www.w3.org/2000/svg width=17
                height=16 fill=none viewBox="0 0 17 16">
                <path fill=#fff
                  d="M6.654 2.936a.37.37 0 0 1 .692 0L8.503 6.06a.74.74 0 0 0 .436.436l3.125 1.157a.37.37 0 0 1 0 .692L8.94 9.503a.74.74 0 0 0-.436.436l-1.157 3.125a.37.37 0 0 1-.692 0L5.497 9.94a.74.74 0 0 0-.436-.436L1.936 8.346a.37.37 0 0 1 0-.692L5.06 6.497a.74.74 0 0 0 .436-.436zM12.856 2.39a.154.154 0 0 1 .288 0l.451 1.22a.5.5 0 0 0 .296.295l1.22.45a.154.154 0 0 1 0 .29l-1.22.45a.5.5 0 0 0-.296.296l-.45 1.22a.154.154 0 0 1-.29 0l-.45-1.22a.5.5 0 0 0-.296-.296l-1.22-.45a.154.154 0 0 1 0-.29l1.22-.45a.5.5 0 0 0 .296-.296zM12.856 9.39a.154.154 0 0 1 .288 0l.482 1.302c.031.084.098.15.182.182l1.302.482a.154.154 0 0 1 0 .288l-1.302.482a.3.3 0 0 0-.182.182l-.482 1.302a.154.154 0 0 1-.288 0l-.482-1.302a.3.3 0 0 0-.182-.182l-1.302-.482a.154.154 0 0 1 0-.288l1.302-.482a.3.3 0 0 0 .182-.182z"
                  style="fill:rgb(255,255,255);fill-opacity:1"></path>
              </svg> -->
              <span class=font-medium>立即生成</span></div>
          </div>
        </form>
      </div>
    </div>
    <div class="story-right module">
      <div class="empy-data" v-if="!storyResult">
        <img src="../../assets/empty.png" alt="暂无数据" />
        <p>暂无内容，开始你的创意吧</p>
      </div>
      <div v-else class="story-container">
         <div class="create-btn" style="display: flex;justify-content: flex-end;">
        <el-button type="primary" @click="handleCreate">漫绘创作</el-button>
      </div>
      <div class="story-content"  v-html="storyResult"></div>
        
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import api from '@/api'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'

import { useRouter } from "vue-router";

const userStore = useUserStore()
const router = useRouter();

const keywords = ref('')
const storyResult = ref('')

const submitLoading = ref(false)

const handleGenerate = async () => {
  if (submitLoading.value) return
  if (!keywords.value.trim()) {
    ElMessage({
      message: '请输入关键词',
      type: 'warning',
    })
    return
  }
  submitLoading.value = true
  try {
    const userInfo = userStore.getUserInfo
    const res: string = await api.home.deepseek({
      "user_id": userInfo.user_id,
      "text": keywords.value
    })

    const jsonSegments = res.split('}').filter(seg => seg.trim());

    for (const segment of jsonSegments) {
      try {
        const jsonStr = segment + '}}';
        const data = JSON.parse(jsonStr);
        storyResult.value += data?.data?.text || ''

      } catch (e) {
        console.warn("解析失败:", segment);
      }
    }

    submitLoading.value = false
  } catch (err) {
    submitLoading.value = false
  }
}

const handleCreate = () => {
  localStorage.setItem('book-content', storyResult.value)
  router.push({
    path: '/main/creation',
    query: {
      bookContent: '1'
    }
  })
}

</script>
<style lang="scss">



.story {
  padding: 20px 30px 0;

  width: 100%;
  min-height: 90%;
  height: 100%;
  display: flex;
  gap: 30px;
  overflow: hidden;

  .module {
    min-height: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
  }

  &-left {
    flex: none;

    width: 420px;
    overflow-y: auto;
  }

  &-right {
    flex: auto;
    padding-bottom: 20px;

    .story-container {
      width: 100%;
      max-height: 100%;
      line-height: 28px;
    overflow-y: auto;

    }

    .empy-data {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      color: #888;

      img {
        margin-bottom: 5px;
        width: 140px;
      }
    }
  }
}

</style>

<style>
textarea {
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

<style>
.submit-button-container-_6fea6 {
  margin-top: 40px;
  align-items: center;
    background: #409eff;
  /* background: linear-gradient(78deg, #0093ff -3.23%, #0060ff 51.11%, #ce63ff 98.65%); */
  border-radius: 8px;
  color: #fff;
  display: flex;
  height: 48px;
  justify-content: center;
  width: 100%
}

.seaweed-submit-button-container-df22a0 {
  flex-direction: column;
  gap: 0
}

.submit-button-container-disabled-b37874 {
  cursor: pointer;
  /* opacity: .7 */
}

.prompt-container-_7730c {
  background-clip: padding-box, border-box;
  /* background-image: linear-gradient(90deg, #f8f9fe, #f8f9fe), linear-gradient(90deg, rgba(87, 138, 239, .4), rgba(143, 65, 233, .4)); */
  background-origin: padding-box, border-box;
  border: 1px solid #409eff;
  border-radius: 8px;
  margin: 2px;
  padding: 12px
}

.prompt-container-_7730c:before {
  border: 2px solid transparent;
  border-radius: 9px;
  bottom: 0;
  content: "";
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: all .2s;
  z-index: 2
}

.prompt-container-_7730c:hover {
  /* background-image: linear-gradient(90deg, #f8f9fe, #f8f9fe), linear-gradient(90deg, #578aef, #8f41e9) */
}

.prompt-container-_7730c:hover:before {
  border: 2px solid rgb(64, 158, 255, 0.4);
}

.prompt-container-_7730c .input-d73634 {
  background-color: initial;
  border: none;
  border-radius: 0;
  box-shadow: none;
  caret-color: #06f;
  margin-bottom: 20px;
  padding: 0;
  resize: none;
  scrollbar-width: none
}
</style>
