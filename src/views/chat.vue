<template>
    <div class="wrap">
        <canvas id="myCanvas" style="border: 0">Your browser does not support the HTML5 canvas tag.
        </canvas>
        <div class="container">
           <ul>
             <li>
               <div>
                 <img class="head-img" src="../assets/image/boy.png" alt="headImg" />
                 <div class="message-wrap">这里是消息！！!23333333333333333333333333333333333333333333333333333333333333333333333333333333</div>
               </div>
             </li>
           </ul>
        </div>
    </div>
</template>

<script>
import backgroundCanvasFn from '../assets/js/chatCanvas'
export default {
  data () {
    return {
      Ques: [
        '有什么好玩的游戏推荐嘛？',
        '分享一部你最喜欢的电影吧',
        '这个假期里你经历过什么有意思的事情呢？',
        '分享一个你自己特有的小技能？',
        '或许可以从你最喜欢的小动物开始聊喔～',
        '介绍介绍你喜欢用的小众app吧！',
        '可以分享一下假期里有意义的事情吗？',
        '夏天你有什么解暑续命大法呢？',
        '也许可以从聊聊你们的专业开始喔～',
        '或许可以先来聊聊你们最近在看的书？',
        '或许可以从聊喜欢的音乐开始喔～',
        '可以从最近在玩的游戏开始聊喔~',
        '或许可以聊聊你喜不喜欢现在的专业？'
      ],
      question: '',
      message: '1.随机匹配 ，优先男女2.如遇违规,长按举报3.时间不定，喜欢抓紧4.多次好评，无限匹配5.随机奖励，加时续命',
      msgs: [],
      inputContent: '',
      oContent: {},
      oInput: {},
      socket: null
    }
  },
  methods: {
    getQ () {
      let index
      index = Math.floor((Math.random() * this.Ques.length))
      this.question = this.Ques[index]
    },
    initial () {
      this.socket = new WebSocket('ws://116.196.123.49:8888/c?token=' + window.localStorage.token)
      this.socket.onopen = function (evt) {
        document.getElementById('sendMsg').disabled = false
      }
      let that = this
      this.socket.onmessage = function (evt) {
        let res = JSON.parse(evt.data)
        console.log(res)
        that.appendChatDiv('recive', res.msg)
      }
      this.socket.onerror = function (evt) {
        console.log('网络错误！')
        document.getElementById('sendMsg').disabled = true
      }
      this.socket.onclose = function (evt) {
        document.getElementById('sendMsg').disabled = true
      }
    }
  },
  computed: {
  },
  created () {
    this.getQ()
  },
  mounted () {
    let node = document.getElementById('myCanvas')
    node.width = window.screen.width
    node.height = window.screen.height
    backgroundCanvasFn(node)
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
  }
  .container > ul > li > div{
    display: flex;
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
    font-size: 16px;
    background-color: white;
    border: 1px solid palevioletred;
    border-radius: 8px;
    padding: 10px;
    max-width: 50vw;
    word-break: break-all;
  }
</style>
