<template>
  <section>
    <h2>Endereço de Envio</h2>
    <User-Form>
      <button class="button" @click.prevent="purchase">Finalizar Compra</button>
    </User-Form>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/services.js";
import UserForm from "@/components/UserForm.vue";

export default {
  name: "CompletePurchase",
  props: ["product"],
  components: { UserForm },
};
</script>

<style>
</style>