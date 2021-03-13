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
      this.$route.push("/login");
    },
  },
};
</script>

<style>
</style>