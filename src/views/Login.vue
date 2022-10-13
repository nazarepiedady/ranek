<template>
  <section class="login">
    <h1 class="login__heading">Login</h1>
    <form class="form">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="login.password"
      />
      <button class="button" @click.prevent="toLogin">Login</button>
    </form>
    <p class="forget-password">
      <a href="/" target="_blank" rel="noreferrer noopener">
        Do you lost your password?
      </a>
    </p>
    <CreateLogin />
  </section>
</template>

<script>
import CreateLogin from "@/components/CreateLogin.vue";

export default {
  name: "Login",
  components: {
    CreateLogin,
  },
  data() {
    return {
      login: {
        email: "",
        passoword: "",
      },
    };
  },
  methods: {
    toLogin() {
      this.$store.dispatch("getUser", this.login.email);
      this.$router.push({ name: "User" });
    },
  },
};
</script>

<style scoped>
.form {
  display: grid;
}

.login {
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 50rem;
}

.login__heading {
  margin-top: 4rem;
  font-size: 3.2rem;
  text-align: center;
  color: var(--primary-color);
}

.button {
  width: 100%;
  margin: 0 auto;
  max-width: 30rem;
}

.forget-password {
  text-align: center;
  margin: 2rem auto 0;
}

.forget-password a:hover {
  text-decoration: underline;
  color: var(--primary-color);
}
</style>