<template>
  <form class="search">
    <input
      name="search"
      id="search"
      type="text"
      v-model="search"
      class="search__input"
      placeholder="Search for..."
    />
    <button
      type="submit"
      id="magnifying-glass"
      @click.prevent="searchProduct"
      class="search__button"
    >
      Search
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

<style scoped>
.search {
  max-width: 60rem;
  position: relative;
  margin: 3rem auto 6rem;
}

@media screen and (max-width: 700px) {
  .search {
    max-width: 80%;
  }
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
  background-position: center center;
  background-image: url("../assets/search.svg");
}

.search__input:focus + .search__button,
.search__input:hover + .search__button {
  transform: translate3d(2.8rem, 0, 0);
}

@media screen and (max-width: 900px) {
  .search__input:focus,
  .search__input:hover {
    transform: none;
  }

  .search__input:focus + .search__button,
  .search__input:hover + .search__button {
    transform: none;
  }
}
</style>