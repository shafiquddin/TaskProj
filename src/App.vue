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
  margin: 0;
  padding: 0;
}

html {
  font-family: sans-serif;
}
</style>
