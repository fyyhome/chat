<template>
    <div class="wrap">
        <canvas id="myCanvas" style="border: 0">Your browser does not support the HTML5 canvas tag.
        </canvas>
        <div class="container">
          <div class="title">
            <img src="../assets/image/icon_Q.png" alt="">
            <p>{{myTitle}}</p>
          </div>
           <ul class="msg-ul" id="msgul">
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
        <tip title="还剩一分钟哦!" v-if="remainProgress.time < 60 && remainProgress.time >= 58.5"></tip>
        <tip :title="tipTitle" v-if="tipTitle !== ''"></tip>
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
      message: '1.随机匹配 ，优先男女2.如遇违规,长按举报3.时间不定，喜欢抓紧4.多次好评，无限匹配5.随机奖励，加时续命',
      msgs: [],
      socket: null,
      msgText: '',
      remainProgress: {
        time: 180
      },
      pingjia: null,
      tipTitle: ''
    }
  },
  components: {
    Tip,
    PingJia
  },
  methods: {
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
        if (res.code === 5) {
          this.tipTitle = '用户已下线'
          setTimeout(() => {
            this.tipTitle = ''
            this.$router.push('/index')
          }, 1500)
        } else {
          this.msgs.push({
            text: res.msg,
            type: 'recive'
          })
        }
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
        setTimeout(this.autoScroll, 200)
        this.msgText = ''
      }
    },
    autoScroll () {
      let node = document.getElementById('msgul')
      node.scrollTop = node.scrollHeight + 10
    },
    getHeight () {
      this.bodyHeight = document.documentElement.clientHeight
      document.documentElement.style.fontSize = this.bodyHeight / 20 + 'px'
    }
  },
  watch: {
    remainProgress: {
      handler (newValue, oldValue) {
        if (newValue < 0) {
          this.socket.close()
        }
      },
      deep: true
    }
  },
  created () {
    this.initial()
    this.getHeight()
  },
  mounted () {
    let node = document.getElementById('myCanvas')
    node.width = window.innerWidth
    node.height = window.innerHeight
    backgroundCanvasFn(node, this.remainProgress)
  },
  computed: {
    myTitle () {
      return this.$store.state.title
    },
    myAvatar () {
      return this.$store.state.avatar
    },
    friendAvatar () {
      return this.$store.state.friendAvatar
    }
  }
}
</script>

<style scoped>
  #myCanvas{
    overflow: hidden;
  }
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
    font-size: 14px;
    background-color: #ffffff;
    border: 1px solid #ffb5b5;
    border-radius: 8px;
    padding: 6px;
    margin: 1.6vh 0;
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
    border-radius: 1rem;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
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
    position: absolute;
    left: 50%;
    margin-left: -45vw;
    bottom: 0.8rem;
    display: flex;
    justify-content: space-between;
  }
  .bt-wrap > input{
    width: 75vw;
    height: 1rem;
    border: 0;
    background-color: white;
    border-radius: 8px;
    padding-left: 5px;
    font-size: 0.42rem;
    letter-spacing: 0px;
    color: #666666;

  }
  .bt-wrap > button{
    width: 12vw;
    height: 1rem;
    border: 0;
    border-radius: 8px;
    background-color: #d66161;
    font-size: 0.42rem;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .bt-wrap > button:disabled{
    background-color: gray;
  }
  .msg-ul{
    max-height: 15rem;
    overflow-y: scroll;
  }
</style>
