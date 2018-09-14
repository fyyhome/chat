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
      <p>多次收获好评有机会获得无限次数匹配机会～</p>
    </div>
    <div class="containner match-nonum" v-show="nonum">
      <button class="nonum-bt" disabled>匹配次数已用完</button>
      <p>下次活动再见～遇见佳缘2.0等你</p>
    </div>
    <div class="containner match-allnum" v-show="allnum">
      <button class="nonum-bt allnum-bt" disabled>无限次数匹配</button>
      <p>获得多次好评有机会无限匹配～</p>
    </div>
    <tip :title="tipTitle" v-show="tipTitle != ''"></tip>
  </div>
</template>

<script>
import SexTable from '../components/SexTable.vue'
import { getUserAvatar } from '../assets/js/getAppData'
import Tip from '../components/Tip'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      sex: '',
      isFirstLogin: false,
      count: this.$store.state.count,
      avatar: this.$store.state.avatar,
      matching: false,
      nonum: false,
      allnum: false,
      tipTitle: ''
    }
  },
  components: {
    SexTable,
    Tip
  },
  methods: {
    getSex (value) {
      this.sex = value === '男' ? 0 : 1
      console.log(this.sex)
      this.$axios.get(`/api/updategender?gender=${this.sex}`).then((res) => {
        if (res.data.code !== 0) {
          console.log('修改失败')
        } else {
          this.$store.commit('setMySex', this.sex)
        }
      })
    },
    getUserInfo () {
      this.$axios.get('/api/come').then((res) => {
        if (res.data.code === 110) {
          this.isFirstLogin = true
        } else if (res.data.code === 0) {
          this.sex = res.data.gender
          this.$store.commit('setMySex', this.sex)
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
            this.$store.commit('setFriendSex', res.data.objGender)
            this.matching = false
            this.$router.push('/chat')
          } else {
            this.matching = false
            if (res.data.code === 3) {
              this.tipTitle = '次数已用完'
              setTimeout(() => {
                this.tipTitle = ''
              }, 800)
            }
            console.log(res.data.msg)
          }
        }).catch((error) => {
          this.matching = false
          this.tipTitle = '未匹配到TA哦～'
          setTimeout(() => {
            this.tipTitle = ''
          }, 800)
          console.log(error + '')
        })
      } else {
        this.nonum = true
      }
    },
    fetchRouterMsg () {
      if (this.$route.params.msg === 'pingjia') {
        this.tipTitle = '评价成功'
        setTimeout(() => {
          this.tipTitle = ''
        }, 800)
      } else {
        this.tipTitle = ''
      }
    }
  },
  created () {
    this.getUserInfo()
    this.fetchRouterMsg()
    getUserAvatar().then().catch((error) => {
      console.log(error + '')
    })
  },
  watch: {
    '$router': 'fetchRouterMsg'
  },
  computed: {
    myCount () {
      // this.count = this.$store.state.count
      return this.count
    }
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
    font-family: PingFang-SC-Regular;
    font-size: 2vh;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .match-nonum > p,.match-allnum > p{
    position: absolute;
    max-width: 60vw;
    top: 90vh;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-family: PingFang-SC-Regular;
    font-size: 2vh;
    letter-spacing: 0px;
    color: #ffffff;
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
    height: 7.5vh;
    border-radius: 10px;
    position: absolute;
    top: 80vh;
    left: 50%;
    color: #ffffff;
    font-size: 2.8vh;
    font-family: PingFang-SC-Regular;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    background-color: grey;
    text-align: center;
    vertical-align: middle;
    transform: translateX(-50%);
    border: 0;
  }
  .allnum-bt{
    background-color: #49b2e3;
  }
  .btn-text {
    display: block;
    margin: 0 auto;
    padding: 0.5vh 0;
    position: relative;
    top: 81vh;
    border: 0;
    border-radius: 10px;
    background-color: #ed847d;
    width: 45%;
    height: 7.5vh;
    text-align: center;
    font-size: 2.8vh;
    font-family: PingFang-SC-Regular;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .btn-bottom {
    position: relative;
    top:83vh;
    text-align: center;
    font-family: PingFang-SC-Regular;
    font-size: 2vh;
    font-weight: normal;
    font-stretch: normal;
    line-height: 48px;
    letter-spacing: 0px;
    color: #696969;
  }
</style>
