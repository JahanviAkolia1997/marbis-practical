<template>
  <nav>
    <router-link to="/">Accordion</router-link> |
    <router-link to="/tabs">Tabs</router-link> |
    <router-link to="/dropdown">Dropdown</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  text-transform: uppercase;
}

nav a.router-link-exact-active {
  color: #42b983;
}

* {
  box-sizing: border-box;
}
:root {
  --color-primary: #ee75d2;
  --color-on-primary: white;
  --color-secondary: #75d8ee;
  --color-tertiary: #ffeb3b;
  --color-quaternary: red;
  --color-bg: #11071d;
}

body {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  font-family: "Road Rage", "Audiowide", "Helvetica Neue", "serif";
  font-weight: bold;
  overflow: hidden;
  background: radial-gradient(at center, transparent, var(--color-bg) 60%),
    linear-gradient(
        to right,
        color-mix(in srgb, var(--color-bg), white 10%) 5%,
        transparent 5%
      )
      repeat-x 0 0 / 2rem 100%,
    linear-gradient(
        to bottom,
        color-mix(in srgb, var(--color-bg), white 10%) 5%,
        transparent 5%
      )
      repeat-y 0 0 / 100% 2rem,
    linear-gradient(to bottom, var(--color-bg), black);
  color: var(--color-primary);
}
</style>
