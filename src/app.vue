<script setup>
import { ref } from 'vue'

const count = ref(0)

/**
 * Increments the count value
 */
const increment = () => {
	count.value++
}

/**
 * Updates count from text input
 * @param {Event} e - Input event
 */
const updateCount = (e) => {
	// @ts-ignore - e.target.value exists on input elements
	const value = parseInt(e.target.value || '0')
	if (!isNaN(value)) {
		count.value = value
	}
}

</script>

<template>
  <sp-theme :system.attr="'spectrum'" color="light" scale="medium" class="custom-theme">
    <div class="container">
      <h1>Vue 3</h1>

      <div class="card">
        <div class="result-display" data-cy="result">{{ count }}</div>

        <sp-divider size="m"></sp-divider>

        <sp-field-label>Edit Value</sp-field-label>
        <sp-textfield
          :value="count"
          @input="updateCount"
          type="number"
          class="counter-input"
        ></sp-textfield>

        <sp-button
          variant="accent"
          size="l"
          @click="increment"
          data-cy="add-btn"
          class="add-button"
        >
          Add
        </sp-button>
      </div>

    </div>
  </sp-theme>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
}

.card {
  border: 1px solid #e1e1e1;
  padding: 40px;
  border-radius: 8px;
  display: inline-block;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 400px;
}

.result-display {
  font-size: 64px;
  font-weight: bold;
  color: #323232;
  margin-bottom: 20px;
}

.counter-input {
  width: 100%;
  margin: 15px 0 20px 0;
}

.add-button {
  width: 100%;
}

sp-divider {
  margin: 20px 0;
}
</style>