<template>
  <div class="show-list">
    <h2>任务列表</h2>
    <div class="add-task">
      <input 
        v-model="newTask" 
      >
      <button @click="addTask">添加</button>
    </div>
    <ul>
      <li 
        v-for="(task, index) in tasks" 
        :key="index"
        @click="goToChoice(task)"
      >
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tasks = ref(['吃饭', '睡觉', '打豆豆'])
const newTask = ref('')

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value.trim())
    newTask.value = ''
  }
}

const goToChoice = (taskName) => {
  router.push(`/home/yourChoice/${taskName}`)
}
</script>

