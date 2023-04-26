<template>
  <div v-if="!hasItem">
    <base-spinner></base-spinner>
  </div>
  <div v-else>
    <table-item :items="items"></table-item>
  </div>
</template>
<script>
import TableItem from "@/components/UI/TableItem";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    TableItem,
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    hasItem() {
      return this.$store.getters.hasItem;
    },
  },
  mounted() {
    this.$store.dispatch("fetchRequest");
  },
};
</script>
