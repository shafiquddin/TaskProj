import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      cardData: [
        {
          id: 1,
          header: "shafiq",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 2,
          header: "Nitesh",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 3,
          header: "Akash",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 4,
          header: "Rahul",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 5,
          header: "Kush",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 6,
          header: "Ajay",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 7,
          header: "Ragu",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
        {
          id: 8,
          header: "Rajesh",
          decription:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit sequi! Beatae, mollitia tempora doloribus itaque perferendis iure. Quis eveniet aspernatur velit eius, veritatis illo dolore nostrum aliquid vero tempore recusandae. Repellat laudantium iste odio quas enim? Voluptas, odit dignissimos?",
        },
      ],
      highlightCard: [],
    };
  },
  mutations: {
    delete(state, payload) {
      state.cardData = state.cardData.filter((item) => item.id !== payload);
    },
    highlightedCard(state, payload) {
      state.highlightCard = state.cardData.filter((card) => {
        return card.header.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
  actions: {
    getDelete(context, payload) {
      context.commit("delete", payload);
    },
    searchText(context, payload) {
      context.commit("highlightedCard", payload);
    },
  },
  getters: {
    cardData(state) {
      return state.cardData;
    },
    highlightCard(state) {
      return state.highlightCard;
    },
  },
});

export default store;
