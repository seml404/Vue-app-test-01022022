<template>
  <div class="list-container">
    <add-item @addItem="addItem" />
    <select name="" id="" v-model="filter">
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="not-completed">not-completed</option>
    </select>
    <!-- :listOfActions="listOfActions" -->
    <to-do-list
      v-if="filteredList.length > 0"
      :listOfActions="filteredList"
      @handleRemove="removeItem"
    />
    <spinner v-else-if="loading" />
    <no-information v-else />
  </div>
</template>

<script>
import AddItem from "../components/AddItem.vue";
import ToDoList from "../components/ToDoList.vue";
import NoInformation from "../components/NoInformation.vue";
import Spinner from "../components/Spinner.vue";
export default {
  name: "List",
  components: { ToDoList, AddItem, NoInformation, Spinner },
  data() {
    return {
      listOfActions: "",
      loading: false,
      filter: "all",
      draftList: [
        {
          id: Math.random(),
          title: "make excersises",
          done: false,
        },
        { id: Math.random(), title: "make coffee", done: false },
        { id: Math.random(), title: "buy some food", done: false },
      ],
    };
  },

  mounted() {
    this.loading = true;
    setTimeout(async () => {
      let res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      let formattedRes = await res.json();
      console.log(formattedRes);
      this.listOfActions = [...formattedRes];
      this.loading = false;
    }, 3000);
  },

  computed: {
    filteredList() {
      if (this.filter === "completed") {
        return this.listOfActions.filter((item) => item.completed);
      } else if (this.filter === "not-completed") {
        return this.listOfActions.filter((item) => !item.completed);
      } else {
        return this.listOfActions;
      }
    },
  },

  methods: {
    removeItem(id) {
      console.log("removing");
      this.listOfActions = this.listOfActions.filter((item) => item.id !== id);
    },
    addItem(value) {
      console.log(value);
      console.log("adding");
      this.listOfActions.push({
        id: Math.random(),
        title: value,
        done: false,
      });
    },
  },
};
</script>

<style></style>
