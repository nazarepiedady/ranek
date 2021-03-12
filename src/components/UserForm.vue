<template>
  <form class="form" v-if="showLoginFields">
    <div class="user">
      <label for="name">Nome</label>
      <input type="text" id="name" name="name" v-model="name" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email" />
      <label for="password">Senha</label>
      <input type="password" id="password" name="password" v-model="password" />
    </div>
    <label for="country">País</label>
    <input type="text" id="country" name="country" v-model="country" />
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
.form,
.user {
  display: grid;
  align-items: center;
  grid-template-columns: 8rem 1fr;
}

.user {
  grid-column: 1 / 3;
}

.button-container {
  grid-column: 2;
  margin-top: 1rem;
}
</style>