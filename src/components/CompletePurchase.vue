<template>
  <section>
    <h2>Endereço de Envio</h2>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/services.js";
import UserForm from "@/components/UserForm.vue";

export default {
  name: "CompletePurchase",
  props: ["product"],
};
</script>

<style>
</style>