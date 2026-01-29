<script setup>
import { ref } from 'vue';

const count = ref(0);
const step = ref(1);

function increase() {
  count.value += step.value;
}

function decrease() {
  count.value -= step.value;
}

function reset() {
  count.value = 0;
}
</script>

<template>
  <h1>Counter App</h1>
  <p>Click button to change number</p>
  <div class="count">
    {{ count }}
  </div>
  <div class="row">
    <button class="btn inc" @click="increase">Increase</button>
    <button class="btn dec" @click="decrease">Decrease</button>
  </div>
  <div class="row">
    <button class="btn reset" @click="reset">Reset</button>
  </div>
  <div class="hint">
    step: <input type="number" min="1" v-model.number="step">
  </div>
</template>

<style scoped>

</style>