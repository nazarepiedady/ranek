<template>
  <header>
    <nav class="nav">
      <router-link to="/" class="logo">
        <img src="@/assets/ranek.svg" alt="Ranek Logo" class="logo__img" />
      </router-link>

      <router-link to="/user" class="button">{{ name }}</router-link>

      <router-link to="/login" class="button">Vender / Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    name() {
      return this.$store.state.user.name.replace(/\s.*/, "");
    },
    login() {
      return this.$store.state.login;
    },
  },
};
</script>

<style>
</style>