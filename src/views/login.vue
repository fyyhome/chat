<template>
  <div>
    <div class="wrap_box" :style="{ height: bodyHeight + 'px' }">
        <div class="wrap_top">
            <img src="../assets/image/login_paint.png" alt="">
        </div>
        <form @submit.prevent="onSubmit">
        <div class="wrap_center">
            <div class="input1">
                <div id="u_input">
                    <input type="text" v-model="username" placeholder="请输入学号">
                </div>
            </div>
            <div class="input2">
                <div id="p_input">
                    <input type="password" v-model="password" placeholder="请输入密码">
                </div>
            </div>
            <p class="explain">登录密码为云家园的密码哦~</p>
        </div>
        <div class="wrap_bottom">
            <button type="submit">登录</button>
        </div>
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
      console.log(this.bodyHeight)
    }
  },
  created () {
    this.getHeight()
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
      background-repeat: no-repeat;
      background-image: url('../assets/image/login_background.png');
  }
  .wrap_top{
      display: flex;
      justify-content: center; /*子元素水平居中*/
  }
  .wrap_top img{
      width: 71vw;
      height: 55vh;
  }
  input{
      border: none;
      outline: none;
      background-color: transparent;
  }
  .input1{
      display: flex;
      justify-content: center;
      flex-direction:column;
      align-items:center;
  }
  #u_input{
      display: flex;
      justify-content:center;
      top: 56vh;
      width: 56vw;
      height: 7.5vh;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: url('../assets/image/login_user.png');
      z-index: 999;
  }
  #u_input input{
      /*position: absolute;*/
      /*width: 50vw;*/
      /*height: 7.5vh;*/
      /*padding-left: 22vw;*/
      text-align: center;
      padding-top: 3vh;
      font-family: PingFang-SC-Light;
      font-size: 3.2vh;
      font-weight: normal;
      font-stretch: normal;
      line-height: 3.2vh;
      letter-spacing: 0px;
      color: #ffffff;
  }
  .input2{
      display: flex;
      justify-content: center;
      flex-direction:column;
      align-items:center;
  }
  #p_input{
      margin-top: 6vh;
      display: flex;
      justify-content:center;
      top: 66vh;
      width: 56vw;
      height: 5vh;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: url('../assets/image/login_password.png');
      z-index: 999;
  }
  #p_input input{
      /*position: absolute;*/
      /*width: 50vw;*/
      /*height: 4.5vh;*/
      /*padding-left: 22vw;*/
      text-align: center;
      font-family: PingFang-SC-Light;
      font-size: 3.2vh;
      font-weight: normal;
      font-stretch: normal;
      line-height: 3.2vh;
      letter-spacing: 0px;
      color: #ffffff;
  }
  .wrap_center .explain {
      text-align: center;
      color: #ffffff;
      padding-top: 4vh;
      font-family: PingFang-SC-Light;
      font-size: 2.8vh;
      font-weight: normal;
      font-stretch: normal;
      line-height: 2.3vh;
      letter-spacing: 0px;
  }
.wrap_bottom button{
    position: absolute;
    top: 85vh;
    left: 26.5vw;
    border: none;
    width: 47vw;
    height: 6.4vh;
    background-color: #d7a2e6;
    border-radius: 1vh;
    font-family: PingFang-SC-Regular;
    font-size: 2.5vh;
    font-weight: normal;
    font-stretch: normal;
    line-height: 2.5vh;
    letter-spacing: 0px;
    color: #ffffff;
  }
</style>
