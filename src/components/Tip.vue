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
    min-height: 8vh;
    position: absolute;
    z-index: 999;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    background-color: rgba(14, 14, 14, 0.71);
    padding: 0 10px;
    border-radius: 8px;
  }
</style>
