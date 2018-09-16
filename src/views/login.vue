<template>
  <div>
    <div class="wrap_box" :style="{ height: bodyHeight + 'px' }">
        <div class="wrap_top">
            <img src="../assets/image/0_paint.png" alt="">
        </div>
        <form @submit.prevent="onSubmit">
        <div class="wrap_center">
            <div class="input1">
                <div id="u_input">
                    <img src="../assets/image/icon_user.png"><input type="text" v-model="username" placeholder="请输入学号">
                </div>
            </div>
            <div class="input2">
                <div id="p_input">
                    <img src="../assets/image/icon_password.png"><input type="password" v-model="password" placeholder="请输入密码">
                </div>
            </div>
            <p class="explain">（登录密码为云家园的密码哦~）</p>
        </div>
        <div class="wrap_bottom">
            <button type="submit">登录</button>
        </div>
        <div class="icon"><img src="../assets/image/logo.png" alt=""></div>
        </form>
    </div>
    <tip :title="tipTitle" v-show="tipTitle != ''"></tip>
  </div>
</template>

<script>
import Tip from '../components/Tip'
export default {
  data () {
    return {
      username: '',
      password: '',
      tipTitle: '',
      bodyHeight: ''
    }
  },
  components: {
    Tip
  },
  methods: {
    onSubmit () {
      this.$axios.post('api/login', { 'userId': this.username, 'password': this.password })
        .then((res) => {
          if (res.data.status === 1) {
            this.$store.commit('setToken', res.data.token)
            this.$store.commit('setIsLogin', true)
            this.$router.push('/index')
          } else {
            this.tipTitle = res.data.message
            setTimeout(() => {
              this.tipTitle = ''
            }, 800)
          }
        })
    },
    getHeight () {
      this.bodyHeight = document.documentElement.clientHeight
      document.documentElement.style.fontSize = this.bodyHeight / 20 + 'px'
    }
  },
  created () {
    this.getHeight()
  },
  mounted() {
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT'){
        document.activeElement.scrollIntoView({behavior: "smooth"})
      }
    })
  }
}
</script>

<style scoped>
  .wrap_box{
      margin: 0px;
      padding: 0px;
      width: 100vw;
      height: 100vh;
      background-size: 100% 100%;
      /*background-repeat: no-repeat;*/
      /*background-image: url('../assets/image/login_background.png');*/
  }
  .wrap_top{
      display: flex;
      justify-content: center;
  }
  .wrap_top img{
      width: 71vw;
      height: 11.5rem;
  }
  input{
      border: none;
      outline: none;
      background-color: transparent;
  }
  input::-webkit-input-placeholder{
      font-size: 0.54rem;
      color: #ababab;
  }
  input:-moz-placeholder {
      font-size: 0.54rem;
      color: #ababab;
  }
  input::-moz-placeholder {
      font-size: 0.54rem;
      color: #ababab;
  }
  input:-ms-input-placeholder {
      font-size: 0.54rem;
      color: #ababab;
  }
  .input1{
      display: flex;
      justify-content: center;
      flex-direction:column;
      align-items:center;
  }
  #u_input{
      display: flex;
      width: 46vw;
      margin: 1rem 0;
  }
  #u_input img{
      padding-top: 0.1rem;
      width: 0.81rem;
      height: 0.74rem;
  }
  #u_input input{
      margin-left: 0.1rem;
      text-align: center;
      width: 40vw;
      height: 0.8rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.54rem;
      letter-spacing: 0px;
      font-size: 0.54rem;
      color: #ababab;
      border-bottom: 1px solid #ed847d;
  }
  .input2{
      display: flex;
      justify-content: center;
      flex-direction:column;
      align-items:center;
  }
  #p_input{
      display: flex;
      width: 46vw;
  }
  #p_input img{
      width: 0.68rem;
      height: 1.01rem;
  }
  #p_input input{
      margin-top: 0.1rem;
      margin-left: 0.22rem;
      text-align: center;
      width: 40vw;
      height: 0.8rem;
      line-height: 0.54rem;
      letter-spacing: 0px;
      font-size: 0.54rem;
      color: #ababab;
      border-bottom: 1px solid #ed847d;
  }
  .wrap_center .explain {
      text-align: center;
      color: #ed847d;
      padding-top: 0.64rem;
      font-size: 0.46rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.46rem;
      letter-spacing: 0px;
  }
  .wrap_bottom button{
    position: absolute;
    top: 16.91rem;
    left: 26.9vw;
    border: none;
    width: 47.1vw;
    height: 1.28rem;
    background-color: #f37a96;
    border-radius: 0.2rem;
    font-family: PingFang-SC-Regular;
    font-size: 0.54rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.54rem;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .icon{
      position: absolute;
      width: 0.84rem;
      height: 0.72rem;
      bottom: 0.8rem;
      right: 0.8rem;
  }
</style>
