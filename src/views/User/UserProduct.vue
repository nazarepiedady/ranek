<template>
  <section>
    <h2 class="user-product-h1">Add Products</h2>
    <AddProduct />
    <h2 class="user-product-h2">Your Products</h2>
    <transition-group v-if="user_products" name="list" tag="ul">
      <li v-for="product in user_products" :key="product.id">
        <ProductItem :product="product">
          <p>{{ product.description }}</p>
          <button class="delete" @click.prevent="deleteProduct(product.id)">
            Delete
          </button>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { mapState, mapActions } from "vuex";
import AddProduct from "@/components/AddProduct.vue";
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "UserProduct",
  components: {
    AddProduct,
    ProductItem,
  },
  computed: {
    ...mapState(["login", "user", "user_products"]),
  },
  methods: {
    ...mapActions(["getUserProducts"]),
    deleteProduct(id) {
      const toConfirm = window.confirm("Deseja remover este produto?");
      if (toConfirm) {
        api
          .delete(`/product/${id}`)
          .then(() => {
            this.getUserProducts();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  watch: {
    login() {
      this.getUserProducts();
    },
  },
  created() {
    if (this.login) {
      this.getUserProducts();
    }
  },
};
</script>

<style scoped>
.user-product-h1 {
  margin-bottom: 2rem;
}

.user-product-h2 {
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(2rem, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.delete {
  top: 0;
  right: 0;
  border: 0;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  overflow: hidden;
  text-indent: 14rem;
  position: absolute;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center center;
  background-image: url("../../assets/remove.svg");
}
</style>