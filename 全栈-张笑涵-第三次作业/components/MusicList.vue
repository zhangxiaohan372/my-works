<template>
  <div class="music-list">
    <div class="popular-singers">
      <h2>热门歌手</h2>
      <div class="singer-list">
        <slot name="singers">暂无热门歌手</slot>
      </div>
    </div>
    <div class="chart-introductions">
      <slot name="chart-introductions">暂无榜单介绍</slot>
    </div>
    <div class="music-charts">
      <div class="chart-item" v-for="(chart, index) in [
          { title: '新歌榜', slotName: 'new-song-chart' },
          { title: '热歌榜', slotName: 'hot-song-chart' },
          { title: '原创榜', slotName: 'original-song-chart' }
        ]" :key="index">
        <h2>{{ chart.title }}</h2>
        <div class="chart-content">
          <slot :name="chart.slotName"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  singers: {
    type: Array as () => { id: number; name: string; photo: string }[],
    required: true
  },
  newSongs: {
    type: Array as () => { id: number; title: string }[],
    required: true
  },
  hotSongs: {
    type: Array as () => { id: number; title: string }[],
    required: true
  },
  originalSongs: {
    type: Array as () => { id: number; title: string }[],
    required: true
  }
});
</script>

<style scoped>
.popular-singers {
  margin-bottom: 20px;
}
.singer-list {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
}
.chart-introductions {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
}
.music-charts {
  display: flex;
  justify-content: space-evenly;
}
.chart-item {
  width: 30%;
}
.chart-content {
  border: 1px solid #ccc;
  padding: 10px;
}
*{
  padding: auto;
}

</style>