<template>
  <div class="recharge">
    <div class="recharge-title">充值汇款</div>
    <div class="recharge-info">
      <div class="bwOG1">
        <div class="rkd5p">
          <img src="@/assets/money.png" class="JZIjf" />
          <div class="NOy8I">可用嗨币</div>
        </div>

        <div class="SJ7W8">
          <div class="CMIKu">
            <!-- <span class="mIO8Y">¥</span> -->
            <span class="Zixiu">{{ balanceValue }}</span>
          </div>
          <!-- <span class="GITIx">
            （现金余额：
            <span class="MLR7g">¥ 0.00</span>
            <span class="KhOGX"> — </span>冻结金额：
            <span class="MLR7g">¥ 0.00</span>）
            <span class="KhOGX"> — </span>欠费金额：
            <span class="MLR7g">¥ 0.00</span>
          </span> -->
        </div>
      </div>
      <div class="BQlzJ">
        查看充值记录
        <span class="arco-link" style="font-weight: 500;" @click="handleRecord">前往账单</span>
      </div>
    </div>
    <div class="recharge-title">充值方式</div>
    <div class="MuO_f sZRKD">
      <div class=P9EzI>
        <div class=yTqRp>
          <div class=BfPKE></div>
        </div>
        <div style=margin-left:12px>
          <div class=KXhan>在线支付</div>
          <div class=xKVsR>
            <div style="color:rgb(147,154,163);display:flex;align-items:center">实时到账，支持
              <svg width="18" height="18" viewBox="0 0 14 14" fill=none xmlns=http://www.w3.org/2000/svg
                style="height:18px;width:18px;margin-right:5.6px;margin-left:4px">
                <path
                  d="M14 9.584V2.692A2.693 2.693 0 0 0 11.307 0H2.692A2.693 2.693 0 0 0 0 2.692v8.616A2.692 2.692 0 0 0 2.692 14h8.616a2.694 2.694 0 0 0 2.65-2.216c-.714-.31-3.808-1.646-5.42-2.415-1.227 1.486-2.511 2.378-4.448 2.378-1.936 0-3.228-1.193-3.073-2.652.102-.959.76-2.525 3.614-2.257 1.504.142 2.193.423 3.419.828a9.647 9.647 0 0 0 .781-1.904h-5.44v-.54h2.692v-.967H2.8v-.593h3.283V2.264s.03-.218.271-.218H7.7V3.66h3.5v.594H7.7v.967h2.856a11.018 11.018 0 0 1-1.16 2.908c.83.3 4.604 1.454 4.604 1.454ZM3.876 10.822c-2.046 0-2.37-1.292-2.261-1.832.107-.537.7-1.238 1.838-1.238 1.307 0 2.477.335 3.883 1.018-.987 1.287-2.2 2.052-3.46 2.052Z"
                  fill=#1890FF></path>
              </svg>

              <img src="@/assets/wechat-icon.svg" height="18" width="18"
                style="margin:0 6px;vertical-align:text-bottom">

              多种在线支付方式。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="recharge-title">购买嗨币</div>
    <div class="money-list">
      <div  v-for="(item, index) in moneyList"  :key="index">
        <el-radio :label="item.value" v-model="moneyValue">{{ item.label }}</el-radio>
      </div>
    </div>
    <!-- <div>
      <el-input-number placeholder="请输入金额" v-model="moneyValue" class="mx-4" :min="1" style="width: 300px;"
        controls-position="right">
        <template #prefix>
          <span style="color: #000;font-size:12px;">¥</span>
        </template>
</el-input-number>
</div> -->
    <!-- <ul class="tips-list">
      <div class="checkbox-wrap">
        <el-checkbox class="checkbox" v-model="agreeValue" size="large" />我已知悉：
      </div>
      <li class="bC_N_">
        充值资金不支持直接开票，需购买云资源后，前往
        <span class="arco-link">发票管理</span>，根据云资源消费记录申请发票。
      </li>
      <li class="bC_N_">
        充值金额只可用于购买和使用火山引擎产品和服务，仅支持原路回退至付款账户。
        <a class="arco-link" target="_blank">了解更多</a>
      </li>
    </ul> -->
    <el-button style="margin-top: 20px;" type="primary" @click="handleSubmit" :loading="submitLoading"
      :disabled="!agreeValue || !moneyValue">确认充值</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const moneyValue = ref()
const agreeValue = ref(true)
const submitLoading = ref(false)
const balanceValue = ref(0)

const moneyList = [
  {
    label: '200嗨币, ¥10.0',
    value: 10
  },
  {
    label: '450嗨币, ¥20.0',
    value: 20
  },
  {
    label: '1150嗨币, ¥50.0',
    value: 50
  },
]


onMounted(() => {
  getBalance()
})

async function getBalance() {
  try {
    const userInfo = userStore.getUserInfo
    const res = await api.home.getBalance({
      "user_id": userInfo.user_id,
    })
    balanceValue.value = res.money
  } catch (err) {


  }
}

function handleSubmit() {
  submitLoading.value = true
  setTimeout(() => {
    submitLoading.value = false
    localStorage.setItem('rechargeMoney', moneyValue.value.toString())
    router.push({
      path: '/main/confirmPay',
      // query: {
      //   orderNumber
      // }
    })

  }, 2000)
}
function handleRecord() {
  router.push('/main/billRevord')
}
</script>
<style>
.el-input-number .el-input__inner {
  text-align: left !important;
}
.money-list .el-radio__label{
  color: #333;
}
</style>

<style lang="scss" scoped>

.MuO_f {
  border-radius: 4px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 72px;
  margin-bottom: 32px;
  margin-top: 16px;
  overflow: auto;
  padding: 12px 20px;
  width: 100%
}

.sZRKD {
  background-color: #f3f7ff;
  border: 1px solid #a2c1ff
}

.KXhan {
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 4px
}

.xKVsR {
  color: #737a87;
  font-size: 12px;
  font-weight: 400;
  height: 20px;
  letter-spacing: .003em;
  line-height: 20px;
  text-align: left
}

.MuO_f:hover,
.sZRKD {
  border-color: #a2c1ff
}

.MuO_f:hover .KXhan,
.sZRKD .KXhan {
  color: #1664ff
}

.sZRKD .BfPKE {
  background-color: #f3f7ff
}

.P9EzI {
  display: flex
}

.yTqRp {
  -moz-box-align: center;
  -moz-box-pack: center;
  align-items: center;
  border: 1px solid #dde2e9;
  border-radius: 100%;
  display: -moz-inline-box;
  display: inline-flex;
  height: 14px;
  justify-content: center;
  margin: 4px 0;
  min-width: 14px;
  background-color: #1664ff;
  border-color: #1664ff
}

.BfPKE {
  border-radius: 100%;
  height: 6px;
  width: 6px
}

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
  min-height: 90%;
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