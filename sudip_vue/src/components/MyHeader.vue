<template>
  <header id="header">
    <h1>{{ title }}</h1>
    <h4>{{ subtitle }}</h4>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped>
#header {
  text-align: center;
  padding: 20px;
  background-color: rgb(254, 208, 121);
}

#header h1 {
  margin-bottom: 10px;
}
</style>