<template>
  <div v-if="sellList">
    <h2>Vendas</h2>
    <div class="product-wrapper" v-for="(sell, index) in sellList" :key="index">
      <ProductItem v-if="sell.product" :product="sell.product">
        <p class="seller">
          <span>Comprador:</span>
          {{ sell.customer_id }}
        </p>
      </ProductItem>

      <div class="delivery">
        <h3>Entrega:</h3>
        <ul v-if="sell.address">
          <li v-for="(value, key) in sell.address" :key="key">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>