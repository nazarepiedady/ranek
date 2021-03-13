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
};
</script>

<style>
</style>