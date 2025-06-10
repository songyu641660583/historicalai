<template>
  <div class="recharge">
    <div class="recharge-title">充值汇款</div>
    <div class="recharge-info">
      <div class="bwOG1">
        <div class="rkd5p">
          <img src="@/assets/money.png" class="JZIjf" />
          <div class="NOy8I">可用余额</div>
        </div>

        <div class="SJ7W8">
          <div class="CMIKu">
            <span class="mIO8Y">¥</span>
            <span class="Zixiu">0.00</span>
          </div>
          <span class="GITIx">
            （现金余额：
            <span class="MLR7g">¥ 0.00</span>
            <span class="KhOGX">—</span>冻结金额：
            <span class="MLR7g">¥ 0.00</span>）
            <span class="KhOGX">—</span>欠费金额：
            <span class="MLR7g">¥ 0.00</span>
          </span>
        </div>
      </div>
      <div class="BQlzJ">
        查看充值记录
        <span class="arco-link" style="font-weight: 500;" @click="handleRecord">前往账单</span>
      </div>
    </div>
    <div class="recharge-title">充值金额</div>
    <div>
      <el-input-number
        placeholder="请输入金额"
        v-model="moneyValue"
        class="mx-4"
        :min="1"
        style="width: 300px;"
        controls-position="right"
      >
        <template #prefix>
          <span style="color: #000;font-size:12px;">¥</span>
        </template>
      </el-input-number>
    </div>
    <ul class="tips-list">
      <div class="checkbox-wrap">
        <el-checkbox class="checkbox" v-model="agreeValue" size="large" />我已知悉：
      </div>
      <li class="bC_N_">
        充值资金不支持直接开票，需购买云资源后，前往
        <span class="arco-link">发票管理</span>，根据云资源消费记录申请发票。
      </li>
      <li class="bC_N_">
        充值金额只可用于购买和使用火山引擎产品和服务，仅支持原路回退至付款账户。
        <a
          class="arco-link"
          target="_blank"
        >了解更多</a>
      </li>
    </ul>
    <el-button type="primary" @click="handleSubmit" :loading="submitLoading" :disabled="!agreeValue || !moneyValue">确认充值</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const moneyValue = ref(0)
const agreeValue = ref(false)
const submitLoading = ref(false)
function getList() {}

function handleSubmit() {
  submitLoading.value = true
  setTimeout(() => {
    submitLoading.value = false
  }, 2000)
}
function handleRecord() {
  
}
</script>
<style>
.el-input-number .el-input__inner {
  text-align: left;
}
</style>

<style lang="scss" scoped>
.tips-list {
  padding-left: 20px;
  color: #0c0d0e;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  .checkbox-wrap {
    position: relative;
    left: -20px;
  }
  .checkbox {
    margin-right: 10px;
    position: relative;
    top: 2px;
  }
  .arco-link {
    cursor: pointer;
    color: #1664ff;
  }
}
.recharge {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
}
.recharge-title {
  font-size: 18px;
  margin-bottom: 20px;
}
.recharge-info {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #eaedf1;
  border: 1px solid var(--line-color-border-2, #eaedf1);
  border-radius: 8px;
  padding: 24px;
  position: relative;
  color: #737a87;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  .SJ7W8 {
    display: flex;
    align-items: flex-end;
    .CMIKu {
      color: #020814;
      display: inline-block;
      font-family: Roboto;
      font-weight: 700;
      height: 33px;
      margin-top: 10px;
      .mIO8Y {
        font-size: 20px;
        line-height: 23.5px;
        margin-right: 5px;
      }
      .Zixiu {
        font-size: 28px;
        line-height: 33px;
      }
    }
  }
  .GITIx {
    margin-left: 12px;
  }

  .MLR7g {
    color: #000;
  }
  .BQlzJ {
    flex: none;
  }
  .bwOG1 {
    flex: auto;
  }
  .rkd5p {
    display: flex;
    align-items: center;
  }
  .JZIjf {
    margin-right: 6px;
    width: 18px;
    height: 18px;
  }
  .arco-link {
    cursor: pointer;
    color: #1664ff;
  }
}
</style>