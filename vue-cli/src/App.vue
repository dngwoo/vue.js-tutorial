<template>
  <!-- 최상위 element하나만 있어야 한다 -->
  <div id="#app">
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-on:renew="renewStr" v-bind:propsdata="str"></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data: function() {
    return {
      str: "Header"
    };
  },
  components: {
    "app-header": AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = "hi";
    }
  }
};
</script>

<style>
</style>