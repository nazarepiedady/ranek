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

.search__input:focus,
.search__input:hover {
  transform: scale(1.1);
}

.search__button {
  top: 0;
  right: 0;
  border: 0;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  text-indent: -15rem;
  transition: all 0.3s;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url("../assets/search.svg");
}

.search__input:focus + .search__button,
.search__input:hover + .search__button {
  transform: translate3d(2.8rem, 0, 0);
}
</style>