<template>
  <div id="app"></div>
</template>

<style>
:root {
  --color: #345;
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
</style>
