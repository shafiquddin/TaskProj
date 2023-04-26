<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div class="table-container" v-else>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>WebSite</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.API }}</td>
          <td>{{ item.Category }}</td>
          <td>{{ item.Description }}</td>
          <td>
            <button @click="getJoin(item.Link)">Click</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const url = `https://api.publicapis.org/entries`;
      await axios
        .get(url)
        .then((response) => {
          localStorage.setItem("storedData", JSON.stringify(response.data));
          this.items = response.data.entries;
        })
        .catch((error) => console.log(error));
      this.isLoading = false;
    },
    getJoin(Url) {
      window.open(Url, "_blank");
    },
  },
  created() {
    if (JSON.parse(localStorage.getItem("storedData")) !== null) {
      this.items = JSON.parse(localStorage.getItem("storedData")).entries;
    } else {
      this.fetchData();
    }
  },
};
</script>
<style scoped>
.table-container {
  max-width: 100%;
}
table {
  border-collapse: collapse;
  max-width: 90%;
  margin: 10px auto;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

th,
td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
  border-top: 1px solid #ddd;
}

@media screen and (max-width: 735px) {
  .table-container {
    overflow-x: auto;
  }
}
@media screen and (max-width: 600px) {
  table {
    font-size: 12px;
  }
  th,
  td {
    padding: 6px;
  }
  th {
    font-size: 14px;
  }
  table caption {
    font-size: 16px;
  }
}
table button {
  background-color: #11005c;
  padding: 8px 12px;
  color: #fff;
  border-color: #f1a80a;
  cursor: pointer;
  transition: all 0.3s ease-in;
  text-transform: uppercase;
}
table button:hover {
  background-color: #f1a80a;
  border-color: #11005c;
}
.table-wrapper {
  width: 100%;
  height: 300px;
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  background-color: #eee;
  position: sticky;
  top: 0;
}

.sticky-col {
  background-color: #fff;
  position: sticky;
  left: 0;
}

th,
td {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
