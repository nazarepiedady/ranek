<template>
  <section>
    <div v-if="shoppingList">
      <h2>Compras</h2>
      <div
        class="product-wrapper"
        v-for="(shopping, index) in shoppingList"
        :key="index"
      >
        <ProductItem v-if="shopping.product" :product="shopping.product">
          <p class="seller">
            <span>Vendedor:</span>
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
};
</script>

<style>
</style>