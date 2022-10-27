<template>
  <footer class="footer">
    <p class="footer__copyright">Ranek &copy; - Some rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  top: 7.5rem;
  padding: 1.5rem 0;
  position: relative;
  background-color: var(--primary-color);
}

.footer__copyright {
  font-size: 1.92rem;
  text-align: center;
  color: var(--color-white);
}
</style>