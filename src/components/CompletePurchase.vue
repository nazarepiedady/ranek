<template>
  <section>
    <h2>Endereço de Envio</h2>
    <User-Form>
      <button class="button" @click.prevent="purchase">Finalizar Compra</button>
    </User-Form>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/services.js";
import UserForm from "@/components/UserForm.vue";

export default {
  name: "CompletePurchase",
  props: ["product"],
  components: { UserForm },
  methods: {
    purchase() {
      if (this.$store.state.login) {
        this.makeTransition();
      } else {
        this.createUser();
      }
    },
    makeTransition() {
      return api.post("/transition", this.shopping).then(() => {
        this.$router.push({ name: "UserShop" });
      });
    },
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.user);
        await this.$store.dispatch("getUser", this.$store.state.user.email);
        await this.makeTransition();
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    ...mapState(["user"]),
    shopping() {
      return {
        customer_id: this.user.email,
        seller_id: this.product.user_id,
        product: this.product,
        address: {
          email: this.user.email,
          country: this.user.country,
        },
      };
    },
  },
};
</script>

<style>
</style>