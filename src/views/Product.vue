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
          <button class="button" v-if="!finished" @click="finished = true">
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
import { api } from "@/services.js";
import CompletePurchase from "@/components/CompletePurchase.vue";

export default {
  name: "Product",
  props: ["id"],
  components: { CompletePurchase },
  data() {
    return {
      product: null,
      finished: false,
    };
  },
  methods: {
    getProduct() {
      api.get(`/product/${this.id}`).then((response) => {
        this.product = response.data;
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
.product {
  display: grid;
  margin: 0 auto;
  gap: 3rem;
  max-width: 90rem;
  padding: 6rem 2rem;
  grid-template-columns: 1fr 1fr;
}

.product__price {
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 4rem;
  color: var(--accent-color);
}

.product__description {
  font-size: 1.92rem;
}

.button {
  width: 20rem;
  margin-top: 6rem;
}
</style>