<template>
  <div class="bill-record">
    <div class="bill-record-title">账单</div>
    <div class="bill-tips">
      <div class="icon">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          viewBox="0 0 48 48"
          aria-hidden="true"
          focusable="false"
          class="arco-icon arco-icon-info-circle-fill"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            stroke="none"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="tips-list">
        <div class="tips-item">
          1. 收支明细仅显示本资金账户的收支变动，包含充值、退款、消费等资金增减变化；
        </div>
        <div class="tips-item">
          2. 收支明细不包含代金券抵扣；
          <!-- ，可访问
          <span class="link">代金券管理</span> 了解卡券使用详情。 -->
        </div>
        <div class="tips-item">
          3. 收支明细不包含赊销账单明细数据；
        </div>
      </div>
    </div>
    <div class="bill-table">
      <dd-table
        :data="tableData"
        idKey="userId"
        :total="total"
        :pageSize="pageMsg.size"
        :pageNumber="pageMsg.current"
        @pageChange="pageChange"
      >
        <el-table-column prop="trans_id" label="流水编号" >
            <template  #default="scope">
            <span style="color: #1664ff">{{  scope.row.trans_id}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="交易时间" />
        <el-table-column prop="type" label="交易类型" >
          <template  #default="scope">
            <span>{{  scope.row.type === 0 ? '充值' : '消费'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="payment" label="交易方式" width="180" />
        <el-table-column prop="money" label="交易金额">
          <template  #default="scope">
            {{ scope.row.money ? '¥' + scope.row.money : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="future_coin" label="嗨币" width="180" />
      </dd-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
import { useUserStore } from '@/store'

const userStore = useUserStore()

let pageMsg = {
  size: 10,
  current: 1
}
const total = ref(0)
const tableData: any = ref([])
onMounted(() => {
  getList()
})
async function getList() {
  try {
    const userInfo = userStore.getUserInfo
    const res = await api.home.getBill({
      "user_id": userInfo.user_id,
    })

   
    tableData.value = res

  } catch (err) {
   
  }
}
const pageChange = (value: number) => {
  pageMsg.current = value
  getList()
}


</script>

<style lang="scss" scoped>
.bill-table {
  margin-top: 20px;
}
.bill-record {
  width: 100%;
  min-height: 90%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  overflow-y: auto;
}
.bill-record-title {
  font-size: 18px;
}
.bill-tips {
  margin-top: 20px;
  display: flex;
  padding: 10px 20px;
  background-color: rgb(244, 247, 255);
  border-radius: 8px;
  .icon {
    flex: none;
    margin-right: 10px;
    svg {
      width: 20px;
      height: 20px;
      color: #1664ff;
    }
  }
  .tips-list {
    flex: auto;
    .tips-item {
      margin-bottom: 4px;
      font-size: 13px;
    }
    .link {
      cursor: pointer;
      color: #1664ff;
    }
  }
}
</style>