<template>
  <router-view></router-view>
  <ul>
    <card-item
      v-for="item in cardData"
      :key="item.id"
      :id="item.id"
      :header="item.header"
      :description="item.decription"
      v-bind:class="{ highlighted: this.highlightCard.includes(item) }"
    ></card-item>
  </ul>
</template>

<script>
import CardItem from "../components/UI/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  computed: {
    cardData() {
      return this.$store.getters.cardData;
    },
    highlightCard() {
      return this.$store.getters.highlightCard;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 10px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.highlighted {
  background-color: lightcoral;
}
</style>
