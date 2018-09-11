<template>
  <div class="tip-containner">
    <p class="title">{{title}}</p>
    <div>
      <div class="avatar-wrap">
        <img @click="pingJiaFn(0)" src="../assets/image/icon_like.png" alt="like">
        <span>喜欢,还想聊</span>
      </div>
      <div class="avatar-wrap">
        <img @click="pingJiaFn(1)" src="../assets/image/icon_hate.png" alt="hate">
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
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 999;
  }
  .title{
    margin-top: 10px;
    color: red;
    font-size: 18px;
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
  .avatar-wrap > img:hover{
    border: 1px solid blue;
  }
  .avatar-wrap > span{
    padding: 10px;
  }
</style>
