<template>
<div>
    <h1>Вход пользователя</h1>
    <hr>
    <form class = 'login' @submit.prevent= "loginProfile">
      <h4>Авторизация</h4>
      <hr>
      <div class = 'form-group'>
        <label for="login">Логин</label>
        <span class="fa"></span>
        <input type="text" class="form-control" id="login" v-model = 'login' required>
      </div>
      <div class = 'form-group'>
        <label for="password">Пароль</label>
        <input type="password" class="form-control" id="password" v-model = 'password' required>
      </div>
      <button class = 'btn btn-primary'>Вход</button>
      <div class = 'error-login' v-if = 'error'>Имя пользователя или пароль введены не верно</div>
    </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      login: '',
      password: ''
    }
  },
  methods: {
    loginProfile() {
      if(this.login === 'Admin' && this.password === '12345') {
        this.error = false;
        localStorage.auth = true;
        this.$router.push({name: 'profile'});
        return;
      }
      this.error = true;
    }
  }
}
</script>

<style>

</style>
