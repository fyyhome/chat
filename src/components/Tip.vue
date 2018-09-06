<template>
  <div class="tip-wrap">
    {{title}}
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  .tip-wrap{
    width: 60vw;
    max-width: 80vw;
    min-height: 10vh;
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
    background-color: grey;
    padding: 0 10px;
    border-radius: 8px;
  }
</style>
