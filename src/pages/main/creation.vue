<template>
  <div class="loading-fix" v-if="submitLoading" v-loading="submitLoading" element-loading-text="正在创作中，预计需要5-10分钟，请耐心等待..."></div>
  
  <div class="creation">
    <div class="creation-left module">
      <div class="title">生成漫画视频</div>
      <div class=form-wrapper-_4819c>
        <form class="arco-form arco-form-horizontal arco-form-size-default">
          <div class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal">
            <div class="arco-col arco-col-24 arco-form-item-wrapper">
              <div class=arco-form-item-control-wrapper>
                <div class=arco-form-item-control id=prompt>
                  <div class=arco-form-item-control-children>
                    <div class=prompt-container-_7730c>
                      <div class=arco-textarea-wrapper><textarea v-model="keywords" maxlength=20000
                          class="arco-textarea input-d73634" placeholder="输入漫画故事"
                          style="height:360px;min-height:360px;max-height:460px"></textarea><span
                          class=arco-textarea-word-limit>{{ keywords.length }}/20000</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal">
            <div class="arco-col arco-form-label-item arco-form-label-item-left" style="flex:0 0 64px"><label
                for=ModelName_input> 声音模块</label></div>
            <div class="arco-col arco-form-item-wrapper" style="flex:1 1 0%">
              <div class=arco-form-item-control-wrapper>
                <div class=arco-form-item-control id=ModelName>
                  <el-dropdown popper-class="voiceList-dropdown">
                    <span class="el-dropdown-link" v-if="voiceDetail">
                      {{ voiceDetail?.name || '请选择声音' }}
                      <el-icon class="el-icon--right">
                        <arrow-down />
                      </el-icon>
                    </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item v-for="(item, index) in voiceList" :key="index"
                          @click="handleVoiceClick(item)">{{ item.name }}</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                  <span class="voice-status-text" @click="handleVoiceStatus">{{ voiceStatus === 'play' ? '暂停' :
                    '试听' }}</span>
                  <!-- <div class=arco-form-item-control-children>
                    <div
                      class="flex flex-row items-center gap-2 justify-between p-[12px] rounded-md bg-[#F6F8FA] w-[380px] h-[52px]">
                      <div class="flex flex-row items-center gap-2">
                        <div
                          class="w-[28px] h-[28px] rounded-md border-[1px] border-[#DDE2E9] flex items-center justify-center overflow-hidden bg-white">
                        </div>
                        <div class="text-xs font-[500]">Doubao-Seedream-3.0-t2i</div><svg
                          class="force-icon force-icon-info-circle hover:cursor-pointer text-[#737A87]" width=1em
                          height=1em viewBox="0 0 48 48" fill=none xmlns=http://www.w3.org/2000/svg>
                          <path fill-rule=evenodd clip-rule=evenodd
                            d="M24 2c12.15 0 22 9.85 22 22s-9.85 22-22 22S2 36.15 2 24 11.85 2 24 2zm0 4C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6zm1 15a1 1 0 011 1v9h1.625a1 1 0 011 1v2.125a1 1 0 01-1 1H20a1 1 0 01-1-1V32a1 1 0 011-1h2v-5.875h-1a1 1 0 01-1-1V22a1 1 0 011-1h4zm0-8a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1h3z"
                            fill=currentColor></path>
                        </svg>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal">
            <div class="arco-col arco-form-label-item arco-form-label-item-left" style="flex:0 0 64px"><label
                for=imgScale_input>
                视频比例</label></div>
            <div class="arco-col arco-form-item-wrapper" style="flex:1 1 0%">
              <div class=arco-form-item-control-wrapper>
                <div class=arco-form-item-control id=imgScale>
                  <div class=arco-form-item-control-children>
                    <div
                      class="arco-radio-group arco-radio-size-default arco-radio-mode-outline custom-radio-group-ab3432"
                      role=radiogroup>
                      <label class="arco-radio" :class="{ active: index === activeIndex }" @click="handleRate(index)"
                        v-for="(item, index) in radioList" :key="index">
                        <div class=custom-radio-item-_97ae6>{{ item.value }}</div>
                      </label>
                      <label class="arco-radio" :class="{ active: activeIndex === -1 }" @click="handleCustom">
                        <div class=custom-radio-item-_97ae6>自定义</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeIndex === -1"
            class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal">
            <div class="arco-col arco-form-label-item arco-form-label-item-left" style="flex:0 0 64px"><label
                for=imgScale_input>
                视频尺寸</label></div>
            <div class="arco-col arco-form-item-wrapper" style="flex:1 1 0%">
              <el-input-number v-model="withNum" class="mx-4" :min="1" style="width: 120px;" controls-position="right">
                <template #prefix>
                  <span>w</span>
                </template>
              </el-input-number>
              <span style="padding: 0 20px;"> <el-icon>
                  <Minus />
                </el-icon> </span>
              <el-input-number v-model="heightNum" class="mx-4" :min="1" style="width: 120px;"
                controls-position="right">
                <template #prefix>
                  <span>h</span>
                </template></el-input-number>
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
    <div class="creation-right module">
      <div class="empy-data" v-if="!videoUrl">
        <img src="../../assets/empty.png" alt="暂无数据" />
        <p>暂无内容，开始你的创意吧</p>
      </div>
      <template v-else>
        <div style="display: flex;justify-content: flex-end;margin-bottom: 15px;">
            <el-button type="primary" :disabled="!videoUrl"
            @click="handleDownloadVideo">下载视频</el-button>
          <el-button title="需要重新生成至少一次图片或音频" type="primary" :disabled="disabledBtn"
            @click="handleReGeneralVideo">重新生成视频</el-button>
        </div>
        <div class="video-container">
          <video :src="videoUrl" ref="videoRef" controls></video>
        </div>
        <div class="video-content-title">视频帧预览</div>
        <!-- 视频帧 -->
        <div class="video-frame">
          <swiper-container :slides-per-view="'auto'" :space-between="20" :centered-slides="false" navigation="true"
            style="width: 100%; height: 100%;">
            <swiper-slide style="width:250px !important;" v-for="(item, index) in imgFrame" :key="index">
              <div class="custom-slide">
                <img :src="`data:image/jpeg;base64,${item.img.data}`" alt="暂无数据" />
                <!-- <div class="desc">{{ item.originText }}</div> -->
              </div>

            </swiper-slide>
          </swiper-container>

        </div>
        <div class="video-content-title">视频帧编辑</div>
        <!-- 声音文本 -->
        <div class="voice-text">
          <div v-for="(item, index) in imgFrame" :key="index">
            <!-- <div class="voice-item-postion">模块{{ item.position + 1 }}</div> -->
            <div class="voice-edit-item">
              <div class="voice-edit-item-img">
                <img :src="`data:image/jpeg;base64,${item.img.data}`" alt="暂无数据" />
              </div>
              <div class="voice-edit-item-from">
                <div class="voice-edit-item-from-input">
                  <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 4 }" placeholder="请输入内容" resize="none"
                    v-model="item.text">
                  </el-input>
                </div>
                <div class="voice-edit-item-from-options" style="margin-bottom: 15px">
                  <span class="tips">编辑上述提示词重新生成图片</span>
                  <el-button type="primary" @click="handleReGeneralImg(index)">重新生成图片</el-button>
                </div>
                <div class="voice-edit-item-from-input">
                  <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 3 }" placeholder="请输入内容" resize="none"
                    v-model="audioFrame[index].text">
                  </el-input>
                </div>
                <div class="voice-edit-item-from-options">
                    <span class="tips">
                      编辑上述提示词重新生成音频
                    </span>
                  
                  <div style="display: flex;">
                   <div class="play" style="margin-right: 5px;">
                      <span style="color:#333;"><span>时长：</span>{{audioFrame[index].duration}}秒</span>
                    </div>
                    <div class="play" @click="handleFrameAudio(index)">
                      <el-icon size="16">
                        <CaretRight />
                      </el-icon>
                      <i class="el-icon-caret-right"></i>
                      <span>{{ audioFrame[index].playStatus === 'play' ? '暂停' : '播放' }}</span>
                    </div>
                    <el-button type="primary" @click="handleReGeneralAudio(index)">重新生成音频</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>


    </div>
  </div>
  <div class="audio" style="position: absolute;right: -3000px;top: -2000px;width: 0;height: 0;overflow: hidden;">
    <audio ref="audioRef"></audio>
  </div>
  <div class="audio" style="position: absolute;right: -3000px;top: -2000px;width: 0;height: 0;overflow: hidden;">
    <audio ref="frameAudioRef"></audio>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, nextTick, inject } from 'vue'
import { useRoute } from "vue-router";
import api from '@/api'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'

// import aaa from './data.js'

const route = useRoute();

const audioRef: any = ref(null);
const frameAudioRef: any = ref(null); // 视频帧audio
const videoRef: any = ref(null);
const userStore = useUserStore()
const keywords = ref('')
const activeIndex = ref(0)
const radioList = ref([
  {
    value: '1:1',
    width: 1024,
    height: 1024
  },
  {
    value: '3:4',
    width: 864,
    height: 1152
  },
  {
    value: '4:3',
    width: 1152,
    height: 864
  },
  {
    value: '16:9',
    width: 1280,
    height: 720
  },
  {
    value: '9:16',
    width: 720,
    height: 1280
  },
  {
    value: '2:3',
    width: 832,
    height: 1248
  },
  {
    value: '3:2',
    width: 1248,
    height: 832
  },
  {
    value: '21:9',
    width: 512,
    height: 648
  }
])
let radioDetail: any = null
const submitLoading = ref(false)
const voiceList: any = ref([])
const voiceDetail: any = ref(null)
const voiceStatus = ref('pause')

const imgFrame: any = ref([])
const audioFrame: any = ref([])

const withNum = ref(0)
const heightNum = ref(0)
// 'https://media.w3.org/2010/05/sintel/trailer.mp4'
const videoUrl = ref()
let rid = ''
const disabledBtn = ref(true)
function robustParseStreamData(streamData: string) {
const lines = streamData.trim().split('\n');
  
  // 2. 过滤空行并解析每行JSON
  const result = lines
    .filter(line => line.trim().length > 0)
    .map(line => {
      try {
        return JSON.parse(line);
      } catch (e) {
        console.error('解析JSON失败:', e, '原始数据:', line);
        return null;
      }
    })
    .filter(item => item !== null); // 移除解析失败的项目
  
  return result;
}


onMounted(async () => {
  if (route.query.bookContent === '1') {
    const bookContent = localStorage.getItem('book-content')
    if (bookContent) {
      keywords.value = bookContent
    }
  }
  radioDetail = radioList.value[0]
  getVoiceList()
  audioRef.value.addEventListener('pause', () => {
    voiceStatus.value = 'pause'
  });
  audioRef.value.addEventListener('play', () => {
    voiceStatus.value = 'play'
  });
})
watch(() => voiceDetail.value, (async () => {
  await nextTick();
  if (videoRef.value) {
    videoRef.value.addEventListener('play', () => {
      if (!audioRef.value.paused) {
        audioRef.value.pause()
      }
    });
  }
}), { immediate: true })

const handleLogin = inject('handleLogin')

const handleDownloadVideo = () => {
  const link = document.createElement('a')
  link.href = videoUrl.value 
  link.download = '西行漫记.mp4'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
const handleReGeneralVideo = async () => {
  if (submitLoading.value) return
  submitLoading.value = true
  try {
    const userInfo = userStore.getUserInfo
    const res: any = await api.home.regenerating({
      "user_id": userInfo.user_id,
      rid
    })
    if(!disabledBtn.value) {
      disabledBtn.value = true
    }
    rid = res.video?.rid
    videoUrl.value = res.video?.url
    submitLoading.value = false
  } catch (err) {
    submitLoading.value = false
  }
}

const handleReGeneralImg = async (index: number) => {
  if (submitLoading.value) return

  const item = imgFrame.value[index]

  if (!item.text.trim()) {
    ElMessage({
      message: '请输入重新生成的文本内容',
      type: 'warning',
    })
    return
  }
  submitLoading.value = true
  try {
    const userInfo = userStore.getUserInfo
    const res: any = await api.home.retext2img({
      "user_id": userInfo.user_id,
      "text": item.text.trim(),
      rid,
      "position": item.position
    })
    if(disabledBtn.value) {
      disabledBtn.value = false
    }
    imgFrame.value[index] = {
      ...imgFrame.value[index],
      ...res
    }
    submitLoading.value = false
  } catch (err) {
    submitLoading.value = false
  }
}


const handleReGeneralAudio = async (index: number) => {
  if (submitLoading.value) return

  const item = audioFrame.value[index]

  if (!item.text.trim()) {
    ElMessage({
      message: '请输入重新生成的文本内容',
      type: 'warning',
    })
    return
  }
  if (!audioRef.value.paused) {
    audioRef.value.pause()
  }
  if (videoRef?.value && !videoRef.value.paused) {
    videoRef.value.pause()
  }
  if (!frameAudioRef.value.paused) {
    frameAudioRef.value.pause()
  }
  submitLoading.value = true
  try {
    const userInfo = userStore.getUserInfo
    const res: any = await api.home.retext2audio({
      "user_id": userInfo.user_id,
      "text": item.text.trim(),
      rid,
      "position": item.position
    })
    if(disabledBtn.value) {
      disabledBtn.value = false
    }
    audioFrame.value[index] = {
      ...audioFrame.value[index],
      ...res
    }
    submitLoading.value = false
  } catch (err) {
    submitLoading.value = false
  }
}

const handleFrameAudio = (index: number) => {
  let item = audioFrame.value[index]
  item.playStatus = item.playStatus === 'play' ? 'pause' : 'play'

  if (item.playStatus === 'play') {
    if (!frameAudioRef.value.paused) {
      frameAudioRef.value.pause()
    }
    if (frameAudioRef.value) {
      frameAudioRef.value.src = `data:audio/mp3;base64,${item.audio.data}`
      frameAudioRef.value.play()
    }
    for (let i = 0; i < audioFrame.value.length; i++) {
      if (index !== i) {
        audioFrame.value[i].playStatus = 'pause'
      }
    }

  } else {
    if (!frameAudioRef.value.paused) {
      frameAudioRef.value.pause()
    }
  }
}
const handleVoiceStatus = () => {
  voiceStatus.value = voiceStatus.value === 'play' ? 'pause' : 'play'
  if (voiceStatus.value === 'play') {
    if (videoRef.value && !videoRef.value.paused) {
      videoRef.value.pause()
    }

    if (audioRef.value) {
      audioRef.value.src = voiceDetail.value.url
      audioRef.value.play()
    }

  } else {
    if (!audioRef.value.paused) {
      audioRef.value.pause()
    }
  }
}

const handleRate = (index: number) => {
  activeIndex.value = index
  radioDetail = radioList.value[index]
}

const handleCustom = () => {
  activeIndex.value = -1
}

const handleVoiceClick = (item: any) => {
  // if (videoRef.value && !videoRef.value.paused) {
  //   videoRef.value.pause()
  // }
  voiceDetail.value = item
  if (voiceStatus.value === 'play') {
    if (!audioRef.value.paused) {
      audioRef.value.pause()
    }
    if (audioRef.value) {
      audioRef.value.src = item.url
      audioRef.value.play()
    }

  }

}

async function getVoiceList() {
  try {
    const userInfo = userStore.getUserInfo
    // if (!userInfo.user_id) {
    //   ElMessage({
    //     message: '请先登录',
    //     type: 'warning',
    //   })
    //   setInterval(() => {
    //     userStore.logout()
    //   }, 1000)
    //   return
    // }
    const res = await api.home.getVoiceList({
      "user_id": userInfo.user_id,
    })
    voiceList.value = res.voices
    voiceDetail.value = res.voices[0]
  } catch (err) {
    voiceList.value = []
  }
}

const handleGenerate = async () => {
  const userInfo = userStore.getUserInfo
  if (!userInfo.user_id) {
    handleLogin && handleLogin()
    return
  }
  if (submitLoading.value) return
  let width = null
  let height = null
  if (activeIndex.value === -1) {
    if (withNum.value <= 0 || heightNum.value <= 0) {
      ElMessage({
        message: '请输入正确的宽高',
        type: 'warning',
      })
      return
    }
    width = withNum.value
    height = heightNum.value
  } else {
    if (radioDetail) {
      width = radioDetail.width
      height = radioDetail.height
    }
  }

  if (!keywords.value.trim()) {
    ElMessage({
      message: '请输入关键词',
      type: 'warning',
    })
    return
  }
  if (!audioRef.value.paused) {
    audioRef.value.pause()
  }
  if (videoRef?.value && !videoRef.value.paused) {
    videoRef.value.pause()
  }
  submitLoading.value = true
  try {
    const userInfo = userStore.getUserInfo
    const res: string = await api.home.generatingVideo({
      "user_id": userInfo.user_id,
      "story": keywords.value,
      "voice_id": voiceDetail.value?.id || '',
      "width": width,
      "height": height
    })
    if(!disabledBtn.value) {
      disabledBtn.value = true
    }
    audioFrame.value = []
    imgFrame.value = []
    videoUrl.value = ''
    rid = ''

    const resultArray = robustParseStreamData(res)
    resultArray.forEach((item: any) => {
      const dataItem: any = item.data
      if (dataItem.type === 1 && dataItem?.img?.img?.data) {
        imgFrame.value.push({
          ...dataItem.img,
          originText: dataItem.img.text
        })
      }
      if (dataItem.type === 2 && dataItem?.audio?.audio?.data) {
        audioFrame.value.push({
          ...dataItem.audio,
          playStatus: 'pause'
        })
      }
      if (dataItem.type === 0 && dataItem?.video?.url) {
        videoUrl.value = dataItem?.video?.url
        rid = dataItem?.video?.rid || ''
      }
    })

    submitLoading.value = false
  } catch (err) {
    submitLoading.value = false
  }
}

</script>
<style lang="scss">
.custom-slide {
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 8px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 12px;
  }

  .desc {
    width: 100%;
    margin-top: 10px;
    height: 50px;
    font-size: 14px;
    color: #666;
    text-align: left;
    display: -webkit-box;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /*! autoprefixer: on */
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;

  }
}

.voiceList-dropdown .el-dropdown-menu {
  max-height: 180px;
  overflow-y: auto;
}
.loading-fix {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1111;
}

.creation {
  padding: 20px 30px 0;

  width: 100%;
  min-height: 90%;
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
    overflow-y: auto;
  }

  &-right {
    flex: auto;
    overflow-y: auto;
    padding-bottom: 20px;

    .video-container,
    .video-container video {
      width: 100%;
      // height: 100%;
      border-radius: 20px;
      object-fit: cover;
      overflow: hidden;
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

    .video-content-title {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
    }

    .video-frame {
      margin-top: 15px;
    }

    .voice-text {
      margin-top: 15px;
      --el-border-radius-base: 12px;
      --el-text-color-regular: #222;

      .voice-item-postion {
        margin-bottom: 10px;
      }


      .voice-edit-item {
        margin-bottom: 65px;
        display: flex;
        align-items: flex-start;
        gap: 15px;

        &-img {
          flex: none;
          height: 252px;
          width: 200px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px;
          }
        }

        &-from {
          flex: auto;

          &-options {
            --el-border-radius-base: 4px;


            margin-top: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .tips {
              font-size: 13px;
              color: #409eff;
            }

            .play {

              margin-right: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1px;
              cursor: pointer;
              font-size: 14px;
              color: #409eff;
            }
          }
        }

      }

    }

  }
}

.form-wrapper-_4819c {
  margin-top: 20px;
  flex: 1 1;
  overflow-y: scroll;
  scrollbar-width: none
}

.form-wrapper-_4819c ::-webkit-scrollbar {
  display: none
}

.form-wrapper-_4819c .arco-form-label-item {
  // padding-right: 12px
}

.form-wrapper-_4819c .arco-form-label-item label {
  color: #0c0d0e;
  font-size: 14px
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

.arco-form-item-control .voice-status-text {
  margin-left: 15px;
  color: #409eff;
  font-size: 14px;
  cursor: pointer;
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
  user-select: none;
  bottom: 0;
  left: 0
}





.arco-textarea.arco-textarea-focus,
.arco-textarea:focus {
  box-shadow: 0 0 0 2px rgba(22, 100, 255, .3)
}

.arco-radio-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.arco-radio {
  cursor: pointer;
}

.custom-radio-item-_97ae6 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 34px;
  border-radius: 6px;
  background-color: #f6f8fa;
  color: #545568;
  font-size: 13px;
}

.arco-radio.active .custom-radio-item-_97ae6 {
  color: #409eff;
  background-color: #f5f5ff;
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
