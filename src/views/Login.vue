<template>
  <section class="login">
    <h1 class="login__heading">Login</h1>
    <form class="form">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="login.password"
      />
      <button class="button" @click.prevent="toLogin">Logar</button>
    </form>
    <p class="forget-password">
      <a href="/" target="_blank" rel="noreferrer noopener">
        Perdeu a senha? Clique aqui.
      </a>
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>