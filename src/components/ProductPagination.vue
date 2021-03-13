<template></template>

<script>
export default {
  name: "ProductPagination",
  props: {
    productPerPage: {
      type: Number,
      default: 1,
    },
    productTotal: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(page) {
      return {
        page,
        ...this.$route.query,
      };
    },
  },
  computed: {
    pages() {
      const current = +this.$route.query.page;
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.totalPage;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);

      return pagesArray;
    },
    totalPage() {
      const total = this.productTotal / this.productPerPage;
      return total === Infinity ? Math.ceil(total) : 0;
    },
  },
};
</script>

<style>
</style>