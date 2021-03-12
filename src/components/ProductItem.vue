<template>
  <div class="product">
    <router-link :to="{ name: 'Product', params: { id: product.id } }">
      <img class="product__img" />
      <p>Ver Produto</p>
    </router-link>
    <div class="product__info">
      <p class="product__price"></p>
      <h2 class="product__name"></h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
};
</script>

<style>
</style>