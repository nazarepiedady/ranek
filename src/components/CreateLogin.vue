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
};
</script>

<style>
</style>