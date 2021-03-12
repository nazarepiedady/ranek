<template>
  <form class="form" v-if="showLoginFields">
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
import { mapFields } from "@/helpers.js";

export default {
  name: "UserForm",
  computed: {
    ...mapFields({
      fields: ["name", "email", "password", "country"],
      base: "user",
      mutation: "UPDATE_USER",
    }),
    showLoginFields() {
      return !this.$store.state.login || this.$route.name === "UserEdit";
    },
  },
};
</script>

<style>
</style>