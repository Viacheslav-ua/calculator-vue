<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "key-button",
};
</script>

<style scoped>
.btn {
  margin: 5px;
  padding: 2px;
  width: 50px;
  height: 30px;
  color: teal;
  font-size: 18;
  font-weight: 500;
}
</style>
