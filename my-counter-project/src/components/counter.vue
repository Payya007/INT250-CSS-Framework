<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const step = ref(1);
const previousCount = ref(null); //  ไว้เก็บค่าเก่าก่อนหน้า

const min = 0;   
const max = 100; 

// ฟังก์ชันบันทึกstate ก่อนเปลี่ยนค่า
const saveState = () => {
  previousCount.value = count.value;
};

function increase() {
  if (count.value + step.value <= max) {
    saveState();
    count.value += step.value;
  } else {
    saveState();
    count.value = max; //  ถ้าเกิน max ให้ค้างที่ max
  }
}

function decrease() {
  if (count.value - step.value >= min) {
    saveState();
    count.value -= step.value;
  } else {
    saveState();
    count.value = min; // ถ้าต่ำกว่า min ให้ค้างที่ min
  }
}

function reset() {
  saveState();
  count.value = 0;
}


function undo() {
  if (previousCount.value !== null) {
    count.value = previousCount.value;
    previousCount.value = null; // ทำเสร็จแล้วล้างค่าเพื่อ Disable ปุ่ม
  }
}
</script>

<template>
  <div class="card">
    <h1>Counter App</h1>
    <p>Click button to change number</p>
    
    <div class="count-display">
      {{ count }}
    </div>

    <div class="step-container">
      Step: <input type="number" min="1" v-model.number="step" class="step-input">
    </div>

    <div class="row">
      <button class="btn dec" @click="decrease" :disabled="count <= min">Decrease</button>
      <button class="btn inc" @click="increase" :disabled="count >= max">Increase</button>
    </div>
    
    <div class="row">
      <button class="btn reset" @click="reset">Reset</button>
      <button class="btn undo" @click="undo" :disabled="previousCount === null">Undo</button>
    </div>
  </div>
</template>

<style scoped>

.card {
  max-width: 320px;
  margin: 40px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  text-align: center;
  font-family: 'Inter', sans-serif;
}

.count-display {
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 20px 0;
}

.row {
  display: flex;
  justify-content: center;
  gap: 12px; 
  margin-top: 15px;
}

.step-container {
  margin-bottom: 20px;
}

.step-input {
  width: 60px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  text-align: center;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  flex: 1; 
}

.inc { background-color: #42b883; color: white; }
.dec { background-color: #e74c3c; color: white; }
.reset { background-color: #95a5a6; color: white; }
.undo { background-color: #34495e; color: white; }


.btn:disabled {
  background-color: #dfe6e9;
  color: #b2bec3;
  cursor: not-allowed;
  transform: none;
}

.btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>