<template>
  <form v-on:submit.prevent="submitForm">
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
import axios from "axios"; // HTTP 통신 라이브러리

export default {
  // 컴포넌트는 재사용되기 때문에 컴포넌트간에 참조가 되지 않게 function을 이용한다.
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm: function() {
      // e.preventDefault(); <- v-on:submit.prevent로 사용가능(prevent라는 이벤트 모디파이어 사용)

      // post는 데이터를 생성하거나 조작할때 사용하는 메서드
      const url = "https://jsonplaceholder.typicode.com/users";
      const data = {
        username: this.username,
        password: this.password,
      };
      axios
        .post(url, data)
        .then(function(res) {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
