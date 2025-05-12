<template>
  <div>
    <h1>Home</h1>
    <nav>
      <router-link to="/home/showList">Show List</router-link>
      <router-link to="/home/yourChoice">Your Choice</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>