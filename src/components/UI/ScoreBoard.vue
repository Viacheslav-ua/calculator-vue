<template>
  <span class="input">{{ $store.state.calc.calculations }}</span>
</template>

<script>
export default {
  name: "score-board",
};
</script>

<style scoped>
.input {
  width: 75%;
  height: 20px;
  background-color: azure;
  border: 2px solid teal;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 10px;
  text-align: right;
  font-size: 18px;
  font-weight: 600;
  color: rgb(80, 38, 8);
}
</style>
