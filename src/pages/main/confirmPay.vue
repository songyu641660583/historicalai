<template>
  <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden">
    <symbol id="icon-pc_check" viewBox="0 0 1409 1024">
      <path d="M97.024 407.296l159.872-111.616 360.576 360.704L1273.6 0l135.68 135.68-791.808 792.064z"
        fill="#FFFFFF" />
    </symbol>

    <symbol id="icon-alipay_round" viewBox="0 0 1024 1024">
      <path
        d="M923.136 817.2544A511.232 511.232 0 0 1 512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512a510.8736 510.8736 0 0 1-32.6144 180.1728c-75.008-23.1936-256.6144-79.5136-303.8208-96.768a835.072 835.072 0 0 0 84.8384-213.6064H563.2V311.6032h256v-43.8784h-254.5152V149.1968H466.6368c-17.5616 0-20.48 16.128-20.48 16.128v102.4H204.8v43.8784h241.3568v70.1952H247.296v40.96H645.12a692.1728 692.1728 0 0 1-57.0368 138.9568C497.3568 532.48 447.6416 512 337.92 501.76c-209.2032-21.9648-257.4848 93.6448-264.7552 163.84-11.7248 106.8032 84.8384 194.56 226.7136 194.56 141.9264 0 237.0048-65.8432 326.2464-175.5648 77.9264 38.0416 204.5952 94.208 296.0384 133.9392zM252.0064 597.3504c86.6304 0 165.2736 23.7056 259.9424 71.1168-67.9936 89.1904-149.2992 142.1824-231.936 142.1824-135.9872 0-158.6688-89.2416-150.6304-126.8736 6.656-37.632 46.592-86.4256 122.624-86.4256z m713.9328 151.552l-1.024 1.9456a510.9248 510.9248 0 0 1 1.024-1.8944z m-32.4608 53.8112c-3.328 4.7616-6.656 9.472-10.1376 14.1312z m11.8784-18.0224l-0.6144 1.024c-2.4064 3.7376-4.8128 7.4752-7.3216 11.1616l-3.328 4.9664c3.84-5.632 7.6288-11.3664 11.264-17.152z m8.9088-14.6432a511.5904 511.5904 0 0 1-2.5088 4.1984l-6.4 10.4448z m19.456-36.608a509.952 509.952 0 0 1-2.6624 5.4272l-5.12 10.0864z m9.8816-22.016l-1.2288 2.9696c-1.792 4.1472-3.584 8.2432-5.4784 12.3392l-1.7408 3.6864a506.88 506.88 0 0 0 16.1792-38.2976z m6.6048-16.1792a508.416 508.416 0 0 1-2.6112 6.656l-3.9936 9.5744z"
        fill="#0AAAF0" />
    </symbol>
    <symbol id="icon-wechat" viewBox="0 0 1024 1024">
      <path
        d="M384.042667 625.109333a30.421333 30.421333 0 0 1-14.08 3.456 31.146667 31.146667 0 0 1-27.306667-16.469333l-2.048-4.650667L255.189333 414.293333a17.066667 17.066667 0 0 1-1.493333-6.826666c0-8.874667 6.997333-16.085333 15.616-16.085334 3.541333 0 6.784 1.194667 9.386667 3.2l100.821333 73.941334a45.653333 45.653333 0 0 0 41.685333 4.949333L895.36 256C810.368 152.789333 670.421333 85.333333 512 85.333333 252.8 85.333333 42.666667 265.728 42.666667 488.32c0 121.429333 63.232 230.741333 162.133333 304.64a32.512 32.512 0 0 1 11.52 36.522667l-21.162667 81.28c-0.981333 3.84-2.517333 7.808-2.517333 11.776 0 8.917333 6.997333 16.128 15.658667 16.128 3.413333 0 6.144-1.28 9.045333-2.986667l102.741333-61.141333c7.722667-4.608 15.914667-7.424 24.917334-7.424 4.778667 0 9.429333 0.725333 13.781333 2.133333a540.16 540.16 0 0 0 153.216 22.101333c259.2 0 469.333333-180.48 469.333333-403.029333 0-67.413333-19.370667-130.901333-53.461333-186.752L387.456 623.061333l-3.413333 2.048z"
        fill="#09BB07" />
    </symbol>
  </svg>
  <div class="confirm-pay">
    <div class="confirm-info">
      <div class="order-expire" v-if="!isPaySuccess">
        订单提交成功，请尽快完成付款！支付订单号：{{ wechatTrade_id }}
        <div>
          请在倒计时
          <span class="countdown">{{ formattedTime }}</span>
          前完成支付，否则订单会被自动取消
        </div>
      </div>
      <div class="order-expire" v-else>
        您的订单已付款成功！支付订单号：{{ wechatTrade_id }}
      </div>
      <div class="order-money">
        <div>
          {{ isPaySuccess ? "已付款" : "应付金额" }}
          <span class="money">{{ payMoney }}.00</span>元
        </div>
        <div class="order-product">历史漫绘嗨币充值</div>
      </div>
    </div>
    <div class="confirm-content">
      <div class="confirm-content-title" v-if="!isPaySuccess">请选择支付方式</div>
      <ul class="pay-channel" v-if="!isPaySuccess">
        <li @click="handlePayChannel('wechat')">
          <div class="pay-channel-item line" :class="{ ' pay-channel-active': payType === 'wechat' }">
            <div class="pay-channel-item-check" v-if="payType === 'wechat'">
              <svg aria-hidden="true" class="icon pc_check">
                <use xlink:href="#icon-pc_check" />
              </svg>
            </div>
            <span class="pay-channel-info">
              <svg aria-hidden="true" class="icon wechat">
                <use xlink:href="#icon-wechat" />
              </svg>
              <span class="channel-detail">
                <span class="channel-title">
                  <i class="channel-title-text">微信支付</i>
                </span>
              </span>
            </span>
          </div>
        </li>
        <!-- <li @click="handlePayChannel('alipay')">
          <div
            class="pay-channel-item line"
            :class="{ ' pay-channel-active': payType === 'alipay' }"
          >
            <div class="pay-channel-item-check" v-if="payType === 'alipay'">
              <svg aria-hidden="true" class="icon pc_check">
                <use xlink:href="#icon-pc_check" />
              </svg>
            </div>
            <span class="pay-channel-info">
              <svg aria-hidden="true" class="icon alipay_round">
                <use xlink:href="#icon-alipay_round" />
              </svg>
              <span class="channel-detail">
                <span class="channel-title">
                  <i class="channel-title-text">支付宝电脑网站支付</i>
                </span>
              </span>
            </span>
          </div>
        </li> -->
      </ul>
      <div class="alipay-content" v-if="payType === 'alipay'">
        <p class="info">支付宝网站支付需要在支付页面输入您的支付信息，</p>
        <p class="info">请点击以下按钮前往支付宝</p>
        <el-button @click="handleToAlipay" style="margin-top: 20px" type="danger">登录支付宝账号付款{{ payMoney
          }}.00元</el-button>
      </div>
      <div class="qr-content" v-if="payType === 'wechat'">
        <template v-if="!isPaySuccess">
          <div class="qrcode-info">
            <div class="qrcode-img" v-loading="codeLoading">
              <img :src="wxQrUrl" alt v-if="wxQrUrl" />
            </div>

            <div class="qrcode-tips">请用微信扫码支付</div>
          </div>
          <div class="qrcode-msg">
            <ul class="pay-method-scanpay-limit wx-msg">
              <li class="pay-limit-head">
                <div>
                  <span>支付方式</span>
                  <span>限额信息</span>
                </div>
              </li>
              <li class="limit_content limit_color">
                <div>
                  <span>微信零钱</span>
                  <span>以微信限额为准</span>
                </div>
              </li>
              <li class="limit_content">
                <div>
                  <span>微信绑定的银行卡</span>
                  <span>
                    以银行限额为准<br />
                    <a style="color: #3e97ff" target="_blank"
                      href="https://kf.qq.com/touch/sappfaq/151210NZzmuY151210ZRj2y2.html?platform=15&amp;ADTAG=veda.weixinpay.wenti&amp;code=023rCzgI0pN3zf2f6EdI0RoqgI0rCzgw&amp;state=123&amp;from=message&amp;isappinstalled=0">银行卡限额信息</a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </template>
        <div class="pay-success" v-if="isPaySuccess">
          <div class="pay-success-icon">
            <el-icon size="86" color="#00DA3F">
              <SuccessFilled />
            </el-icon>
          </div>
          <div class="pay-success-status">支付成功</div>
          <div class="pay-success-text">订单金额{{ payMoney }}.00元</div>
          <div class="pay-success-text">入账金额{{ payMoney }}.00元</div>
          <div class="pay-success-text">交易流水号{{ payMwechatTrade_idoney }}</div>
          <el-button @click="handleBack" style="margin-top: 20px" type="danger">返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import { getAssetsFile } from "@/utils";
import api from "@/api";
import { useUserStore } from "@/store";
import QRCode from "qrcode";

const userStore = useUserStore();

const router = useRouter();

const route = useRoute();

const isPaySuccess = ref(false);
const payType = ref("wechat");
const wxQrUrl = ref("");
const payMoney = ref(0);
const totalTime = 30 * 60 * 1000;
const remainingTime = ref(totalTime);
const isRunning = ref(false);
const isPaused = ref(false);
const codeLoading = ref(false);
let wxPayResult = null;
const wechatTrade_id = ref("");
let payTimer = null;

let timer = null;
let startTime = 0;
let pauseTime = 0;

const formattedTime = computed(() => {
  const hours = Math.floor(remainingTime.value / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime.value % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime.value % (1000 * 60)) / 1000);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});
onMounted(() => {
  payMoney.value = localStorage.getItem("rechargeMoney");
  startCountdown();
  getWxCode();
});
onUnmounted(() => {
  if (payTimer) clearTimeout(payTimer);
  if (timer) clearTimeout(timer);
});
async function getWxPayResult() {
  if (wxPayResult) return;
  payTimer = setTimeout(async () => {
    try {
      const res = await api.home.payDetails({
        user_id: userStore.getUserInfo.user_id,
        trade_id: wechatTrade_id.value,
      });
      if (res.trans_id) {
        isPaySuccess.value = true;
        // ElMessageBox.alert("支付成功", "提示", {
        //   confirmButtonText: "前往账单",
        //   callback: (action) => {
        //     router.replace("/main/billRevord");
        //   },
        // });
        wxPayResult = res;
      }
    } catch (err) {
      getWxPayResult();
    }
  }, 3000);
}

async function getWxCode() {
  codeLoading.value = true;
  try {
    const userInfo = userStore.getUserInfo;
    const res = await api.home.getWeChatQyCode({
      user_id: userInfo.user_id,
      money: Number(payMoney.value),
    });
    wechatTrade_id.value = res.trade_id;

    wxQrUrl.value = await QRCode.toDataURL(res.qr_url.code_url, {
      width: 200,
      margin: 2,
    });
    codeLoading.value = false;
    getWxPayResult();
  } catch (err) { }
}

const handleToAlipay = () => {
  ElMessageBox.alert("请在新打开的支付宝页面完成支付", "提示", {
    confirmButtonText: "知道了",
    callback: (action) => {
      router.back();
    },
  });
};

const startCountdown = () => {
  if (isRunning.value) return;

  isRunning.value = true;
  isPaused.value = false;
  startTime = Date.now();

  timer = setInterval(() => {
    const elapsed = Date.now() - startTime;
    remainingTime.value = Math.max(totalTime - elapsed, 0);

    if (remainingTime.value <= 0) {
      ElMessageBox.alert("支付时间超时", "提示", {
        confirmButtonText: "返回",
        callback: (action) => {
          router.back();
        },
      });
      clearInterval(timer);
      isRunning.value = false;
      remainingTime.value = 0;
    }
  }, 100);
};
function handlePayChannel(type) {
  payType.value = type;
  if (type === "wechat") {
    getWxCode();
  } else if (type === "alipay") {
    // wxCode.value = getAssetsFile('alipay-icon.png') // 模拟获取支付宝二维码链接
  }
}

function handleBack() {
  router.back();
}
function getList() { }
</script>

<style lang="scss" scoped>
.confirm-pay {
  padding-top: 30px;
  width: 100%;
  height: 100%;
  padding: 20px;
  // background-color: #fff;
  border-radius: 8px;

  .confirm-content {
    width: 1300px;
    margin: 0 auto;
    background: #fff;
    border-radius: 4px;
    min-height: 600px;
    margin-top: 20px;
    padding: 28px 40px 40px;
    font-size: 14px;
    color: #222;

    .pay-success {
      margin-top: 110px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      text-align: center;
      font-size: #222;

      &-icon {}

      &-status {
        font-size: 18px;
        font-weight: bold;
      }

      &-text {
        font-size: 16px;
      }
    }

    .alipay-content {
      text-align: center;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #000;

      .button {
        margin-top: 20px;
        background: #f95959;
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        height: 40px;
        text-align: center;
        color: #fff;
      }
    }

    .qr-content {
      display: flex;
      justify-content: center;

      height: 300px;

      .qrcode-info {
        width: 200px;
        height: 250px;

        .qrcode-img {
          width: 200px;
          height: 200px;

          img {
            width: 200px;
            height: 200px;
          }
        }

        .qrcode-tips {
          height: 50px;
          text-align: center;
          font-size: 13px;
          line-height: 14px;
          letter-spacing: -0.11px;
          margin-top: 12px;
          text-align: center;
          color: #505050;
        }
      }
    }

    &-title {
      padding-bottom: 12px;
      font-size: 24px;
      color: #222;
    }

    .pay-channel {
      padding-left: 0;

      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .pay-channel-item,
    .pay-channel {
      display: flex;
    }

    .pay-channel-item {
      min-width: 40px;
      height: 48px;
      padding: 0 14px;
      margin-right: 12px;
      margin-bottom: 12px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      cursor: pointer;
      overflow: hidden;
      border-bottom-right-radius: 2px;
    }

    .pay-channel-item-check {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-bottom: 18px solid #f95959;
      border-left: 24px solid transparent;
    }

    .pay-channel-item:hover:not(.pay-channel-active):not(.pay-channel-disabled) {
      -webkit-box-shadow: 0 0 2px #efefef;
      box-shadow: 0 0 2px #efefef;
    }

    .pay-channel-active.line:after {
      border-color: #f95959;
      border-radius: 8px;
      -webkit-box-shadow: 0 0 2px rgba(249, 89, 89, 0.3);
      box-shadow: 0 0 2px rgba(249, 89, 89, 0.3);
    }

    .pay-channel-info {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .pay-channel-info .channel-detail {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin-left: 8px;
    }

    .pay-channel-info .channel-title {
      font-size: 14px;
      color: #555;
    }
  }

  .confirm-info {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #222;
    line-height: 30px;

    .countdown {
      color: rgb(249, 70, 70);
    }

    .money {
      font-size: 34px;
    }
  }
}
</style>
<style>
li,
ul {
  list-style: none;
}

i {
  font-style: normal;
  font-weight: 400;
}

svg:not(:root) {
  overflow: hidden;
}

.icon {
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.icon.pc_check {
  width: 10px;
  height: 10px;
  background-size: 10px 10px;
  position: absolute;
  right: 3px;
  bottom: -18px;
}

.line {
  position: relative;
}

.line:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
}

.pay-method-scanpay-limit {
  width: 320px;
  margin-left: 48px;
}

.pay-method-scanpay-limit li div {
  font-size: 13px;
  color: #1c1e3b;
  padding: 8px 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  line-height: 20px;
  position: relative;
  z-index: 99;
}

.pay-method-scanpay-limit li div span {
  width: 50%;
}

.pay-method-scanpay-limit .limit_color div {
  color: #505050;
}

.pay-method-scanpay-limit .pay-limit-head div {
  background: #f5f6f7;
}

.pay-method-scanpay-limit .limit_content {
  position: relative;
}

.pay-method-scanpay-limit .limit_content:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 10;
  border-bottom: 1px solid #eeeef0;
}
</style>
