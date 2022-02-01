<template>
  <div>
    <form @submit.prevent="handleAddItem" action="">
      <input type="text" v-model="item" />
      <button type="submit">Add item</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "",
    };
  },
  emits: ["addItem"],
  methods: {
    handleAddItem() {
      if (this.item.trim().length > 0) {
        console.log("submitted", this.item);
        this.$emit("addItem", this.item);
        this.item = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  display: flex;
  width: 400px;
  height: 30px;
  border-radius: 10px;
}
</style>
