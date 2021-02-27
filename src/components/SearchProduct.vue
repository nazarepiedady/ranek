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
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
</style>