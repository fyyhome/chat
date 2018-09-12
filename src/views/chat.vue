<template>
    <div class="wrap">
        <canvas id="myCanvas" style="border: 0">Your browser does not support the HTML5 canvas tag.
        </canvas>
        <div class="container">
          <div class="title">
            <img src="../assets/image/boy.png" alt="">
            <p>{{question}}</p>
          </div>
           <ul>
             <li v-for="(item, index) of msgs" :key="index">
               <div :class="[item.type === 'send' ? 'send-wrap' : 'recive-wrap']">
                 <img class="head-img" :src="item.type === 'send' ? myAvatar : friendAvatar" alt="headImg" />
                 <div class="message-wrap">{{item.text}}</div>
               </div>
             </li>
           </ul>
           <div class="bt-wrap">
             <input type="text" name="sendText" v-model="msgText">
             <button id="sendBT" @click="sendMsg()">发送</button>
           </div>
        </div>
        <tip title="还剩一分钟哦!" v-if="remainProgress.time < 60 && remainProgress.time >= 59"></tip>
        <ping-jia v-if="remainProgress.time <= 0" @pingjia-click="setPingJIa($event)" title="聊天结束了啦，评价一下TA吧～"></ping-jia>
    </div>
</template>

<script>
import backgroundCanvasFn from '../assets/js/chatCanvas'
import Tip from '../components/Tip'
import PingJia from '../components/pingjia'
export default {
  data () {
    return {
      Ques: [
        '有什么好玩的游戏推荐？',
        '分享一部你最喜欢的电影',
        '这个假期里你经历过什么有意思的事情？',
        '分享一个你自己特有的小技能？',
        '或许可以从你最喜欢的小动物开始聊',
        '介绍介绍你喜欢用的小众app吧！',
        '可以分享一下假期里有意义的事情吗？',
        '夏天你有什么解暑续命大法？',
        '也许可以从聊聊你们的专业开始',
        '或许可以先来聊聊你们最近在看的书？',
        '或许可以从聊喜欢的音乐开始',
        '可以从最近在玩的游戏开始聊',
        '或许可以聊聊你喜不喜欢现在的专业？'
      ],
      question: '',
      message: '1.随机匹配 ，优先男女2.如遇违规,长按举报3.时间不定，喜欢抓紧4.多次好评，无限匹配5.随机奖励，加时续命',
      msgs: [],
      socket: null,
      msgText: '',
      remainProgress: {
        time: 180
      },
      tipStatus: false,
      pingjia: null,
      myAvatar: null,
      friendAvatar: null
    }
  },
  components: {
    Tip,
    PingJia
  },
  methods: {
    getQ () {
      let index = Math.floor((Math.random() * this.Ques.length))
      this.question = this.Ques[index]
    },
    setPingJIa (evt) {
      this.pingjia = evt
      this.$axios.post('/api/evaluate', {
        chatId: this.$store.state.chatId,
        evaluate: this.pingjia
      }).then((res) => {
        if (res.data.code === 0) {
          this.$router.push({ name: 'index', params: { msg: 'pingjia' } })
        } else {
          console.log(res.data.msg)
        }
      }).catch((error) => {
        console.log(error + '')
      })
    },
    initial () {
      this.socket = new WebSocket('ws://120.27.137.151:9976/api/ws?token=' + this.$store.state.token)
      this.socket.onopen = (evt) => {
        document.getElementById('sendBT').disabled = false
      }
      this.socket.onmessage = (evt) => {
        let res = JSON.parse(evt.data)
        this.msgs.push({
          text: res.msg,
          type: 'recive'
        })
        console.log(res)
      }
      this.socket.onerror = (evt) => {
        console.error(evt)
        document.getElementById('sendBT').disabled = true
      }
      this.socket.onclose = (evt) => {
        document.getElementById('sendBT').disabled = true
      }
    },
    sendMsg () {
      if (this.msgText !== '') {
        this.socket.send(this.msgText)
        this.msgs.push({
          text: this.msgText,
          type: 'send'
        })
        this.msgText = ''
      }
    },
    getAvatars () {
      let random = Math.floor(2 * Math.random())
      if (this.$store.state.mySex === 0) {
        this.myAvatar = this.$store.getters.getAvatarArr(random).boy
      } else {
        this.myAvatar = this.$store.getters.getAvatarArr(random).girl
      }
      if (this.$store.state.friendSex === 0) {
        this.friendAvatar = this.$store.getters.getAvatarArr(random).boy
      } else {
        this.friendAvatar = this.$store.getters.getAvatarArr(random).girl
      }
    }
  },
  watch: {
    remainProgress: {
      handler ( newValue, oldValue) {
        if (newValue < 0) {
          this.socket.close()
        }
      },
      deep: true
    }
  },
  created () {
    this.initial()
    this.getQ()
    this.getAvatars()
  },
  mounted () {
    let node = document.getElementById('myCanvas')
    node.width = window.screen.width
    node.height = window.screen.height
    backgroundCanvasFn(node, this.remainProgress)
  }
}
</script>

<style scoped>
  .wrap{
    height: 100vh;
  }
  .container{
    position: absolute;
    top: 0;
    z-index: 1;
    background-color: transparent;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .container > ul > li{
    margin: 15px 0;
  }
  .container > ul > li > div{
    display: flex;
  }
  .send-wrap{
    flex-direction: row-reverse;
  }
  .recive-wrap{
    flex-direction: row;
  }
  .head-img{
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    margin: 0 3vw;
  }
  .message-wrap{
    box-sizing: border-box;
    font-size: 2vh;
    background-color: #ffffff;
    border: 1px solid #ffb5b5;
    border-radius: 8px;
    padding: 6px;
    max-width: 50vw;
    display: flex;
    align-items: center;
    word-break: break-all;
  }
  .title{
    display: flex;
    flex-direction: row;
    max-width: 70vw;
    overflow: hidden;
    height: 8vw;
    background-color: white;
    border: 0;
    border-radius: 5vh;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: PingFang-SC-Regular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #dc7474;
  }
  .title > img{
    width: 8vw;
    height: 8vw;
  }
  .title > p{
    height: 100%;
    padding-left: 2vw;
    line-height: 8vw;
  }
  .bt-wrap{
    width: 90vw;
    position: fixed;
    left: 50%;
    margin-left: -45vw;
    bottom: 4vh;
    display: flex;
    justify-content: space-between;
  }
  .bt-wrap > input{
    width: 75vw;
    height: 5vh;
    border: 0;
    background-color: white;
    border-radius: 8px;
    padding-left: 5px;
    font-family: PingFang-SC-Regular;
    font-size: 1.9vh;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #666666;

  }
  .bt-wrap > button{
    width: 12vw;
    height: 5vh;
    border: 0;
    border-radius: 8px;
    background-color: #d66161;
    font-family: PingFang-SC-Regular;
    font-size: 1.9vh;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .bt-wrap > button:disabled{
    background-color: gray;
  }
</style>
