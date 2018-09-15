<template>
  <div class="tip-containner">
    <p class="title">{{title}}</p>
    <div>
      <div class="avatar-wrap">
        <img id="like" @click="pingJiaFn(0)" src="../assets/image/icon_like.png" alt="like">
        <span>喜欢,还想聊</span>
      </div>
      <div class="avatar-wrap">
        <img id="dislike" @click="pingJiaFn(1)" src="../assets/image/icon_hate.png" alt="hate">
        <span>错过吧,告辞</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    pingJiaFn (value) {
      this.$emit('pingjia-click', value)
    }
  }
}
</script>

<style scoped>
  .tip-containner{
    width: 80vw;
    height: 28vh;
    background-color: white;
    border-radius: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1px;
    background: -webkit-linear-gradient( bottom, #fff 0%, #fff 100%), -webkit-linear-gradient( bottom, #60d0e8 0%, #ff8599 100%);
    background-clip: content-box, padding-box;
    z-index: 999;
  }
  .title{
    margin-top: 10px;
    font-family: PingFang-SC-Regular;
    font-size: 2.6vh;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #dc7474;
  }
  .tip-containner > div{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .avatar-wrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .avatar-wrap > img{
    width: 18vw;
    height: 18vw;
    border: 1px solid white;
    border-radius: 50%;
  }
  .avatar-wrap > #like:hover{
    border: 2px solid #ff8599;
  }
  .avatar-wrap > #dislike:hover{
    border: 2px solid #60d0e8;
  }
  .avatar-wrap > span{
    padding: 10px;
    font-size: 16px;
  }
</style>
