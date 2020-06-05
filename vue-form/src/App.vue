<template>
  <form v-on:submit="submitForm">
    <div>
      <!-- for은 내가 어떤 태그의 레이블인지 파악하기 위해 사용 -->
      <label for="username">id: </label>
      <!-- v-model을 쓰면 input 값이 바뀌면 username에 알아서 반영해주고 반대도 마찬가지이다 -->
      <!-- 이런 것을 양방향 데이터 바인딩 or 2way 데이터 바인딩이라고 한다 -->
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  // 컴포넌트는 재사용되기 때문에 컴포넌트간에 참조가 되지 않게 function을 이용한다.
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm: function(e) {
      e.preventDefault();
      console.log(this.username, this.password);
    },
  },
};
</script>

<style></style>
