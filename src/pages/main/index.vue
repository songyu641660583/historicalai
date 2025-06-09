<template>
  <div class="main">
    <headerComponent />
    <div class="main-container">
      <div class="main-container-left" :class="{ slider: isCollapse }">
        <div class="left-logo">
          <img src="@/assets/user-avatar-default.png" alt="">
          <span :style="{ display: isCollapse ? 'none' : 'block' }">历史漫绘</span>
        </div>
        <div class="left-content">
          <!-- 这里写el-menu -->
          <el-menu :collapse="isCollapse" :default-openeds="openedMenus" :default-active="activeMenu"
            class="el-menu-vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router
            @select="handleMenuSelect">

            <div v-for="(item, index) in routes" :key="item.path">
              <el-sub-menu :index="index" v-if="!item.hidden">
                <template #title>
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>{{ item.text }}</span>
                </template>
                <el-menu-item :index="child.path" v-for="child in item.children" :key="child.path"> <el-icon>
                    <House />
                  </el-icon>{{ child.text }}</el-menu-item>
              </el-sub-menu>
            </div>

          </el-menu>
        </div>
        <div class="left-bottom">
          <el-icon size="24" color="#333" style="cursor: pointer;" @click="handleSlider">
            <Fold v-if="!isCollapse" />
            <Expand v-else />
          </el-icon>
        </div>
      </div>
      <div class="main-container-right" :class="{ slider: isCollapse }">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { routes } from '../../router'
import headerComponent from '../../components/header.vue'
const route = useRoute()
const activeMenu = ref('/')
const openedMenus = ref([3])
const isCollapse = ref(false)

// 监听路由变化，更新激活的菜单项
watch(() => route.path, (newPath) => {
  console.log('newPath', newPath)
  activeMenu.value = newPath
}, { immediate: true })

const handleMenuSelect = (index: number) => {
  console.log('菜单选中:', index)
}

const handleSlider = () => {
  isCollapse.value = !isCollapse.value
}


</script>
<style lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  background-color: #f9f9f9;

  &-container {
    height: calc(100vh - 68px);
    display: flex;

    &-left {
        background-color: #f6f8fa;
      display: flex;
      flex-direction: column;
      padding: 30px 10px 0;
      width: 200px;

      &.slider {
        width: 100px;
      }

      .left-content {
        padding-top: 20px;
        flex: auto;
        width: 100%;
      }

      .left-bottom {
        padding: 10px 0 10px 10px;
        border-top: 1px solid #eee;
        flex: none;
        display: flex;
        align-items: center;
      }

      .left-logo {
        padding-left: 18px;
        flex: none;
        display: flex;
        align-items: center;

        img {
          margin-right: 10px;
          width: 30px;
          height: 30px;
        }

        font-size: 16px;
      }
    }

    &-right {
      padding: 30px 30px 30px 40px;
      width: calc(100vw - 200px);

      &.slider {
        width: calc(100vw - 100px);
      }
    }
  }
}

.el-menu {
  border: none !important;
}

.el-sub-menu,
.el-sub-menu__title,
.el-menu-item,
.el-menu {
  color: #000 !important;
  background: #f6f8fa !important;
}

.el-sub-menu__title {
  height: 40px !important;
  color: #737a87 !important;

}

.el-menu-item {
  padding-left: 28px !important;
  height: 35px !important;
  border-radius: 8px;

  &:hover {
    background: #c3d3f3 !important;
    color: #1664ff !important;
  }
}

/* 调整折叠时的样式 */
.el-menu--collapse {
  width: 64px;
}

.el-menu--collapse .el-sub-menu__title span,
.el-menu--collapse .el-menu-item span {
  display: none;
}

.el-menu--collapse .el-sub-menu__title .el-sub-menu__icon-arrow {
  display: none;
}
</style>