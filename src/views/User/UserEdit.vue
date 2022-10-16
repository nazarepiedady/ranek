<template>
  <section>
    <UserForm>
      <button class="button" @click.prevent="updateUser">
        Update User
      </button>
    </UserForm>
  </section>
</template>

<script>
import { api } from "@/services.js";
import UserForm from "@/components/UserForm.vue";

export default {
  name: "UserEdit",
  components: { UserForm },
  methods: {
    updateUser() {
      api
        .put(`/user/${this.$store.state.user.id}`, this.$store.state.user)
        .then(() => {
          this.$store.dispatch("getUser", this.$store.state.user.id);
          this.$router.push({ name: "User" });
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
</style>