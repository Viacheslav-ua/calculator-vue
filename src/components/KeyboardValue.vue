<!-- eslint-disable prettier/prettier -->
<template>
  <div class="keyboard-value">
    <key-button @click="$store.commit('inputValue', btn.val)" v-for="btn in btns" v-bind:key="btn.id">
      {{ btn.val }}
    </key-button>
  </div>
</template>

<script>
import keyboard from "@/keyboard.json";

export default {
  data() {
    return {
      btns: keyboard.valueKeys,
    };
  },
  methods: {
    clickBtn(event) {
      console.log(event.target.textContent);
    },
  },
};
</script>

<style scoped>
.keyboard-value {
  width: 90%;
  margin-top: 5px;
}
</style>
