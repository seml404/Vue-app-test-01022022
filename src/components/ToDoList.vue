<template>
  <div>
    <router-link to="/">Home</router-link>
    <div>
      <ul class="actions-list">
        <h2>to-do list</h2>
        <to-do-list-item
          v-for="(item, idx) in listOfActions"
          :key="item"
          :actionItem="item"
          :idx="idx + 1"
          @handleRemove="handleRemove"
        >
        </to-do-list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import ToDoListItem from "./ToDoListItem.vue";
export default {
  data() {
    return {};
  },
  components: { ToDoListItem },
  emits: ["handleRemove"],
  props: ["listOfActions"],
  methods: {
    handleRemove(id) {
      this.$emit("handleRemove", id);
    },
  },
};
</script>

<style scoped>
.actions-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
