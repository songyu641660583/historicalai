<template>
  <div class="story—container">
    <!-- 首页：分类和书籍列表 -->
    <div v-if="currentView === 'home'">
      <div class="category-section" v-for="(category, index) in categories" :key="category.cid">
        <div class="category-header" @click="toggleCategory(category.cid, index)">
          <i class="bi" :class="expandedCategories.includes(category.cid) ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
          <span>{{ category.name }}</span>
        </div>
        <div class="books-container" :class="{ active: expandedCategories.includes(category.cid) }">
          <div class="book-list" :style="{height:!category.children ? '64px': '' }"  v-loading="!category.children">
            <div 
              class="book-item" 
              v-for="book in category.children" 
              :key="book.bid"
              @click="showDirectory(book)"
            >
              <div class="book-title">{{ book.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 目录页面 -->
    <div v-if="currentView === 'directory'" class="directory-container">
      <div class="book-header">
        <div class="book-cover">
          {{ currentBook.name.substring(0, 2) }}
        </div>
        <div class="book-info">
          <h1 class="book-name">{{ currentBook.name }}</h1>
          <!-- <div class="book-meta">作者: {{ currentBook.author }} | 字数: {{ currentBook.wordCount }}</div> -->
          <div class="book-desc">{{ bookDesc}}</div>
        </div>
      </div>
      
      <ul class="chapter-list">
        <li 
          class="chapter-item" 
          v-for="chapter in directorys" 
          :key="chapter.lid"
          @click="showContent(chapter)"
        >
          {{ chapter.name }}
        </li>
      </ul>
      
      <a class="back-btn" @click="backToHome">返回书籍列表</a>
    </div>

    <!-- 正文页面 -->
    <div v-if="currentView === 'content'" class="content-container">
      <div class="create-btn" style="display: flex;justify-content: flex-end;">
        <el-button type="primary" @click="handleCreate">漫绘创作</el-button>
      </div>
      <div class="content-header">
        <h1 class="content-title">{{ currentChapter.name }}</h1>
        <div class="content-subtitle">{{ currentBook.name }} · {{ currentChapter.sub }}</div>
      </div>
      
      <div class="content-body" v-loading="!chapterContent.length">
        <div class="content-body-item" v-for="(item, index) in chapterContent" :key="index">{{ item }}</div>
      </div>
      
      <a class="back-btn" @click="backToDirectory">返回目录</a>
    </div>
  </div>
</template>

<script setup>
import api from '@/api'
import { ref, reactive,onMounted } from 'vue';
import { useUserStore } from '@/store'
import { useRouter } from "vue-router";

const userStore = useUserStore()
const router = useRouter();

// 应用状态
const currentView = ref('home'); // 'home', 'directory', 'content'
const expandedCategories = ref([]);
const currentBook = ref(null);
const currentChapter = ref(null);



// 模拟数据
const categories = ref([]);

const bookDesc = ref('')

const directorys = ref([])

const chapterContent = ref('')

const handleCreate = () => {
  let content = ''
  chapterContent.value.forEach(item => {
    content += item
  });
  localStorage.setItem('book-content', content)
  router.push({
    path: '/main/creation',
    query: {
      bookContent: '1'
    }
  })

  
}


async function getBookCateList() {
  try {
    const userInfo = userStore.getUserInfo
  
    const res = await api.home.bookCate({
      "user_id": userInfo.user_id,
    })
    categories.value = res.cates
  } catch (err) {
    categories.value = []
  }
}
onMounted(() => {
  getBookCateList()
})
// 获取指定分类的书籍
const getBooksByCategory = async (categoryId, index) => {
   try {
    const userInfo = userStore.getUserInfo
  
    const res = await api.home.book({
      "user_id": userInfo.user_id,
      cid: categoryId
    })
    categories.value[index].children = res.books
  } catch (err) {
    //  categories.value[index].children  = []
  }
};

const getDirectoryByBook = async (bid) => {
   try {
    const userInfo = userStore.getUserInfo
  
    const res = await api.home.booklistings({
      "user_id": userInfo.user_id,
      bid
    })
    directorys.value = res.listings
    bookDesc.value = res.desc[0] || ''
  } catch (err) {
     directorys.value = []
  }
};

const getChapterContent= async (lid) => {
   try {
    const userInfo = userStore.getUserInfo
    chapterContent.value = []
  
    const res = await api.home.booktext({
      "user_id": userInfo.user_id,
      lid
    })
    chapterContent.value = res.text || []
  } catch (err) {
    chapterContent.value = []
  }
};


// 切换分类展开状态
const toggleCategory = (categoryId, categoryIndex) => {
  if(!categories.value[categoryIndex].children?.length) {
    getBooksByCategory(categoryId, categoryIndex)
  }
  const index = expandedCategories.value.indexOf(categoryId);
  if (index === -1) {
    expandedCategories.value.push(categoryId);
  } else {
    expandedCategories.value.splice(index, 1);
  }
};

// 显示目录
const showDirectory = (book) => {
  getDirectoryByBook(book.bid)
  currentBook.value = book;
  currentView.value = 'directory';
};

// 显示正文
const showContent = (chapter) => {
  getChapterContent(chapter.lid)
  currentChapter.value = chapter;
  currentView.value = 'content';
};

// 返回首页
const backToHome = () => {
  currentView.value = 'home';
  currentBook.value = null;
};

// 返回目录
const backToDirectory = () => {
  currentView.value = 'directory';
};
</script>

<style>
/* 之前的样式保持不变 */
:root {
  --primary-color: #409eff;
  --primary-light: #ecf5ff;
  --text-color: #333;
  --text-light: #666;
  --border-color: #ebeef5;
  --bg-color: #f5f7fa;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
}

.story—container {
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: 20px;
}

.category-section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
}

.category-header {
  padding: 10px 15px;
  background-color: var(--primary-light);
  color: var(--primary-color);
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
}

.category-header:hover {
  background-color: #d9ecff;
}

.category-header i {
  margin-right: 10px;
  transition: transform 0.3s;
}

.books-container {
  display: none;
  padding: 15px 20px;
}

.books-container.active {
  display: block;
  animation: fadeIn 0.3s;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}

.book-item {
  background: white;
  border-radius: 6px;
  padding: 5px 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
  border-left: 3px solid var(--primary-color);
}

.book-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.book-title {
  font-weight: bold;
  font-size: 15px;
  /* margin-bottom: 5px; */
  color: var(--text-color);
}

.book-author {
  font-size: 13px;
  color: var(--text-light);
}

.directory-container {
  height: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.book-header {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 15px;
}

.book-cover {
  width: 120px;
  height: 160px;
  background-color: var(--primary-light);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 24px;
  margin-right: 20px;
}

.book-info {
  flex: 1;
}

.book-name {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.book-meta {
  color: var(--text-light);
  font-size: 14px;
  margin-bottom: 10px;
}

.book-desc {
  line-height: 1.6;
  color: var(--text-color);
}

.chapter-list {
  list-style: none;
}

.chapter-item {
  padding: 12px 15px;
  border-bottom: 1px dashed var(--border-color);
  cursor: pointer;
  transition: all 0.2s;
}

.chapter-item:hover {
  background-color: var(--primary-light);
  color: var(--primary-color);
}

.chapter-item:last-child {
  border-bottom: none;
}

.content-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.content-header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}

.content-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.content-subtitle {
  color: var(--text-light);
  font-size: 14px;
}

.content-body {
  line-height: 1.8;
  font-size: 16px;
}

.content-body p {
  margin-bottom: 20px;
  text-indent: 2em;
}

.back-btn {
  display: inline-block;
  padding: 8px 15px;
  background-color: var(--primary-light);
  color: var(--primary-color);
  border-radius: 4px;
  text-decoration: none;
  margin-top: 20px;
  transition: all 0.3s;
  cursor: pointer;
}

.back-btn:hover {
  background-color: var(--primary-color);
  color: white;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>