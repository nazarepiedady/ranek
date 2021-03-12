<template>
  <form class="form">
    <div class="user">
      <label for="name">Nome</label>
      <input type="text" id="name" name="name" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" />
      <label for="password">Senha</label>
      <input type="password" id="password" name="password" />
    </div>
    <label for="country">País</label>
    <input type="text" id="country" name="country" />
    <div class="button-container">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>