<template>
  <div class="containner">
    <sex-table></sex-table>
  </div>
</template>

<script>
import SexTable from '../components/SexTable.vue'
export default {
  data () {
    return {
      sex: ''
    }
  },
  components: {
    SexTable
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
</style>
