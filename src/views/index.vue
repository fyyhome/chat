<template>
  <div>
    <div class="containner index-bg" v-show="!(matching || nonum || allnum)">
      <sex-table v-show="isFirstLogin" @select-sex="getSex($event)"></sex-table>
      <button class="btn-text" @click="match()">开始匿名聊天</button>
      <p class="btn-bottom">剩余聊天次数: {{count}}</p>
    </div>
    <div class="containner match-bg" v-show="matching">
      <div class="matching-wrap">
        <div class="headimg-wrap"><img :src="avatar" alt=""></div>
        <div><img src="../assets/image/transmit.png" alt=""></div>
        <div class="headimg-wrap match-friend"><img src="" alt=""></div>
      </div>
      <p>多次收获好评有机会获得无限次数匹配机会哦～</p>
    </div>
    <div class="containner match-nonum" v-show="nonum">
      <button class="nonum-bt" disabled>匹配次数已用完</button>
      <p>下次活动再见哦～遇见佳缘2.0等你</p>
    </div>
    <div class="containner match-allnum" v-show="allnum">
      <button class="nonum-bt allnum-bt" disabled>无限次数匹配</button>
      <p>获得多次好评有机会无限匹配哦～</p>
    </div>
  </div>
</template>

<script>
import SexTable from '../components/SexTable.vue'
import { getUserAvatar } from '../assets/js/getAppData'
export default {
  data () {
    return {
      sex: '',
      isFirstLogin: false,
      count: this.$store.state.count,
      avatar: this.$store.state.avatar,
      matching: false,
      nonum: false,
      allnum: false
    }
  },
  components: {
    SexTable
  },
  methods: {
    getSex (value) {
      this.sex = value === '男' ? 0 : 1
      console.log(this.sex)
      this.$axios.get(`/api/updategender?gender=${this.sex}`).then((res) => {
        if (res.data.code !== 0) {
          console.log('修改失败')
        }
      })
    },
    getUserInfo () {
      this.$axios.get('/api/come').then((res) => {
        if (res.data.code === 110) {
          this.isFirstLogin = true
        } else if (res.data.code === 0) {
          this.sex = res.data.gender
        } else {
          console.log(res.data.msg)
        }
      })
    },
    match () {
      if (this.count > 0) {
        this.matching = true
        this.$axios.get('/api/match').then((res) => {
          if (res.data.code === 0) {
            this.$store.commit('setChatID', res.data.chatId)
            this.$store.commit('descrement')
            this.matching = false
            this.$router.push('/chat')
          } else {
            this.matching = false
            console.log(res.data.msg)
          }
        }).catch((error) => {
          this.matching = false
          console.log(error + '')
        })
      } else {
        this.nonum = true
      }
    }
  },
  created () {
    this.getUserInfo()
    getUserAvatar().then().catch((error) => {
      console.log(error + '')
    })
  }
}
</script>

<style scoped>
  .containner{
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .index-bg{
    background-image: url('../assets/image/background.gif');
  }
  .match-bg{
    background-image: url('../assets/image/background1.png');
  }
  .match-nonum{
    background-image: url('../assets/image/background3.png');
  }
  .match-allnum{
    background-image: url('../assets/image/background2.png');
  }
  .matching-wrap{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 68vw;
    height: 14vh;
    position: absolute;
    top: 65vh;
    left: 50%;
    transform: translateX(-50%);
  }
  .match-bg > p{
    position: absolute;
    top: 85vh;
    display: inline-block;
    max-width: 50vw;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
  }
  .match-nonum,.match-allnum > p{
    position: absolute;
    max-width: 60vw;
    top: 90vh;
    color: white;
    font-size: 12px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  .headimg-wrap{
    width: 16vw;
    height: 16vw;
    background-color: white;
    border-radius: 50%;
    /* display: flex;
    align-items: center; */
  }
  .match-friend{
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/image/who.png');
  }
  .headimg-wrap > img{
    width: 16vw;
    height: 16vw;
    border-radius: 50%;
  }
  .nonum-bt{
    width: 45vw;
    height: 6vh;
    border-radius: 12px;
    position: absolute;
    top: 80vh;
    left: 50%;
    color: white;
    background-color: grey;
    text-align: center;
    vertical-align: middle;
    transform: translateX(-50%);
    border: 0;
  }
  .allnum-bt{
    background-color: blue;
  }
  .btn-text {
    display: block;
    margin: 0 auto;
    padding: 0.5vh 0;
    position: relative;
    top: 81vh;
    border: 0;
    border-radius: 8px;
    background-color: red;
    width: 45%;
    text-align: center;
    opacity: 0.6;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18px;
    color: whitesmoke;
  }
  .btn-bottom {
    position: relative;
    top:84vh;
    text-align: center;
    font-size: 12px;
    color: black;
  }
</style>
