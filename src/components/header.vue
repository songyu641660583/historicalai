<template>
  <div class="header ">
    <div class="header-logo">
      <img class="header-logo-img" width="84" height="22.13" src="../assets/9dbd484d8351690d1bf905bce6155cf3.png"
        alt="即梦AI" />
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
    <div class="actions-wrapper">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img style="width: 40px;height: 40px;cursor: pointer;" src="../assets/user-avatar-default.png" alt="">
        </span>
        <template #dropdown>
          <div class="dropdown-content">
            <div class="dropdown-base">
              <img class="img" src="../assets/user-avatar-default.png" alt="">
              <div class="base-info">
                <div class="base-info-name base-info-item">
                  <span class="text">{{ userInfo.user_name }}</span>
                  <span class="copy" @click="handleCopy(userInfo.user_name)"><el-icon size="12" color="#666">
                      <CopyDocument />
                    </el-icon></span>
                </div>
                <div class="base-info-item base-info-account">
                  <span class="text">
                    账号ID：{{ userInfo.user_id }}
                  </span>
                  <span class="copy" @click="handleCopy(userInfo.user_id)"><el-icon size="12" color="#666">
                      <CopyDocument />
                    </el-icon></span>
                </div>
              </div>
            </div>
            <div class="logout-btn"> <el-button style="width: 100%;" @click="handleLogout">退出登录</el-button></div>
          </div>

        </template>
      </el-dropdown>
    </div>

  </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'

const userStore = useUserStore()
// const userInfo = ref({
//   name: '1760000用户1760000用户',
//   account: '123423424'
// })

 const userInfo = userStore.getUserInfo

 const handleLogout = () => {
  userStore.logout()
}

const handleCopy = (value: string) => {
  const el = document.createElement('textarea');
  el.value = value;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  ElMessage({
    message: '复制成功',
    type: 'success',
  })
}
</script>

<style lang="scss">
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
          /* 显示的行数 */
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
  background-color: rgba(15, 17, 21, 0.4);
  transition: all 0.3s cubic-bezier(0.44, 0, 0.56, 1);

  .header-logo {
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: start;
    width: 190px;
  }

  .header-logo-img {
    height: 22.13px;
    width: 88px;
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