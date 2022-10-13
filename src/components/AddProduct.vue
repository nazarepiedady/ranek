<template>
  <form class="add-product-form">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" v-model="product.name" />
    <label for="price">Price (USD)</label>
    <input type="number" name="price" id="price" v-model="product.price" />
    <label for="photos">Photos</label>
    <input type="file" id="photos" name="photos" ref="photos" />
    <label for="description">Description</label>
    <textarea
      name="description"
      id="description"
      v-model="product.description"
    ></textarea>
    <button class="button" @click.prevent="addProduct">
      Add Product
    </button>
  </form>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "",
        price: 0,
        photos: null,
        sold: "false",
        description: "",
      },
    };
  },
  methods: {
    formatProduct() {
      this.product.user_id = this.$store.state.user.id;
    },
    addProduct() {
      this.formatProduct();
      api.post("/product", this.product).then(() => {
        this.$store.dispatch("getUserProducts");
      });
    },
  },
};
</script>

<style scoped>
.add-product-form {
  display: grid;
  align-items: center;
  margin-bottom: 6rem;
  grid-template-columns: 10rem 1fr;
}

.button {
  grid-column: 2;
}
</style>