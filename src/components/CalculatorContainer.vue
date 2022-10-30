<template>
  <div class="container">
    <score-board />
    <keyboard-operation />
    <keyboard-value />
  </div>
</template>

<script>
import KeyboardOperation from "@/components/KeyboardOperation.vue";
import KeyboardValue from "@/components/KeyboardValue.vue";

export default {
  components: { KeyboardOperation, KeyboardValue },
};
</script>

<style scoped>
.container {
  width: 220px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  padding: 15px;
  text-align: center;
  background-color: darkgray;
  border: 2px solid teal;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
