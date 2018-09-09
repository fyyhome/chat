<template>
  <div class="mask" v-show="status">
    <div class="containner-wrap">
      <div class="title-wrap">
        <p>选择性别 (优先男女匹配哦~)</p>
      </div>
      <div class="sex-wrap">
        <img id="girl" @click="setSex('女')" src="../assets/image/girl.png" alt="girl" :class="{'selected': sex === '女'}">
        <img id="boy" @click="setSex('男')" src="../assets/image/boy.png" alt="boy" :class="{'selected': sex === '男'}">
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
    background-color: rgba(19, 12, 12, 0.158);
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
    border-radius: 20px;
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
    margin-bottom: 3vh;
  }
  .sex-wrap{
    height: 16vh;
    justify-content: space-around;
    align-items: center;
  }
  .sex-wrap > img{
    width: 14vh;
    height: 14vh;
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
    border-top: 1px solid #ffeef1;
    color: #5b5b5b;
    font-size: 20px;
    background-color: #ffeef1;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .selected,#boy:hover{
    border: 2px solid #60d0e8;
  }
  .selected,#girl:hover{
    border: 2px solid #ff8599;
  }
</style>
