<template>
  <ul v-if="totalPage > 1" class="pagination">
    <li v-for="page in pages" :key="page" class="pagination__item">
      <router-link :to="{ query: query(page) }" class="pagination__link">{{
        page
      }}</router-link>
    </li>
  </ul>
</template>

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
.pagination {
  grid-column: 1 / -1;
}

.pagiantion__item {
  display: inline-block;
}

.pagination__link {
  margin: 0.4rem;
  border-radius: 0.2rem;
  padding: 0.2rem 0.8rem;
}

.pagination__link:hover,
.router-link-exact-active {
  color: var(--color-white);
  background-color: var(--primary-color);
}
</style>