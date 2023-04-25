<template>
  <div :style="themeStyles">
    <the-navigation
      :themeStyle="theme"
      @switch-mode="toggleTheme"
    ></the-navigation>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      theme: "Light",
    };
  },
  methods: {
    toggleTheme() {
      if (this.theme === "Light") {
        this.theme = "Dark";
      } else {
        this.theme = "Light";
      }
    },
  },
  computed: {
    themeStyles() {
      if (this.theme === "Light") {
        return {
          backgroundColor: "#f2f2f2",
          color: "#333",
        };
      } else {
        return {
          backgroundColor: "#333",
          color: "#f2f2f2",
        };
      }
    },
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
