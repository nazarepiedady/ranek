<template>
  <section>
    <h2 class="purchase-heading">
      Address to send to
    </h2>
    <UserForm>
      <button class="button" @click.prevent="purchase">
        Purchase
      </button>
    </UserForm>
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

<style scoped>
.purchase-heading {
  margin: 4rem 0 2rem;
}

.button {
  background-color: var(--accent-color);
}
</style>