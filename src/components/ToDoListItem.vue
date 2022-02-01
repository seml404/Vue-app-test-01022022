<template>
  <li class="actions-item">
    <span :class="{ done: completed }">
      <input
        type="checkbox"
        class="input"
        v-on:change="() => handleComplete()"
      />
      <strong>{{ idx }} {{ actionItem.title }}</strong>
    </span>
    <button
      class="btn btn-close"
      @click="this.$emit('handleRemove', actionItem.id)"
    >
      &times;
    </button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      completed: this.actionItem.completed,
    };
  },
  props: {
    actionItem: {
      type: Object,
      required: true,
    },
    idx: { type: Number, required: true },
  },
  emits: ["handleRemove"],
  methods: {
    handleComplete() {
      this.completed = !this.completed;
    },
  },
};
</script>

<style lscoped>
.actions-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
}

.done {
  text-decoration: line-through;
}

.input {
  margin-right: 1rem;
}

.btn-close {
  background: red;
  border-radius: 50%;
  color: #ffff;
}
</style>
