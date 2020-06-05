<template>
  <!-- 최상위 element하나만 있어야 한다 -->
  <div id="#app">{{str}}</div>
</template>

<script>
// new Vue({
//   data: {
//     str:"hi"
//   }
// })

export default {
  data: function() {
    return {
      str: "hi"
    };
  }
};
</script>

<style>
</style>