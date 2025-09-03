<template>
  <tr :class="{ selected: isSelected }">
    <td>{{ index + 1 }}</td>
    <td @click="$emit('select', index)">
      {{ book.title }}
    </td>
    <td>¥{{ book.price }}</td>
    <td>
      <button @click.stop="decrease">-</button>
      {{ book.count }}
      <button @click.stop="increase">+</button>
    </td>
    <td>
      <button @click.stop="$emit('remove', index)">删除</button>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  book: {
    type: Object,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['change-count','remove','select'])

const increase = () => {
  emit('change-count', props.index, props.book.count + 1)
}

const decrease = () => {
  if (props.book.count > 0) {
    emit('change-count', props.index, props.book.count - 1)
  }
}
</script>

<style scoped>
button {
  min-width: 30px;
  padding: 3px 6px;
}
</style>