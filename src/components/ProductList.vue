<template>
  <section class="product-container">
    <transition mode="out-in">
      <div
        v-if="loading === false && productList.length > 0"
        class="product-list"
        key="productList"
      >
        <div
          v-for="(product, index) in productList"
          class="product"
          :key="index"
        >
          <router-link :to="{ name: 'Product', params: { id: product.id } }">
            <img
              v-if="product.photos"
              :src="product.photos[0].src"
              :alt="product.photos[0].name"
              class="product__img"
            />
            <p class="product__price">{{ product.price | toMoney }}</p>
            <h2 class="product__name">{{ product.name }}</h2>
            <p class="product__description">{{ product.description }}</p>
          </router-link>
        </div>

        <ProductPagination
          :productTotal="productTotal"
          :productPerPage="productPerPage"
        />
      </div>
      <div
        v-else-if="loading === false && productList.length === 0"
        key="no-result"
      >
        <p class="no-result">
          Não há resultado. Tente procurar por outro termo.
        </p>
      </div>
      <PageLoading key="pageLoading" v-else />
    </transition>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";
import ProductPagination from "./PageLoading.vue";

export default {
  name: "ProductList",
  components: {
    ProductPagination,
  },
  data() {
    return {
      productList: [],
      productPerPage: 9,
      productTotal: 0,
      loading: true,
    };
  },
  computed: {
    url() {
      let query = serialize(this.$route.query);
      return `/product?_limit=${this.productPerPage}${query}`;
    },
  },
  methods: {
    getProductList() {
      this.loading = true;
      setTimeout(() => {
        api.get(this.url).then((response) => {
          this.productList = response.data;
          this.productTotal = +response.headers["x-total-count"];
          this.loading = false;
        });
      }, 1500);
    },
  },
  watch: {
    url() {
      this.getProductList();
    },
  },
  created() {
    this.getProductList();
  },
};
</script>

<style>
.product-container {
  margin: 0 auto;
  max-width: 100rem;
}

.product-list {
  margin: 3rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(5, 1fr);
}

.product {
  padding: 1rem;
  transition: all 0.2s;
  border-radius: 0.4rem;
  background-color: var(--color-white);
  box-shadow: var(--basic-shadow--light);
}

.product:hover {
  transform: scale(1.1);
  box-shadow: 0 0.6rem 1.2rem rgba(30, 60, 90, 0.2);
}

.product__img {
  max-width: 100%;
  margin-bottom: 2rem;
  border-radius: 0.4rem;
}

.product__name {
  margin-bottom: 1rem;
}

.product__price {
  font-weight: bold;
  color: var(--accent-color);
}

.no-result {
  text-align: center;
}
</style>