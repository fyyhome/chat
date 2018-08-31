<template>
  <div class="containner">
    <sex-table v-show="isFirstLogin" @select-sex="getSex(event)"></sex-table>
    <button class="btn-text" @click="match()">开始匿名聊天</button>
    <p class="btn-bottom">剩余聊天次数: {{count}}</p>
  </div>
</template>

<script>
import SexTable from '../components/SexTable.vue'
export default {
  data () {
    return {
      sex: '',
      isFirstLogin: false,
      count: this.$store.state.count
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
      this.$axios.get('/api/match').then((res) => {
        if (res.data.code === 0) {
          this.$store.commit('setChatID', res.data.chatId)
        }
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style scoped>
  .containner{
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
    background: url('../assets/image/background.gif');
    background-size: 100% 100%;
    background-repeat: no-repeat;
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
