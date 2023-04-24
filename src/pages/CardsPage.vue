<template>
  <router-view></router-view>
  <ul>
    <card-item
      v-for="item in cardData"
      :key="item.id"
      :id="item.id"
      :header="item.header"
      :description="item.decription"
      @delete-user="getDelete"
    ></card-item>
  </ul>
</template>

<script>
import CardItem from "../components/UI/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      cardData: [
        {
          id: 1,
          header: "User 1",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 2,
          header: "User 2",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 3,
          header: "User 3",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 4,
          header: "User 4",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 5,
          header: "User 5",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 6,
          header: "User 6",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 7,
          header: "User 7",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 8,
          header: "User 8",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
      ],
    };
  },
  methods: {
    getDelete(id) {
      this.cardData = this.cardData.filter((item) => item.id !== id);
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
</style>
