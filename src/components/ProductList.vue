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
</style>