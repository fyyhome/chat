<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
  @font-face{
    font-family: PingFang-SC-Medium;
    src:url(./assets/font/PingFang-Medium.ttf);
    font-weight: normal;
    font-stretch: normal;
  }
  @font-face{
    font-family: PingFang-SCBold;
    src:url(./assets/font/PingFang-SCBold.ttf);
  }
  *{
    margin: 0;
    padding: 0;
    outline: none;
    font-family: PingFang-SC-Medium;
  }
  button::-moz-focus-inner{
    border: 0;
  }
</style>
