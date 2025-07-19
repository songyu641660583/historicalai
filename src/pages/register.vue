<template>
 <div class="arco-spin layoutSpin-pr7cPJ">
              <div class=arco-spin-children>
                <div class="loginCard-w1Ov0n cardHasTab-Uzr9RE">
                  <div class=title-EHSTny>欢迎来到历史漫绘</div>
                  <div
                    class="arco-tabs arco-tabs-horizontal arco-tabs-line arco-tabs-top arco-tabs-size-default accountTab-uAbUd4">
                    <div
                      class="arco-tabs-header-nav arco-tabs-header-nav-horizontal arco-tabs-header-nav-top arco-tabs-header-size-default arco-tabs-header-nav-line">
                      <div class=arco-tabs-header-scroll>
                        <div class=arco-tabs-header-wrapper>
                          <div class=arco-tabs-header style="transform:translateX(0px)">
                            <!-- <div class=arco-tabs-header-title role=tab aria-selected=false tabindex=0
                              id=arco-tabs-6-tab-0 aria-controls=arco-tabs-6-panel-0><span
                                class=arco-tabs-header-title-text>账号登录</span></div> -->
                            <div class="arco-tabs-header-title arco-tabs-header-title-active" role=tab
                              aria-selected=true tabindex=0 id=arco-tabs-6-tab-1 aria-controls=arco-tabs-6-panel-1><span
                                class=arco-tabs-header-title-text>手机号注册</span></div>
                            <div class=arco-tabs-header-ink style="left:0px;width:80px"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="arco-tabs-content arco-tabs-content-horizontal">
                      <div class=arco-tabs-content-inner style="margin-left:-100%">
                        <div class="arco-tabs-content-item" role=tabpanel tabindex=-1 id=arco-tabs-6-panel-0
                          aria-labelledby=arco-tabs-6-tab-0 aria-hidden=true>

                        </div>
                        <div class="arco-tabs-content-item arco-tabs-content-item-active" role=tabpanel tabindex=0
                          id=arco-tabs-6-panel-1 aria-labelledby=arco-tabs-6-tab-1>
                          <div class=arco-tabs-pane>
                            <div>
                              <div class="arco-form arco-form-horizontal arco-form-size-default telIdpForm-U0cPiZ">
                                <div
                                  class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-item-error  arco-form-layout-horizontal">
                                  <div class="arco-col arco-col-24 arco-form-item-wrapper">
                                    <div class=arco-form-item-control-wrapper>
                                      <div class=arco-form-item-control>
                                        <div class=arco-form-item-control-children>
                                          <div
                                            class="arco-input-group-wrapper arco-input-group-wrapper-default arco-input-custom-height input-lInQvs"
                                            style=height:40px><span class=arco-input-group><span
                                                class=arco-input-group-addbefore>
                                                <div
                                                  class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal"
                                                  style=margin:0px>
                                                  <div
                                                    class="arco-col arco-col-24 arco-form-item-wrapper arco-form-item-wrapper-flex">
                                                    <div class=arco-form-item-control-wrapper>
                                                      <div class=arco-form-item-control id=CallingCode>
                                                        <div class=arco-form-item-control-children>
                                                          <div role=combobox aria-haspopup=listbox
                                                            aria-autocomplete=list aria-expanded=false tabindex=0
                                                            id=CallingCode_input
                                                            class="arco-select arco-select-single arco-select-size-default"
                                                            aria-controls=arco-select-popup-43
                                                            style="width:68px;height:40px">
                                                            <div title=+86 class=arco-select-view><span
                                                                class=arco-select-view-selector><input aria-hidden=true
                                                                  autocomplete=off tabindex=-1
                                                                  class="arco-select-view-input arco-select-hidden"
                                                                  value
                                                                  style="width:100%;pointer-events:none;text-align: center;"><span
                                                                  class=arco-select-view-value>+86</span></span>
                                                              <!-- <div aria-hidden=true class=arco-select-suffix><span
                                                                  class=arco-select-suffix-icon>
                                                                  <svg
                                                                    class="force-icon force-icon-down" width=1em
                                                                    height=1em viewBox="0 0 12 12" fill=currentColor
                                                                    xmlns=http://www.w3.org/2000/svg>
                                                                    <path fill-rule=evenodd clip-rule=evenodd
                                                                      d="M3.87654 4.05542C3.68128 3.86016 3.3647 3.86016 3.16943 4.05542L2.81588 4.40897C2.62062 4.60424 2.62062 4.92082 2.81588 5.11608L5.64431 7.94451C5.74246 8.04266 5.87127 8.09148 5.99992 8.09095C6.12856 8.09148 6.25737 8.04266 6.35552 7.94451L9.18395 5.11608C9.37921 4.92082 9.37921 4.60424 9.18395 4.40897L8.8304 4.05542C8.63514 3.86016 8.31855 3.86016 8.12329 4.05542L5.99992 6.1788L3.87654 4.05542Z">
                                                                    </path>
                                                                  </svg>
                                                                </span></div> -->
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </span>
                                              <!-- arco-input-inner-wrapper-error -->
                                              <span
                                                class="arco-input-inner-wrapper  arco-input-inner-wrapper-focus arco-input-inner-wrapper-default arco-input-clear-wrapper"
                                                :class="{ 'arco-input-inner-wrapper-error': !!phoneErrorValue }">
                                                <input @blur="handlePhoneBlur" v-model="phoneValue" id=Tel_input
                                                  placeholder=请输入手机号
                                                  class="arco-input arco-input-size-default arco-input-error" value
                                                  aria-invalid=true></span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="arco-form-message formblink-appear-done formblink-enter-done">
                                      <div role=alert v-if="!!phoneErrorValue">{{ phoneErrorValue }}</div>
                                    </div>
                                  </div>
                                </div>
                                <div class=verify-HwYJQ9>
                                  <div class=control-FQPmJc>
                                    <div
                                      class="arco-row arco-row-align-start arco-row-justify-start arco-form-item arco-form-layout-horizontal bottomFormItem-O0fRNW">
                                      <div class="arco-col arco-col-24 arco-form-item-wrapper">
                                        <div class=arco-form-item-control-wrapper>
                                          <div class=arco-form-item-control id=Code>
                                            <div class=arco-form-item-control-children><span
                                                class="input-lInQvs arco-input-inner-wrapper arco-input-inner-wrapper-default arco-input-clear-wrapper"><input
                                                  @input="handleCodeBlur" v-model="codeValue" id=Code_input maxlength=6
                                                  placeholder=请输入验证码 class="arco-input arco-input-size-default"
                                                  value></span></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="arco-form-message formblink-appear-done formblink-enter-done">
                                        <div role=alert v-if="codeErrorValue">{{ codeErrorValue }}</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div style="position:relative">
                                    <button v-if="!countDownText" @click="handleSendCode"
                                      :class="{ codeBtnPass: !codeDisabled }"
                                      class="arco-btn arco-btn-secondary arco-btn-size-default arco-btn-shape-square verify-btn-cPZHKh"
                                      type=button><span>获取验证码</span>
                                    </button>
                                    <div class="count-down" v-if="countDownText">{{ countDownText }}s</div>
                                  </div>
                                </div>
                                <div class=protocol-eGDdjF>
                                  <el-checkbox style="margin-right: 6px;position: relative;top:2px" v-model="agreeValue"
                                    size="large" />
                                  <span>点击开始体验代表同意历史漫绘 </span>
                                  <a target=_blank
                                    rel="noopener noreferrer">服务条款</a>和 <a target=_blank
                                    rel="noopener noreferrer">隐私政策</a>
                                </div>
                                <div style="position:relative">
                                  <el-button :loading="submitLoading" @click="handleLogin" class="submitBtn"
                                    :disabled="!agreeValue" :class="{ 'arco-btn-disabled': !agreeValue }"
                                    type="primary">开始体验</el-button>
                                  <!-- <button 
                                    class="arco-btn arco-btn-primary arco-btn-size-default arco-btn-shape-square btn-M2kVma"><span>开始体验</span>
                                  </button> -->
                                </div>
                                <div class="register">
                                  已有账号? <span @click="handleRegister">立即登录</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class=passwordExpirationBox-yx6EE8></div>
              </div>
            </div>

</template>
<script setup lang="ts">
import api from '@/api'
import { ref } from 'vue'
import { ElMessage } from "element-plus";

const emit = defineEmits(['registerSuccess', 'onLinkLogin'])
const phoneErrorValue = ref('')
const phoneValue = ref('')
const codeValue = ref('')
const codeDisabled = ref(true)
const countDownText = ref(0)
const submitLoading = ref(false)
const codeErrorValue = ref('')

const agreeValue = ref(false)
const handlePhoneBlur = () => {
  if (!phoneValue.value) {
    phoneErrorValue.value = '请输入手机号'
    return
  }
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phoneRegex.test(phoneValue.value)) {
    phoneErrorValue.value = '输入值不是有效电话号码';
    return
  }
  phoneErrorValue.value = ''
}
const handleCodeBlur = (e) => {
  if (codeValue.value.length >= 6) {
    codeDisabled.value = false
  } else {
    codeDisabled.value = true
  }

}
function countDown() {
  if (countDownText.value <= 0) {
    return
  }
  setTimeout(() => {
    countDownText.value--
    countDown()
  }, 1000)
}
const handleSendCode = async () => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phoneRegex.test(phoneValue.value)) {
    phoneErrorValue.value = '输入值不是有效电话号码';
    return
  }

  codeErrorValue.value = ''
  countDownText.value = 60
  countDown()
  try {
    await api.home.getVerificationCode({
      mobile: phoneValue.value
    })
    ElMessage.success('验证码已发送，请注意查收')    
  } catch (err) {
    console.log('sendcode--', err)
  }
}


const handleLogin = async () => {
  handlePhoneBlur()
  if (codeValue.value.length === 6) {
    submitLoading.value = true
    codeErrorValue.value = ''
    try {
      await api.home.sign({
        mobile: phoneValue.value,
        code: codeValue.value
      })
      ElMessage.success('注册成功')    
      submitLoading.value = false
      emit('registerSuccess')
    } catch (err) {
      submitLoading.value = false
    }
  } else {
    codeErrorValue.value = '请输入6位验证码'
  }

}

const handleRegister = () => {
   emit('onLinkLogin')
}



</script>
<style>
.register {
  margin-top: 200px;
  text-align: center;

}

.register span {
  cursor: pointer;
  color: #3370ff;
}

body {
  --color-white: #fff;
  --color-black: #000;
  --color-border: rgb(var(--gray-3));
  --color-bg-popup: var(--color-bg-5);
  --color-bg-1: #fff;
  --color-bg-2: #fcfdfe;
  --color-bg-3: #fafbfc;
  --color-bg-4: #f6f8fa;
  --color-bg-5: #f1f3f5;
  --color-bg-white: #fff;
  --color-neutral-1: rgb(var(--gray-1));
  --color-neutral-2: rgb(var(--gray-2));
  --color-neutral-3: rgb(var(--gray-3));
  --color-neutral-4: rgb(var(--gray-4));
  --color-neutral-5: rgb(var(--gray-5));
  --color-neutral-6: rgb(var(--gray-6));
  --color-neutral-7: rgb(var(--gray-7));
  --color-neutral-8: rgb(var(--gray-8));
  --color-neutral-9: rgb(var(--gray-9));
  --color-neutral-10: rgb(var(--gray-10));
  --color-text-1: #020814;
  --color-text-2: #41464f;
  --color-text-3: #80838a;
  --color-text-4: #ccced0;
  --color-fill-1: #ccced0;
  --color-fill-2: #80838a;
  --color-fill-3: #4e525b;
  --color-fill-4: #020814;
  --color-border-1: var(--color-neutral-2);
  --color-border-2: #eaedf1;
  --color-border-3: #dde2e9;
  --color-border-4: var(--color-neutral-6);
  --color-primary-light-1: rgb(var(--primary-1));
  --color-primary-light-2: rgb(var(--primary-2));
  --color-primary-light-3: rgb(var(--primary-3));
  --color-primary-light-4: rgb(var(--primary-4));
  --color-secondary: var(--color-neutral-2);
  --color-secondary-hover: var(--color-neutral-3);
  --color-secondary-active: var(--color-neutral-4);
  --color-secondary-disabled: var(--color-neutral-1);
  --color-danger-light-1: rgb(var(--danger-1));
  --color-danger-light-2: rgb(var(--danger-2));
  --color-danger-light-3: rgb(var(--danger-3));
  --color-danger-light-4: rgb(var(--danger-4));
  --color-success-light-1: rgb(var(--success-1));
  --color-success-light-2: rgb(var(--success-2));
  --color-success-light-3: rgb(var(--success-3));
  --color-success-light-4: rgb(var(--success-4));
  --color-warning-light-1: rgb(var(--warning-1));
  --color-warning-light-2: rgb(var(--warning-2));
  --color-warning-light-3: rgb(var(--warning-3));
  --color-warning-light-4: rgb(var(--warning-4));
  --color-link-light-1: rgb(var(--link-1));
  --color-link-light-2: rgb(var(--link-2));
  --color-link-light-3: rgb(var(--link-3));
  --color-link-light-4: rgb(var(--link-4));
  --border-radius-none: 0;
  --border-radius-small: 4px;
  --border-radius-medium: 4px;
  --border-radius-large: 8px;
  --border-radius-circle: 50%;
  --color-tooltip-bg: rgb(var(--gray-10));
  --color-spin-layer-bg: hsla(0, 0%, 100%, .6);
  --color-menu-dark-bg: #232324;
  --color-menu-light-bg: #fff;
  --color-menu-dark-hover: hsla(0, 0%, 100%, .04);
  --color-mask-bg: rgba(29, 33, 41, .6);
  font-size: 14px
}

body {
  --red-1: 255, 236, 232;
  --red-2: 253, 205, 197;
  --red-3: 251, 172, 163;
  --red-4: 249, 137, 129;
  --red-5: 247, 101, 96;
  --red-6: 245, 63, 63;
  --red-7: 203, 39, 45;
  --red-8: 161, 21, 30;
  --red-9: 119, 8, 19;
  --red-10: 77, 0, 10;
  --orangered-1: 255, 243, 232;
  --orangered-2: 253, 221, 195;
  --orangered-3: 252, 197, 159;
  --orangered-4: 250, 172, 123;
  --orangered-5: 249, 144, 87;
  --orangered-6: 247, 114, 52;
  --orangered-7: 204, 81, 32;
  --orangered-8: 162, 53, 17;
  --orangered-9: 119, 31, 6;
  --orangered-10: 77, 14, 0;
  --orange-1: 255, 247, 232;
  --orange-2: 255, 228, 186;
  --orange-3: 255, 207, 139;
  --orange-4: 255, 182, 93;
  --orange-5: 255, 154, 46;
  --orange-6: 255, 125, 0;
  --orange-7: 210, 95, 0;
  --orange-8: 166, 69, 0;
  --orange-9: 121, 46, 0;
  --orange-10: 77, 27, 0;
  --gold-1: 255, 252, 232;
  --gold-2: 253, 244, 191;
  --gold-3: 252, 233, 150;
  --gold-4: 250, 220, 109;
  --gold-5: 249, 204, 69;
  --gold-6: 247, 186, 30;
  --gold-7: 204, 146, 19;
  --gold-8: 162, 109, 10;
  --gold-9: 119, 75, 4;
  --gold-10: 77, 45, 0;
  --yellow-1: 254, 255, 232;
  --yellow-2: 254, 254, 190;
  --yellow-3: 253, 250, 148;
  --yellow-4: 252, 242, 107;
  --yellow-5: 251, 232, 66;
  --yellow-6: 250, 220, 25;
  --yellow-7: 207, 175, 15;
  --yellow-8: 163, 132, 8;
  --yellow-9: 120, 93, 3;
  --yellow-10: 77, 56, 0;
  --lime-1: 252, 255, 232;
  --lime-2: 237, 248, 187;
  --lime-3: 220, 241, 144;
  --lime-4: 201, 233, 104;
  --lime-5: 181, 226, 65;
  --lime-6: 159, 219, 29;
  --lime-7: 126, 183, 18;
  --lime-8: 95, 148, 10;
  --lime-9: 67, 112, 4;
  --lime-10: 42, 77, 0;
  --green-1: 232, 255, 234;
  --green-2: 175, 240, 181;
  --green-3: 123, 225, 136;
  --green-4: 76, 210, 99;
  --green-5: 35, 195, 67;
  --green-6: 0, 180, 42;
  --green-7: 0, 154, 41;
  --green-8: 0, 128, 38;
  --green-9: 0, 102, 34;
  --green-10: 0, 77, 28;
  --cyan-1: 232, 255, 251;
  --cyan-2: 183, 244, 236;
  --cyan-3: 137, 233, 224;
  --cyan-4: 94, 223, 214;
  --cyan-5: 55, 212, 207;
  --cyan-6: 20, 201, 201;
  --cyan-7: 13, 165, 170;
  --cyan-8: 7, 130, 139;
  --cyan-9: 3, 97, 108;
  --cyan-10: 0, 66, 77;
  --blue-1: 232, 247, 255;
  --blue-2: 195, 231, 254;
  --blue-3: 159, 212, 253;
  --blue-4: 123, 192, 252;
  --blue-5: 87, 169, 251;
  --blue-6: 52, 145, 250;
  --blue-7: 32, 108, 207;
  --blue-8: 17, 75, 163;
  --blue-9: 6, 48, 120;
  --blue-10: 0, 26, 77;
  --arcoblue-1: 232, 243, 255;
  --arcoblue-2: 190, 218, 255;
  --arcoblue-3: 148, 191, 255;
  --arcoblue-4: 106, 161, 255;
  --arcoblue-5: 64, 128, 255;
  --arcoblue-6: 22, 93, 255;
  --arcoblue-7: 14, 66, 210;
  --arcoblue-8: 7, 44, 166;
  --arcoblue-9: 3, 26, 121;
  --arcoblue-10: 0, 13, 77;
  --purple-1: 245, 232, 255;
  --purple-2: 221, 190, 246;
  --purple-3: 195, 150, 237;
  --purple-4: 168, 113, 227;
  --purple-5: 141, 78, 218;
  --purple-6: 114, 46, 209;
  --purple-7: 85, 29, 176;
  --purple-8: 60, 16, 143;
  --purple-9: 39, 6, 110;
  --purple-10: 22, 0, 77;
  --pinkpurple-1: 255, 232, 251;
  --pinkpurple-2: 247, 186, 239;
  --pinkpurple-3: 240, 142, 230;
  --pinkpurple-4: 232, 101, 223;
  --pinkpurple-5: 225, 62, 219;
  --pinkpurple-6: 217, 26, 217;
  --pinkpurple-7: 176, 16, 182;
  --pinkpurple-8: 138, 9, 147;
  --pinkpurple-9: 101, 3, 112;
  --pinkpurple-10: 66, 0, 77;
  --magenta-1: 255, 232, 241;
  --magenta-2: 253, 194, 219;
  --magenta-3: 251, 157, 199;
  --magenta-4: 249, 121, 183;
  --magenta-5: 247, 84, 168;
  --magenta-6: 245, 49, 157;
  --magenta-7: 203, 30, 131;
  --magenta-8: 161, 16, 105;
  --magenta-9: 119, 6, 79;
  --magenta-10: 77, 0, 52;
  --gray-1: 247, 248, 250;
  --gray-2: 242, 243, 245;
  --gray-3: 229, 230, 235;
  --gray-4: 201, 205, 212;
  --gray-5: 169, 174, 184;
  --gray-6: 134, 144, 156;
  --gray-7: 107, 119, 133;
  --gray-8: 78, 89, 105;
  --gray-9: 39, 46, 59;
  --gray-10: 29, 33, 41;
  --primary-1: 243, 247, 255;
  --primary-2: 236, 242, 255;
  --primary-3: 160, 192, 255;
  --primary-4: 110, 159, 255;
  --primary-5: 66, 129, 255;
  --primary-6: 22, 100, 255;
  --primary-7: 0, 85, 255;
  --primary-8: 0, 68, 204;
  --primary-9: var(--arcoblue-9);
  --primary-10: var(--arcoblue-10);
  --link-1: 243, 247, 255;
  --link-2: 236, 242, 255;
  --link-3: 160, 192, 255;
  --link-4: 110, 159, 255;
  --link-5: 66, 129, 255;
  --link-6: 22, 100, 255;
  --link-7: 0, 85, 255;
  --link-8: 0, 68, 204;
  --link-9: var(--arcoblue-9);
  --link-10: var(--arcoblue-10);
  --success-1: 237, 249, 243;
  --success-2: 226, 245, 235;
  --success-3: 141, 216, 179;
  --success-4: 125, 191, 158;
  --success-5: 30, 191, 111;
  --success-6: 28, 178, 103;
  --success-7: 24, 153, 89;
  --success-8: 20, 128, 74;
  --success-9: var(--green-9);
  --success-10: var(--green-10);
  --danger-1: 253, 245, 245;
  --danger-2: 254, 236, 237;
  --danger-3: 250, 158, 163;
  --danger-4: 250, 132, 139;
  --danger-5: 246, 81, 89;
  --danger-6: 219, 55, 63;
  --danger-7: 196, 49, 56;
  --danger-8: 168, 42, 48;
  --danger-9: var(--red-9);
  --danger-10: var(--red-10);
  --warning-1: 254, 248, 235;
  --warning-2: 253, 243, 222;
  --warning-3: 248, 208, 128;
  --warning-4: 229, 192, 118;
  --warning-5: 245, 180, 51;
  --warning-6: 242, 162, 0;
  --warning-7: 222, 148, 0;
  --warning-8: 171, 114, 0;
  --warning-9: var(--orange-9);
  --warning-10: var(--orange-10);
  --color-fill-5: #fff;
  --color-bg-6: rgba(2, 8, 20, .05);
  --alert-component-1: var(--arcoblue-1);
  --alert-component-2: var(--arcoblue-2);
  --alert-component-3: var(--arcoblue-3);
  --alert-component-4: 255, 245, 228;
  --alert-component-5: 255, 244, 244;
  --alert-component-6: 240, 246, 255;
  --alert-component-7: 241, 248, 245;
  --alert-component-8: var(--arcoblue-8);
  --alert-component-9: var(--arcoblue-9);
  --alert-component-10: var(--arcoblue-10);
  --base-grey-1: 236, 237, 237;
  --base-grey-2: 246, 246, 246;
  --base-grey-3: 236, 237, 237;
  --base-grey-4: 160, 162, 167;
  --base-grey-5: 103, 107, 114;
  --base-grey-6: 65, 70, 79;
  --base-grey-7: 52, 56, 64;
  --base-grey-8: 43, 48, 58;
  --base-grey-9: var(--arcoblue-9);
  --base-grey-10: var(--arcoblue-10)
}


.force-icon {
  color: inherit;
  display: inline-block;
  font-style: normal;
  height: 1em;
  vertical-align: -2px;
  width: 1em
}


a:hover {
  cursor: pointer
}

.arco-spin {
  display: inline-block
}

.arco-spin-children {
  position: relative
}

.arco-spin-children:after {
  background-color: var(--color-spin-layer-bg);
  bottom: 0;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity .1s linear;
  width: 100%;
  z-index: 1
}
</style>

<style>
.count-down {
  width: 99px;
  height: 40px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  border: 1px solid var(--color-border-3);
  border-radius: 4px;
}

.arco-btn {
  -webkit-appearance: none;
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  line-height: 1.5715;
  outline: none;
  position: relative;
  transition: all .1s linear;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap
}

.arco-btn.codeBtnPass {
  color: #333 !important;
}

.arco-btn:active {
  transition: none
}

.arco-btn:empty {
  display: inline-block;
  vertical-align: bottom
}

.arco-btn-primary:not(.arco-btn-disabled) {
  background-color: rgb(var(--primary-6));
  border: 1px solid rgb(var(--primary-7));
  color: var(--color-white)
}

.arco-btn-primary:not(.arco-btn-disabled):not(.arco-btn-loading):hover {
  background-color: rgb(var(--primary-5));
  border-color: rgb(var(--primary-6));
  color: var(--color-white)
}

.arco-btn-primary:not(.arco-btn-disabled):not(.arco-btn-loading):active {
  background-color: rgb(var(--primary-7));
  border-color: rgb(var(--primary-8));
  color: var(--color-white)
}

.arco-btn-primary:not(.arco-btn-disabled):focus-visible {
  box-shadow: 0 0 0 2px rgb(var(--primary-3))
}

.arco-btn-secondary:not(.arco-btn-disabled) {
  background-color: var(--color-bg-4);
  border: 1px solid var(--color-border-3);
  color: var(--color-text-2)
}

.arco-btn-secondary:not(.arco-btn-disabled):not(.arco-btn-loading):hover {
  background-color: var(--color-bg-3);
  border-color: rgb(var(--primary-5));
  color: var(--color-text-2)
}

.arco-btn-secondary:not(.arco-btn-disabled):not(.arco-btn-loading):active {
  background-color: var(--color-bg-5);
  border-color: rgb(var(--primary-7));
  color: var(--color-text-2)
}

.arco-btn-secondary:not(.arco-btn-disabled):focus-visible {
  box-shadow: 0 0 0 2px var(--color-neutral-4)
}

.arco-btn-secondary.arco-btn-disabled {
  background-color: var(--color-bg-4);
  border: 1px solid var(--color-border-3);
  color: var(--color-text-4);
  cursor: not-allowed
}

.arco-btn-size-default {
  border-radius: var(--border-radius-small);
  font-size: 13px;
  padding: 0 16px
}

.arco-btn.arco-btn-primary:not(.arco-btn-disabled):not(.arco-btn-not-loading) {
  box-shadow: 0 1px 1px rgba(0, 0, 0, .15)
}

.arco-btn.arco-btn-primary:not(.arco-btn-disabled):not(.arco-btn-not-loading):hover {
  box-shadow: 0 2px 3px rgba(0, 0, 0, .2)
}

.arco-btn.arco-btn-primary:not(.arco-btn-disabled):not(.arco-btn-not-loading):active {
  box-shadow: none
}

.arco-btn.arco-btn-secondary:not(.arco-btn-disabled):not(.arco-btn-not-loading) {
  box-shadow: 0 1px 1px rgba(0, 0, 0, .08)
}

.arco-btn.arco-btn-secondary:not(.arco-btn-disabled):not(.arco-btn-not-loading):hover {
  box-shadow: 0 2px 3px rgba(0, 0, 0, .15)
}

.arco-btn.arco-btn-secondary:not(.arco-btn-disabled):not(.arco-btn-not-loading):active {
  box-shadow: none
}

.arco-btn.arco-btn-secondary.arco-btn-disabled {
  box-shadow: 0 1px 1px rgba(0, 0, 0, .08)
}
</style>
<style>
.arco-input {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--color-bg-white);
  box-sizing: border-box;
  color: var(--color-text-1);
  font-size: 13px;
  line-height: 1.5715;
  outline: none;
  padding-bottom: 5px;
  padding-top: 5px;
  transition: color .1s linear, border-color .1s linear, background-color .1s linear;
  width: 100%
}

.arco-input::-webkit-input-placeholder {
  color: var(--color-text-3)
}

.arco-input::placeholder {
  color: var(--color-text-3)
}

.arco-input:hover {
  background-color: var(--color-bg-white);
  border-color: rgb(var(--primary-5))
}

.arco-input.arco-input-focus,
.arco-input:focus {
  background-color: var(--color-bg-white);
  border-color: rgb(var(--primary-7));
  box-shadow: 0 0 0 0 transparent
}

.arco-input-error {
  background-color: rgb(var(--danger-2));
  border-color: rgb(var(--danger-3))
}

.arco-input-error:hover {
  background-color: rgb(var(--danger-2));
  border-color: rgb(var(--danger-6))
}

.arco-input-error.arco-input-focus,
.arco-input-error.arco-input-focus:hover,
.arco-input-error:focus,
.arco-input-error:focus:hover {
  background-color: var(--color-bg-white);
  border-color: rgb(var(--danger-7));
  box-shadow: 0 0 0 0 var(--color-danger-light-2)
}

.arco-input-inner-wrapper {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--color-bg-white);
  border: 1px solid var(--color-border-3);
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--color-text-1);
  display: inline-flex;
  font-size: 13px;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  position: relative;
  transition: color .1s linear, border-color .1s linear, background-color .1s linear;
  width: 100%
}

.arco-input-inner-wrapper::-webkit-input-placeholder {
  color: var(--color-text-3)
}

.arco-input-inner-wrapper::placeholder {
  color: var(--color-text-3)
}

.arco-input-inner-wrapper:hover {
  background-color: var(--color-bg-white);
  border-color: rgb(var(--primary-5))
}

.arco-input-inner-wrapper.arco-input-inner-wrapper-focus,
.arco-input-inner-wrapper:focus {
  background-color: var(--color-bg-white);
  border-color: rgb(var(--primary-7));
  box-shadow: 0 0 0 0 transparent
}

.arco-input-inner-wrapper-error:hover {
  background-color: rgb(var(--danger-2));
  border-color: rgb(var(--danger-6))
}

.arco-input-inner-wrapper-error .arco-input,
.arco-input-inner-wrapper-error .arco-input:hover {
  background: none;
  box-shadow: none
}

.arco-input-inner-wrapper-error.arco-input-inner-wrapper-focus,
.arco-input-inner-wrapper-error.arco-input-inner-wrapper-focus:hover,
.arco-input-inner-wrapper-error:focus,
.arco-input-inner-wrapper-error:focus:hover {
  background-color: var(--color-bg-white);
  border-color: rgb(var(--danger-7));
  box-shadow: 0 0 0 0 var(--color-danger-light-2)
}

.arco-input-inner-wrapper .arco-input {
  background: none;
  border: none;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0
}

.arco-input-inner-wrapper .arco-input:focus,
.arco-input-inner-wrapper .arco-input:hover {
  background: none;
  box-shadow: none
}

.arco-input-inner-wrapper .arco-input-group-suffix {
  align-items: center;
  display: inline-flex;
  height: 100%;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap
}

.arco-input-inner-wrapper .arco-input-group-suffix>svg {
  font-size: 14px
}

.arco-input-inner-wrapper .arco-input-group-suffix {
  color: var(--color-text-2)
}

.arco-input-group {
  display: table;
  width: 100%
}

.arco-input-group>.arco-input-inner-wrapper {
  border-radius: 0
}

.arco-input-group>:first-child {
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px
}

.arco-input-group>:last-child {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px
}

.arco-input-group-addbefore {
  background-color: var(--color-bg-white);
  border: 1px solid var(--color-border-3);
  box-sizing: border-box;
  color: var(--color-text-2);
  display: table-cell;
  padding: 0 12px;
  vertical-align: middle;
  white-space: nowrap;
  width: 1px
}

.arco-input-group-wrapper {
  display: inline-block;
  vertical-align: top;
  width: 100%
}

.arco-input-group-wrapper.arco-input-custom-height .arco-input-group {
  font-size: 13px
}

.arco-input-group-wrapper.arco-input-custom-height .arco-input-group-addbefore {
  font-size: 13px;
  height: 22px
}

.arco-input-group-wrapper.arco-input-custom-height .arco-input-group-addbefore .arco-select {
  margin-bottom: -1px;
  margin-right: -12px;
  margin-top: -1px
}

.arco-input-group-wrapper.arco-input-custom-height .arco-input-group-addbefore .arco-select .arco-select-view {
  background-color: inherit;
  border-color: transparent;
  border-radius: 0
}

.arco-input-group-wrapper .arco-input-inner-wrapper,
.arco-input-group-wrapper.arco-input-custom-height .arco-input-group-addbefore .arco-select.arco-select-single .arco-select-view,
.arco-input-group-wrapper.arco-input-custom-height .arco-input-inner-wrapper,
.arco-input-group-wrapper.arco-input-custom-height .arco-input-inner-wrapper .arco-input {
  height: 100%
}

.arco-input-password.arco-input-group-wrapper:not(.arco-input-disabled) .arco-input-group-suffix {
  color: var(--color-fill-2);
  cursor: pointer;
  font-size: 12px
}

.arco-input-password.arco-input-group-wrapper .arco-input-password-visibility-icon:focus-visible {
  border-radius: var(--border-radius-small);
  box-shadow: 0 0 0 2px rgb(var(--primary-7))
}

.arco-input.arco-input-focus,
.arco-input:focus {
  box-shadow: 0 0 0 2px rgba(22, 100, 255, .3)
}

.arco-input-error.arco-input-focus,
.arco-input-error:focus {
  box-shadow: 0 0 0 2px rgba(219, 55, 63, .3)
}

.arco-input-inner-wrapper.arco-input-inner-wrapper-focus,
.arco-input-inner-wrapper:focus {
  box-shadow: 0 0 0 2px rgba(22, 100, 255, .3)
}

.arco-input-inner-wrapper-error.arco-input-inner-wrapper-focus,
.arco-input-inner-wrapper-error:focus {
  box-shadow: 0 0 0 2px rgba(219, 55, 63, .3)
}

.arco-input-inner-wrapper.arco-input-inner-wrapper-focus,
.arco-input-inner-wrapper:focus {
  z-index: 1
}

.arco-input-group-addbefore {
  border-radius: 4px 0 0 4px;
  border-right: none
}
</style>
<style>
.arco-select .arco-select-view {
  background-color: var(--color-bg-white);
  border: 1px solid var(--color-border-3);
  color: var(--color-text-1)
}

.arco-select:hover .arco-select-view {
  background-color: var(--color-bg-white);
  border-color: rgb(var(--primary-5))
}

.arco-select .arco-select-suffix-icon {
  color: var(--color-fill-2)
}

.arco-select-no-border .arco-select-view {
  background: none !important;
  border: none !important
}

.arco-select-size-default.arco-select-single .arco-select-view {
  font-size: 13px;
  line-height: 30px;
  padding: 0 11px
}

.arco-select-size-default.arco-select-single input {
  font-size: 13px
}

.arco-select {
  cursor: pointer;
  display: inline-block
}

.arco-select,
.arco-select-view {
  box-sizing: border-box;
  position: relative;
  width: 100%
}

.arco-select-view {
  border-radius: 4px;
  display: flex;
  outline: none;
  text-align: left;
  transition: all .1s linear, padding 0s linear;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.arco-select-view input {
  color: inherit;
  cursor: inherit
}

.arco-select-view input::-webkit-input-placeholder {
  color: var(--color-text-3)
}

.arco-select-view input::placeholder {
  color: var(--color-text-3)
}

.arco-select-single .arco-select-view-input {
  background: transparent;
  border: none;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap
}



.arco-select-single .arco-select-view-value {
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%
}

.arco-select-single .arco-select-view-value-mirror:after,
.arco-select-single .arco-select-view-value:after {
  content: ".";
  font-size: 0;
  line-height: 0;
  visibility: hidden
}

.arco-select-single .arco-select-view .arco-select-hidden {
  opacity: 0;
  position: absolute;
  z-index: -1
}

.arco-select-suffix {
  align-items: center;
  display: flex;
  margin-left: 4px
}

.arco-select-suffix-icon {
  font-size: 16px;
  transition: all .1s linear
}
</style>

<style>
.arco-row {
  flex-flow: row wrap
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


.arco-form {
  display: flex;
  flex-direction: column;
  width: 100%
}

.arco-form-item {
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  width: 100%
}

.arco-form-item-wrapper-flex.arco-col {
  flex: 1 1
}

.arco-form-message {
  color: rgb(var(--danger-6));
  font-size: 12px
}

.arco-form-item-control {
  align-items: center;
  display: flex;
  min-height: 32px;
  width: 100%
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
</style>

<style>
.arco-modal-wrapper {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001
}

.arco-modal-wrapper {
  overflow: auto
}

.arco-modal-wrapper.arco-modal-wrapper-align-center {
  text-align: center;
  white-space: nowrap
}

.arco-modal-wrapper.arco-modal-wrapper-align-center:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  width: 0
}

.arco-tabs {
  overflow: hidden
}

.arco-tabs,
.arco-tabs-header-nav {
  position: relative
}

.arco-tabs-header-nav:before {
  background-color: var(--color-neutral-3);
  bottom: 0;
  clear: both;
  content: "";
  display: block;
  height: 1px;
  left: 0;
  position: absolute;
  right: 0
}

.arco-tabs-header-wrapper {
  display: flex;
  flex: 1 1;
  overflow: hidden
}

.arco-tabs-header {
  display: inline-block;
  position: relative;
  transition: transform .2s cubic-bezier(.34, .69, .1, 1);
  white-space: nowrap
}

.arco-tabs-header-title {
  align-items: center;
  box-sizing: border-box;
  color: var(--color-text-2);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  transition: color .2s linear
}

.arco-tabs-header-title:hover {
  color: rgb(var(--primary-7));
  font-weight: 400
}

.arco-tabs-header-title-active,
.arco-tabs-header-title-active:hover {
  color: rgb(var(--primary-6));
  font-weight: 500
}

.arco-tabs-header-ink {
  background-color: rgb(var(--primary-6));
  height: 2px;
  position: absolute;
  right: auto;
  top: auto;
  transition: left .2s cubic-bezier(.34, .69, .1, 1), width .2s cubic-bezier(.34, .69, .1, 1)
}

.arco-tabs-header-nav-line .arco-tabs-header-title {
  line-height: 1.5715
}

.arco-tabs-header-nav-line .arco-tabs-header-title-text {
  display: inline-block;
  padding: 1px 0;
  position: relative
}

.arco-tabs-header-nav-line .arco-tabs-header-title-text:before {
  background-color: transparent;
  border-radius: var(--border-radius-small);
  bottom: 0;
  content: "";
  left: -8px;
  opacity: 1;
  position: absolute;
  right: -8px;
  top: 0;
  transition: all .2s linear;
  z-index: -1
}


.arco-tabs-header-scroll {
  align-items: center;
  display: flex;
  overflow: hidden;
  position: relative
}

.arco-tabs-content {
  box-sizing: border-box;
  overflow: hidden;
  width: 100%
}

.arco-tabs-content .arco-tabs-content-inner {
  display: flex;
  width: 100%
}

.arco-tabs-content .arco-tabs-content-item {
  flex-shrink: 0;
  height: 0;
  overflow: hidden;
  width: 100%
}

.arco-tabs-content .arco-tabs-content-item.arco-tabs-content-item-active {
  height: auto
}

.arco-tabs-header-ink {
  border-radius: 4px 4px 0 0;
  bottom: 1px
}
</style>

<style>
.pc_height-MzOLkZ {
  padding-top: 26px
}

.layoutNew-s99CBg {
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  background: url('../assets/login-bg.jpeg') no-repeat;
}

.layoutNew-s99CBg .header-V8bS8f {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 32px
}

.layoutNew-s99CBg .header-V8bS8f img {
  cursor: pointer;
  display: block;
  max-height: 40px
}

.layoutNew-s99CBg .header-V8bS8f .changeLanguage-wLJyhE {
  margin-right: 41px;
  margin-top: 8px;
  width: 106px
}

.layoutNew-s99CBg .header-V8bS8f .changeLanguage-wLJyhE .arco-select-view {
  height: 22px !important;
  line-height: 22px !important
}

.layoutNew-s99CBg .header-V8bS8f .changeLanguage-wLJyhE .arco-select-view-selector {
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  text-align: end !important
}

.layoutNew-s99CBg .container-YxxiFS {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: calc(100vh - 125px);
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 650px;
  padding: 0 40px
}

.layoutNew-s99CBg .leftBanner-NFCN12 {
  align-items: center;
  display: flex;
  flex: 1 1;
  height: 100%;
  position: relative
}

.layoutNew-s99CBg .leftBanner-NFCN12 .hotspot-o3yTUu {
  max-width: 100%;
  min-height: 650px
}

.layoutNew-s99CBg .leftBanner-NFCN12 img {
  max-width: 540px;
  object-fit: contain;
  width: 100%
}


@media screen and (max-width:1200px) and (min-width:768px) {
  .layoutNew-s99CBg .container-YxxiFS {
    min-width: 768px;
    width: 100%
  }

  .layoutNew-s99CBg .leftBanner-NFCN12 {
    display: none
  }


}

@media screen and (max-width:768px) {
  .layoutNew-s99CBg .container-YxxiFS {
    min-width: unset;
    width: 100%
  }

  .layoutNew-s99CBg .leftBanner-NFCN12 {
    display: none
  }

}

.loginCard-w1Ov0n {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .05);
  box-sizing: border-box;
  min-height: 632px;
  position: relative;
  width: 476px
}

.idp-login-JaXZHY {
  flex-wrap: wrap;
  line-height: 20px
}

.idp-login-JaXZHY .divider-AEiTI9 {
  margin: 32px 0 16px 0
}

.idp-login-JaXZHY .divider-AEiTI9 .arco-divider-text {
  color: #80838a;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px
}

.text-PdHKDz {
  color: #606a78;
  display: flex;
  font-size: 14px;
  justify-content: space-between
}

.idps-rZewKm {
  width: 100%
}

.idps-rZewKm,
.idps-rZewKm .logo-gkhwGl {
  align-items: center;
  display: flex;
  justify-content: center
}

.idps-rZewKm .logo-gkhwGl {
  border: 1px solid #eaedf1;
  border-radius: 32px;
  box-sizing: border-box;
  height: 32px;
  width: 32px
}

.idps-rZewKm .logo-gkhwGl:hover {
  background: #f3f7ff;
  border: 1px solid #97bcff
}

.idps-rZewKm .logo-gkhwGl+.logo-gkhwGl {
  margin-left: 12px
}

.idps-rZewKm .Mail-knTM9E {
  align-items: center;
  border: 1px solid #eaedf1;
  border-radius: 32px;
  box-sizing: border-box;
  color: #41464f;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  justify-content: center;
  line-height: 20px
}

.idps-rZewKm .Mail-knTM9E .icon-Cd5BLR {
  color: #000;
  font-size: 16px;
  margin-right: 10px
}

.idps-rZewKm .Account-fM_LcT:hover,
.idps-rZewKm .Account-fM_LcT:hover .icon-Cd5BLR,
.idps-rZewKm .Mail-knTM9E:hover,
.idps-rZewKm .Mail-knTM9E:hover .icon-Cd5BLR {
  color: #1664ff
}

.idps-rZewKm .Mail-knTM9E {
  min-width: 81px;
  width: 81px
}
</style>

<style>
body,
html {
  min-width: 300px !important
}

.linkWrap-9KWefP {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 5px
}

.linkWrap-9KWefP .divide-IPg32G {
  margin: 0 4px
}

.linkWrap-9KWefP .text-FipNf1 {
  color: #41464f;
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px
}

.linkWrap-9KWefP .text-FipNf1:hover {
  color: #1664ff
}


.layoutSpin-pr7cPJ .arco-spin-children:after {
  border-radius: 20px
}
.layoutSpin-pr7cPJ {
  width: 476px;
}


.layoutSpin-pr7cPJ .cardHasTab-Uzr9RE {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 48px 48px 32px
}



.accountTab-uAbUd4 {
  margin-top: 32px
}

.accountTab-uAbUd4 .arco-tabs-header-nav:before {
  display: none
}

.accountTab-uAbUd4 .arco-tabs-header-title {
  margin: 0;
  padding: 8px 0 6px 0
}


.accountTab-uAbUd4 .arco-tabs-header-title .arco-tabs-header-title-text {
  font-size: 16px;
  font-weight: 500;
  line-height: 22px
}



.telIdpForm-U0cPiZ {
  margin-top: 16px
}

.telIdpForm-U0cPiZ .arco-form-item {
  margin-bottom: 20px
}

.telIdpForm-U0cPiZ .arco-form-item.arco-form-item-error {
  margin-bottom: 0
}

.telIdpForm-U0cPiZ .arco-form-message {
  line-height: 20px;
  min-height: 20px
}

.telIdpForm-U0cPiZ .input-lInQvs {
  height: 40px
}

.telIdpForm-U0cPiZ .input-lInQvs .arco-input,
.telIdpForm-U0cPiZ .input-lInQvs .arco-input-group {
  height: 38px
}

.telIdpForm-U0cPiZ .input-lInQvs .arco-input-inner-wrapper-focus {
  border-radius: 4px
}

.telIdpForm-U0cPiZ .bottomFormItem-O0fRNW {
  margin-bottom: 12px
}

.telIdpForm-U0cPiZ .btn-M2kVma {
  border-radius: 4px;
  box-shadow: 0 0 0 1px #05f, 0 2px 1px rgba(0, 0, 0, .15);
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 22px;
  margin: 20px 0 12px 0;
  width: 100%
}

.telIdpForm-U0cPiZ .verify-HwYJQ9 {
  display: flex
}

.telIdpForm-U0cPiZ .verify-HwYJQ9 .control-FQPmJc {
  flex: 1 1
}

.telIdpForm-U0cPiZ .verify-btn-cPZHKh {
  height: 40px;
  margin-left: 12px;
  min-width: 98px
}

.telIdpForm-U0cPiZ .protocol-eGDdjF {
  color: #41464f;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 4px
}

.telIdpForm-U0cPiZ .protocol-eGDdjF a {
  color: rgb(0, 85, 255);
}

.telIdpForm-U0cPiZ .arco-form-item .arco-input-group-addbefore .arco-select .arco-select-view-value {
  margin-top: 4px
}

.telIdpForm-U0cPiZ .arco-form-item-error .arco-input-group-addbefore .arco-select {
  margin-left: -12px
}


.submitBtn {
  width: 100%;
  height: 40px !important;
}

.title-EHSTny {
  color: #0c0d0e;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: .003em;
  line-height: 32px
}
</style>
