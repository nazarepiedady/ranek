<template>
  <section>
    <div v-if="product" class="product">
      <ul class="gallery" v-if="product.photos > 0">
        <li v-for="(photo, index) in product.photos" :key="index">
          <img :src="photo.src" :alt="photo.name" />
        </li>
      </ul>

      <div class="product__info">
        <h1>{{ product.name }}</h1>
        <p class="product__price">{{ product.price | toMoney }}</p>
        <p class="product__description">{{ product.description }}</p>
        <transition v-if="product.sold === 'false'" mode="out-in">
          <button class="button" v-if="!finish" @click="finish = true">
            Comprar
          </button>
          <CompletePurchase v-else :product="product" />
        </transition>
        <button class="button" disabled v-else>Produto vendido</button>
      </div>
    </div>
    <PageLoading v-else />
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>