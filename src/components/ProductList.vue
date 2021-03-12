<template>
  <section class="product-container"></section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";
//import ProductPagination from './PageLoading.vue';

export default {
  name: "ProductList",
  components: {
    //ProductPagination
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