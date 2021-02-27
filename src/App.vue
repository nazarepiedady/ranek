<template>
  <div id="app"></div>
</template>

<style>
:root {
  --color: #345;
  --color-white: #fff;
  --accent-color: #e80;
  --primary-color: #87f;
  --secondary-color: #65d;
  --basic-shadow: 0 0.4rem 0.8rem rgba(30, 60, 90, 0.2);
  --basic-shadow--light: 0 0.4rem 0.8rem rgba(30, 60, 90, 0.1);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  color: var(--color);
  font-family: sans-serif;
}

body {
  font-size: 1.6rem;
  background-position: top;
  background-repeat: repeat;
  background-image: url("./assets/pattern.svg");
}

ul {
  list-style-type: none;
}

a {
  color: var(--color);
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

input,
textarea {
  padding: 1.5rem;
  font-size: 1.6rem;
  font-family: inherit;
  transition: all 0.3s;
  margin-bottom: 1.5rem;
  border-radius: 0.4rem;
  box-shadow: var(--basic-shadow--light);
  border: 0.1rem solid var(--color-white);
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0.6rem 1.2rem rgba(30, 60, 90, 0.2);
}

.button {
  border: 0;
  display: block;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1rem 3rem;
  text-align: center;
  font-family: inherit;
  transition: all 0.3s;
  border-radius: 0.4rem;
  color: var(--color-white);
  box-shadow: var(--basic-shadow);
  background-color: var(--primary-color);
}

.button:hover {
  transform: scale(1.1);
  background-color: var(--secondary-color);
}

.button:disabled {
  cursor: default;
}

.button:disabled:hover {
  transform: none;
  background-color: var(--primary-color);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main {
  flex: 1;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter {
  transform: translate3d(0, -2rem, 0);
}

.v-leave-to {
  transform: translate3d(0, 2rem, 0);
}
</style>
