<template>
  <div class="loading">
    <span class="circle c1"></span>
    <span class="circle c2"></span>
    <span class="circle c3"></span>
    <span class="circle c4"></span>
  </div>
</template>

<script>
export default {
  name: "PageLoading",
};
</script>

<style>
.loading {
  text-align: center;
}

.circle {
  width: 1rem;
  height: 1rem;
  margin: 0.4rem;
  border-radius: 1rem;
  display: inline-block;
  background-color: var(--primary-color);
  animation: waves 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
}

.c1 {
  animation-delay: 0.1s;
}

.c2 {
  animation-delay: 0.2s;
}

.c3 {
  animation-delay: 0.3s;
}

.c4 {
  animation-delay: 0.4s;
}

@keyframes waves {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 3rem, 0);
  }
}
</style>