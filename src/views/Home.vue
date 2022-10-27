<template>
  <section class="home">
    <h1 v-if="isGoodSize" class="home__heading">
      👍 Search for your product 👎
    </h1>
    <h1 v-else class="home__heading">👍 Search your product 👎</h1>
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
  data() {
    return {
      isGoodSize: false
    }
  },
  beforeMount() {
    let size = matchMedia('(min-width: 450px)')
    if (size.matches) {
      this.isGoodSize = true
    }
  }
};
</script>

<style scoped>
.home__heading {
  margin-top: 4rem;
  font-size: 3.2rem;
  text-align: center;
  color: var(--secondary-color);
}

@media screen and (max-width: 600px) {
  .home__heading {
    font-size: 2.4rem;
  }
}

@media screen and (max-width: 321px) {
  .home__heading {
    font-size: 2rem;
  }
}
</style>
