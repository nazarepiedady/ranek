<template>
  <section>
    <h2>Crie a Sua Conta</h2>
    <transition mode="out-in">
      <button v-if="!create" class="button" @click="create = true" key="create">
        Criar Conta
      </button>
      <UserForm v-else key="userForm">
        <button class="button form-button" @click.prevent="createUser">
          Criar Usuário
        </button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from "./UserForm.vue";

export default {
  name: "CreateLogin",
  data() {
    return {
      create: false,
    };
  },
  components: { UserForm },
  methods: {
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.user);
        await this.$store.dispatch("getUser", this.$store.state.user.email);
        this.$router.push({ name: "User" });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.create-heading {
  text-align: center;
  margin: 4rem 0 1rem;
}

.button {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.form-button {
  max-width: 100%;
}
</style>