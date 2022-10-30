<template>
  <div class="keyboard-operation">
    <key-button v-for="btn in btns" v-bind:key="btn.id">
      {{ btn.val }}
    </key-button>
  </div>
</template>

<script>
import keyboard from "@/keyboard.json";

export default {
  data() {
    return {
      btns: keyboard.operationKeys,
    };
  },
};
</script>

<style scoped>
.keyboard-operation {
  width: 90%;
  margin-top: 10px;
}
</style>
