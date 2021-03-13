<template>
  <form class="add-product-form">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="product.name" />
    <label for="price">Preço (USD)</label>
    <input type="number" name="price" id="price" v-model="product.price" />
    <label for="photos">Fotos</label>
    <input type="file" id="photos" name="photos" ref="photos" />
    <label for="description">Descrição</label>
    <textarea
      name="description"
      id="description"
      v-model="product.description"
    ></textarea>
    <button class="button" @click.prevent="addProduct">
      Adicionar Produto
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>