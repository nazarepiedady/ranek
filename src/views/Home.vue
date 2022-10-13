<template>
  <section class="home">
    <h1 class="home__heading">👍 Buy or Sell 👎</h1>
    <SearchProduct />
    <ProductList />
  </section>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import SearchProduct from "@/components/SearchProduct.vue";

export default {
  name: "Home",
  components: {
    ProductList,
    SearchProduct,
  },
};
</script>

<style scoped>
.home__heading {
  margin-top: 4rem;
  font-size: 3.2rem;
  text-align: center;
  color: var(--secondary-color);
}
</style>
