<template>
  <div v-if="sellList">
    <h2>Sales</h2>
    <div class="product-wrapper" v-for="(sell, index) in sellList" :key="index">
      <ProductItem v-if="sell.product" :product="sell.product">
        <p class="seller">
          <span>Comprador:</span>
          {{ sell.customer_id }}
        </p>
      </ProductItem>

      <div class="delivery">
        <h3>Delivery:</h3>
        <ul v-if="sell.address">
          <li v-for="(value, key) in sell.address" :key="key">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/services.js";
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "UserSell",
  components: { ProductItem },
  data() {
    return {
      sellList: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  methods: {
    getSell() {
      api.get(`/transition?seller_id=${this.user.id}`).then((response) => {
        this.sellList = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getSell();
    },
  },
  created() {
    if (this.login) {
      this.getSell();
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

.delivery {
  display: grid;
  gap: 2rem;
  margin-bottom: 6rem;
  grid-template-columns: minmax(10rem, 20rem) 1fr;
}

h2 {
  margin-bottom: 2rem;
}

h3 {
  justify-self: end;
}
</style>