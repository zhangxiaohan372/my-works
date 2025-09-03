<template>
  <div class="your-choice">
    <h2>你的选择</h2>
    <p>当前选择的任务是: {{ name }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

