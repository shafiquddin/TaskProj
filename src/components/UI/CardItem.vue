<template>
  <li>
    <div class="card">
      <div class="header-sec">
        <h3>{{ header }}</h3>
        <i class="fas fa-user-times" @click="getDeleteUser"></i>
      </div>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "header", "description"],
  methods: {
    getDeleteUser() {
      this.$store.dispatch("getDelete", this.id);
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 19rem;
}
.header-sec {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card p {
  margin-top: 0;
}
.header-sec i {
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
  padding-top: 10px;
}
</style>
