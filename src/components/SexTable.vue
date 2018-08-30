<template>
  <div class="mask" v-show="status">
    <div class="containner-wrap">
      <div class="title-wrap">
        <p>选择性别 (优先男女匹配哦~)</p>
      </div>
      <div class="sex-wrap">
        <img @click="setSex('女')" src="../assets/image/girl.png" alt="girl">
        <img @click="setSex('男')" src="../assets/image/boy.png" alt="boy">
      </div>
      <div class="bt-wrap">
        <button @click="throwSex()">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sex: '女',
      status: true
    }
  },
  methods: {
    setSex (sex) {
      this.sex = sex
    },
    throwSex () {
      this.$emit('select-sex', this.sex)
      this.status = false
    }
  }
}
</script>

<style scoped>
  .mask{
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
  }
  .containner-wrap{
    width: 83.5vw;
    height: 38vh;
    background-color: white;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .containner-wrap > div{
    display: flex;
  }
  .title-wrap{
    height: 12vh;
    justify-content: center;
    font-size: 20px;
    color: #5b5b5b;
  }
  .title-wrap > p{
    align-self: flex-end;
    margin-bottom: 1vh;
  }
  .sex-wrap{
    height: 16vh;
    justify-content: space-around;
    align-items: center;
  }
  .sex-wrap > img{
    width: 21.5vw;
    height: 21.5vw;
    border-radius: 50%;
  }
  .bt-wrap{
    height: 10vh;
    justify-content: center;
  }
  .bt-wrap > button{
    width: 100%;
    height: 100%;
    border: none;
    border-top: 1px solid red;
    color: #5b5b5b;
    font-size: 20px;
    background-color: #ffeef1;
  }
  .selected,img:hover{
    border: 4px solid blue;
  }
</style>
