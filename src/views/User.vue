<template>
  <section class="user">
    <nav class="sidebar">
      <ul>
        <li>
          <router-link :to="{ name: 'User' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UserShop' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UserSell' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UserEdit' }">Editar Usuario</router-link>
        </li>
        <li>
          <button @click.prevent="logout">Deslogar</button>
        </li>
      </ul>
    </nav>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "User",
  methods: {
    logout() {
      this.$store.dispatch("logoutUser");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.user {
  display: grid;
  padding: 2rem;
  gap: 3rem;
  max-width: 90rem;
  margin: 4rem auto;
  grid-template-columns: minmax(14rem, 20rem) 1fr;
}

@media screen and (max-width: 500px) {
  .user {
    margin: 0 auto;
    grid-template-columns: 1fr;
  }
}

.sidebar a,
.sidebar button {
  padding: 1rem;
  display: block;
  margin-bottom: 1rem;
  border-radius: 0.4rem;
  background-color: var(--color-white);
}

.sidebar a.router-link-exact-active,
.sidebar a:hover,
.sidebar button:hover {
  color: var(--color-white);
  background-color: var(--primary-color);
}

.sidebar button {
  border: 0;
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
  font-family: inherit;
}
</style>