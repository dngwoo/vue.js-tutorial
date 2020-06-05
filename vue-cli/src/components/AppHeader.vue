<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    sendEvent: function() {
      this.$emit("renew"); // renew 뜻은 "값을 갱신 하겠다" 라는 것임.
    }
  }
};
</script>

<style>
</style>