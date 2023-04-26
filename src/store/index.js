import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      items: [],
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
    fetchData(state, payload) {
      state.items = payload;
    },
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
    async fetchRequest(context) {
      const response = await fetch("https://api.publicapis.org/entries");
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(responseData.message || "failed to fetch");
        throw error;
      }
      context.commit("fetchData", responseData.entries);
    },

    getDelete(context, payload) {
      context.commit("delete", payload);
    },
    searchText(context, payload) {
      context.commit("highlightedCard", payload);
    },
  },
  getters: {
    items(state) {
      return state.items;
    },
    hasItem(state) {
      return state.items && state.items.length > 0;
    },
    cardData(state) {
      return state.cardData;
    },
    highlightCard(state) {
      return state.highlightCard;
    },
  },
});

export default store;
