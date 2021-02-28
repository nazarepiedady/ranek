<template>
  <form class="search">
    <input
      name="search"
      id="search"
      type="text"
      v-model="search"
      class="search__input"
      placeholder="Busca..."
    />
    <button
      type="submit"
      id="magnifying-glass"
      @click.prevent="searchProduct"
      class="search__button"
    >
      Buscar
    </button>
  </form>
</template>

<script>
export default {
  name: "SearchProduct",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchProduct() {
      this.$router.push({ query: { q: this.search } });
    },
  },
};
</script>

<style>
.search {
  max-width: 60rem;
  position: relative;
  margin: 3rem auto 6rem;
}

.search__input {
  border: 0;
  width: 100%;
  padding: 2rem;
}
</style>