<template>
  <header>
    <nav class="navigation">
      <router-link to="/" class="logo">
        <img src="@/assets/ranek.svg" alt="Ranek Logo" class="logo__img" />
      </router-link>

      <router-link v-if="login" to="/user" class="button navigation__button">
        {{ name }}
      </router-link>

      <router-link v-else to="/login" class="button navigation__button">
        Sell / Login
      </router-link>
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

<style scoped>
.navigation {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1.5rem 2rem;
  justify-content: space-between;
  box-shadow: var(--basic-shadow);
}

.logo {
  padding: 1rem 0;
}

.logo__img {
  width: 9rem;
}

@media screen and (max-width: 800px) {
  .navigation__button {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  } 
}
</style>