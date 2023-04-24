<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
  <!-- <router-view v-slot="slotProps">
    <transition name="slide-fade" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view> -->
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
}
.slide-fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.slide-fade-Leave-active {
  transition: opacity 0.3s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
