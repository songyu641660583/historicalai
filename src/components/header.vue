<template>
  <div class="header" :style="{position: isFixed ? 'fixed' : 'initial'}">
    <div class="header-logo" @click="handleHome">
      <img class="header-logo-img"  src="../assets/logo.png" alt="西行漫记" />
    </div>
    <!-- <div class=links-wrapper_43a49><span><a class="jimeng-link jimeng-link-theme-white" aria-label=文生图 target=_blank
            href=https://jimeng.jianying.com/ai-tool/image/generate>文生图</a></span><span><a
            class="jimeng-link jimeng-link-theme-white" aria-label=视频生成 target=_blank
            href=https://jimeng.jianying.com/ai-tool/home>视频生成</a></span><span><a
            class="jimeng-link jimeng-link-theme-white" aria-label=智能画布 target=_blank
            href=https://jimeng.jianying.com/ai-tool/home>智能画布</a></span><span><a
            class="jimeng-link jimeng-link-theme-white" aria-label=探索 target=_blank
            href=https://jimeng.jianying.com/ai-tool/explore>探索</a></span><span><a
            class="jimeng-link jimeng-link-theme-white" aria-label=未来影像计划 target=_blank
    href=https://jimeng.jianying.com/visionary>未来影像计划</a></span></div>-->
    <div class="actions-wrapper_43a49" v-if="!userInfo.user_id">
      <span>
        <!-- <button
          @click="handleLogin"
          class="jimeng-button jimeng-button-text"
          aria-label="登录-西行漫记"
        >登录/注册</button> -->
        <a class="btn-EoHtfv login-btn" @click="handleLogin"><span>登录/注册</span></a>
      </span>
      <span></span>
    </div>
    <div class="actions-wrapper" v-else>
      <el-dropdown>
        <div class="el-dropdown-link avatar-custom">
          <span class="avatar-text">{{  userInfo.user_name.slice(0,1)}}</span>

          <!-- <img
            style="width: 40px;height: 40px;cursor: pointer;"
            src="../assets/user-avatar-default.png"
          /> -->
        </div>
        <template #dropdown>
          <div class="dropdown-content">
            <div class="dropdown-base">
              <!-- <img class="img" src="../assets/user-avatar-default.png" alt /> -->
              <div class="avatar-custom" >
                <span class="avatar-text">{{  userInfo.user_name.slice(0,1)}}</span>

                  <!-- <img
                    style="width: 40px;height: 40px;cursor: pointer;"
                    src="../assets/user-avatar-default.png"
                  /> -->
              </div>
              <div class="base-info">
                <div class="base-info-name base-info-item">
                  <span class="text">{{ userInfo.user_name }}</span>
                  <span class="copy" @click="handleCopy(userInfo.user_name)">
                    <el-icon size="12" color="#666">
                      <CopyDocument />
                    </el-icon>
                  </span>
                </div>
                <div class="base-info-item base-info-account">
                  <span class="text">账号ID：{{ userInfo.user_id }}</span>
                  <span class="copy" @click="handleCopy(userInfo.user_id)">
                    <el-icon size="12" color="#666">
                      <CopyDocument />
                    </el-icon>
                  </span>
                </div>
              </div>
            </div>
            <div class="logout-btn">
              <el-button style="width: 100%;" @click="handleLogout">退出登录</el-button>
            </div>
          </div>
        </template>
      </el-dropdown>
    </div>
  </div>
  <!-- <div class="login-module">
       <LoginComponent></LoginComponent>
  </div> -->
   <el-dialog v-model="loginVisible" header-class="loginDialogHeader" :show-close="false"  width="476px">
     <LoginComponent @loginSuccess="loginSuccess" @onLinkReg="onLinkReg"></LoginComponent>
   </el-dialog>
    <el-dialog v-model="registerVisible" header-class="loginDialogHeader" :show-close="false"  width="476px">
       <RegisterComponent @registerSuccess="registerSuccess" @onLinkLogin="onLinkLogin"></RegisterComponent>
   </el-dialog>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { defineEmits, withDefaults,  ref, computed } from 'vue'
import LoginComponent from '../pages/login.vue'
import RegisterComponent from '../pages/register.vue'

interface PropsType {
  isFixed?: boolean 
}

const emit = defineEmits(['pageChange', 'selectionChange'])
withDefaults(defineProps<PropsType>(), {
  isFixed: false
})
const loginVisible = ref(false)
const registerVisible = ref(false)

const userStore = useUserStore()
const userInfo = computed(() => userStore.getUserInfo)
// const userInfo = ref({
//   name: '1760000用户1760000用户',
//   account: '123423424'
// })
const router = useRouter()

// const userInfo = userStore.getUserInfo

const loginSuccess = () => {
  loginVisible.value = false
  router.push('/main/creation')
}

const registerSuccess = () => {
  registerVisible.value = false
  handleLogin()
}

const onLinkReg = () => {
  loginVisible.value = false
  registerVisible.value = true
}

const onLinkLogin = () => {
  registerVisible.value = false
  loginVisible.value = true
}

const handleLogout = () => {
  userStore.logout()
}
const handleLogin = () => {
  loginVisible.value = true
}

const handleCopy = (value: string) => {
  const el = document.createElement('textarea')
  el.value = value
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  ElMessage({
    message: '复制成功',
    type: 'success'
  })
}

const handleHome = () => {
  router.push('/')
}

defineExpose({
  handleLogin
})
</script>

<style lang="scss">
.login-btn {
  width: 100px !important;
  padding: 10px 0 !important;
}
.avatar-custom {
  width: 50px;
  height: 50px;
  background-color: #ecf2ff;
  color: #05f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
.el-dialog {
  background-color: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
}
.loginDialogHeader {
  display: none;
}
.login-module {
  position: fixed;
  width: 576px;
  height: 662px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dropdown-content {
  width: 270px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;

  .logout-btn {
    margin-top: 20px;
  }

  .dropdown-base {
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;

    .img {
      margin-right: 8px;
      width: 50px;
      height: 50px;
      flex: none;
    }

    .base-info {
      margin-left: 10px;
      flex: auto;

      &-name {
        .text {
          font-size: 17px;
          font-weight: 500;
        }
      }

      &-account {
        .text {
          font-size: 14px;
          color: #666;
        }
      }

      &-item {
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .copy {
          margin-left: 5px;
          cursor: pointer;
        }
      }
    }
  }
}

.header {
  top: 0;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 68px;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  z-index: 10;
  
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  // background-color: rgba(15, 17, 21, 0.4);
  background-color: #fff;
  transition: all 0.3s cubic-bezier(0.44, 0, 0.56, 1);

  .header-logo {
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: start;
    width: 230px;
  }

  .header-logo-img {
    width: 230px;
    object-fit: cover;
  }

  .actions-wrapper {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: right;
    width: 190px;
  }
}
</style>