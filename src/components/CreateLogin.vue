<template>
  <section>
    <h2 class="create-heading">Create Your Account</h2>
    <transition mode="out-in">
      <button v-if="!create" class="button" @click="create = true" key="create">
        Create the Account
      </button>
      <UserForm v-else key="userForm">
        <button class="button form-button" @click.prevent="createUser">
          Create the User
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
  margin: 0 auto;
}

.form-button {
  max-width: 100%;
}
</style>