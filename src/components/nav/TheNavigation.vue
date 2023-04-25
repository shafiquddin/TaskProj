<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/tablesPage">Tables</router-link>
        </li>
        <li>
          <router-link to="/cardsPage">Cards</router-link>
        </li>
        <li>
          <a @click="switchTheme">{{
            themeStyle === "Light" ? "Dark Theme" : "Light Theme"
          }}</a>
        </li>
        <li class="search">
          <input
            type="text"
            placeholder="Search..."
            v-model.trim="searchText"
            @focus="getSearch"
            @change="getChangeText"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ["themeStyle"],
  emits: ["set-page", "switch-mode"],
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    setActivePage(page) {
      this.$emit("set-page", page);
    },
    switchTheme() {
      this.$emit("switch-mode");
    },
    getSearch() {
      this.$router.push("/CardsPage");
    },
  },
  watch: {
    searchText(value) {
      if (value) {
        this.$store.dispatch("searchText", value);
      }
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
nav li.search {
  margin-left: auto;
}

nav form {
  display: flex;
}

nav input[type="text"] {
  padding: 5px;
  border: none;
  border-radius: 3px;
}
</style>
