<template>
  <div class="product" v-if="product">
    <router-link :to="{ name: 'Product', params: { id: product.id } }">
      <img
        v-if="product.photos"
        :src="product.photos[0].src"
        :alt="product.photos[0].name"
        class="product__img"
      />
      <p>See the Product</p>
    </router-link>
    <div class="product__info">
      <p class="product__price">{{ product.price | toMoney }}</p>
      <h2 class="product__name">{{ product.name }}</h2>
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

<style scoped>
.product {
  display: grid;
  gap: 2rem;
  position: relative;
  margin-bottom: 4rem;
  grid-template-columns: minmax(10rem, 20rem) 1fr;
}

.product__img {
  height: 10rem;
  overflow: hidden;
  border-radius: 0.4rem;
}

.product__info {
  align-self: end;
}
</style>