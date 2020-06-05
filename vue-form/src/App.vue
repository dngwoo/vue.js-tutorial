<template>
  <form action="">
    <div>
      <!-- for은 내가 어떤 태그의 레이블인지 파악하기 위해 사용 -->
      <label for="username">id: </label>
      <input id="username" type="text" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" />
    </div>
    <button>login</button>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
