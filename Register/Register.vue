<!--  -->
<template>
  <!--on表示显示，off表示关闭-->
  <div id="app">
    <a href="./Profile.html">
      <h1>返回</h1>
    </a>
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">吃了么外卖</h2>
          <div class="login_header_title">
            <a
              href="javascript:;"
              :class="{ on: loginMethod }"
              @click="
                loginMethod
                  ? (loginMethod = loginMethod)
                  : (loginMethod = !loginMethod)
              "
              >短信登录</a
            >
            <a
              href="javascript:;"
              :class="{ on: !loginMethod }"
              @click="
                !loginMethod
                  ? (loginMethod = loginMethod)
                  : (loginMethod = !loginMethod)
              "
              >密码登录</a
            >
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="submitLogin()">
            <div :class="{ on: loginMethod }">
              <section class="login_message">
                <input
                  type="tel"
                  maxlength="11"
                  placeholder="手机号"
                  v-model="telNum"
                />
                <button
                  :disabled="!isVerification"
                  class="get_verification"
                  :class="{ current: isVerification }"
                  @click.prevent="getCode()"
                >
                  {{
                    computeTime == 0 ? "获取验证码" : `倒计时${computeTime}秒`
                  }}
                </button>
              </section>
              <section class="login_verification">
                <input
                  type="tel"
                  maxlength="8"
                  placeholder="验证码"
                  v-model="telCode"
                />
              </section>
              <section class="login_hint">
                温馨提示：未注册吃了没外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{ on: !loginMethod }">
              <section>
                <section class="login_message">
                  <input
                    type="tel"
                    maxlength="11"
                    placeholder="手机/邮箱/用户名"
                    v-model="userName"
                  />
                </section>
                <section class="login_verification">
                  <input
                    :type="isPwd ? 'text' : 'password'"
                    maxlength="8"
                    placeholder="密码"
                    v-model="userPwd"
                  />
                  <div
                    class="switch_button off"
                    :class="!isPwd ? 'off' : 'on'"
                    @click="changeShowPwd()"
                  >
                    <div class="switch_circle" :class="{ right: isPwd }"></div>
                    <span class="switch_text">{{ isPwd ? "abc" : "···" }}</span>
                  </div>
                </section>
                <section class="login_message">
                  <input
                    type="text"
                    maxlength="11"
                    placeholder="验证码"
                    v-model="userCaptcha"
                  />
                  <img
                    class="get_verification"
                    :src="capImg"
                    alt="captcha"
                    @click="updataSrc()"
                  />
                </section>
              </section>
            </div>

            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou2"></i>
        </a>
      </div>
      <AlterWin v-if="alterShow" :msg="alterTxt" @abc="closeAlert" />
    </section>
  </div>
</template>

<script>
import AlterWin from "../../components/AlterWin/AlterWin";
import { getcaptchas, getPwdLogin } from "../../services/getDate";
export default {
  data() {
    return {
      loginMethod: true,
      telNum: "",
      computeTime: 0,
      isPwd: false,
      alterShow: false,
      alterTxt: "",
      telCode: "",
      capImg: "",
      userName: "",
      userPwd: "",
      userCaptcha: "",
    };
  },
  components: {
    AlterWin,
  },
  async mounted() {
    this.updataSrc();
  },
  methods: {
    getCode() {
      if (this.computeTime == 0) {
        this.computeTime = 30;
        let timeId = setInterval(() => {
          this.computeTime--;
          if (this.computeTime == 0) {
            clearInterval(timeId);
          }
        }, 1000);
      }
    },
    changeShowPwd() {
      this.isPwd = !this.isPwd;
    },
    async submitLogin() {
      let result
      let { loginMethod, telNum, telCode } = this;
      if (loginMethod) {
        if (!telNum) {
          this.alterTxt = "手机号码不能为空";
          this.alterShow = true;
        } else if (!telCode) {
          this.openAlert("手机验证码错误");
          this.alterShow = true;
        } else {
          console.log(0);
         result = await getPwdLogin({
            username: this.userName,
            password: this.userPwd,
            captcha_code: this.userCaptcha
          })
          console.log(result)
        }
        if (result.user_id) {
          this.$router.replace("/Profile");
        } else {
          this.openAlert(result.msg);
        }
      }
    },
    async updataSrc() {
      let rsC = await getcaptchas();
      console.log(rsC);
      this.capImg = rsC.code;
    },
    openAlert(alertMsg) {
      this.alterTxt = alertMsg;
      this.alterShow = true;
    },
    closeAlert() {
      this.alterTxt = "";
      this.alterShow = false;
    },
  },

  computed: {
    isVerification() {
      let rs = /^1[345678]\d{9}$/.test(this.telNum);
      return rs;
    },
  },
};
</script>

<style  lang='stylus'>
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}

.loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}

.login_logo {
  font-size: 40px;
  font-weight: bold;
  color: rgba(240, 109, 109, 0.897);
  text-align: center;
}

.login_header_title {
  padding-top: 40px;
  text-align: center;
}

.login_header_title >a {
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}

.login_header_title >a:first-child {
  margin-right: 40px;
}

.login_header_title >a.on {
  color: rgba(240, 109, 109, 0.897);
  font-weight: 700;
  border-bottom: 2px solid rgba(240, 109, 109, 0.897);
}

.login_content >form >div {
  display: none;
}

.login_content >form >div.on {
  display: block;
}

.login_content >form >div input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px rgba(240, 109, 109, 0.897);
}

.login_content >form >div input:focus {
  border: 1px solid rgba(240, 109, 109, 0.897);
}

.login_content >form >div .login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}

.login_content >form >div .login_message .get_verification {
  position: absolute;
  top: 40%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;

  &.current {
    color: #e65c5c;
  }

  font-size: 14px;
  background: transparent;
}

.login_content >form >div .login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}

.login_content >form >div .login_verification .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 30px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.login_content >form >div .login_verification .switch_button.off {
  background: #fff;
}

.login_content >form >div .login_verification .switch_button.off .switch_text {
  float: right;
  color: #ddd;
}

.login_content >form >div .login_verification .switch_button.on {
  background: rgba(240, 109, 109, 0.897);
}

.login_content >form >div .login_verification .switch_button >.switch_circle {
  position: absolute;
  top: -1px;
  left: -1px;

  &.right {
    left: 15px;
  }

  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(240, 109, 109, 0.897);
  transition: transform 0.3s;
}

.login_content >form >div .login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}

.login_content >form >div .login_hint >a {
  color: #0085ff;
}

.login_content >form .login_submit {
  display: block;
  width: 100%;
  height: 38px;
  margin-top: 30px;
  border-radius: 4px;
  background: rgba(240, 109, 109, 0.897);
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 38px;
  border: 0;
}

.login_content .about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: rgba(240, 109, 109, 0.897);
}

.go_back {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
}
</style>