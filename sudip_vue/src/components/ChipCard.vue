<template>
  <h4>{{ title }}</h4>
  <div class="items">
    <div v-for="item of items" :key="item" class="item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ChipCard",
  props: {
    title: String,
    items: Array,
  },
};
</script>

<style scoped>
.items {
  display: flex;
  flex-wrap: wrap;
}

.item {
  background: rgb(243, 218, 202);
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}

h4 {
  margin-top: 14px;
  margin-bottom: 8px;
}
</style>