<template>
  <section>
    <div v-if="shoppingList">
      <h2>Shopping</h2>
      <div
        class="product-wrapper"
        v-for="(shopping, index) in shoppingList"
        :key="index"
      >
        <ProductItem v-if="shopping.product" :product="shopping.product">
          <p class="seller">
            <span>Seller:</span>
            {{ shopping.seller_id }}
          </p>
        </ProductItem>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/services.js";
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "UserShop",
  components: { ProductItem },
  data() {
    return {
      shoppingList: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  methods: {
    getShopping() {
      api.get(`/transition?customer_id=${this.user.id}`).then((response) => {
        this.shoppingList = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getShopping();
    },
  },
  created() {
    if (this.login) {
      this.getShopping();
    }
  },
};
</script>

<style scoped>
.product-wrapper {
  margin-bottom: 4rem;
}

.seller span {
  color: var(--accent-color);
}

h2 {
  margin-bottom: 2rem;
}
</style>