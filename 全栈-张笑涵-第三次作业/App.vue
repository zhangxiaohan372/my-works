<template>
  <div>
    <MusicList
      :singers="singers"
      :newSongs="newSongs"
      :hotSongs="hotSongs"
      :originalSongs="originalSongs"
    >
      <template #singers>
        <div v-for="singer in singers" :key="singer.id" class="singer">
          <img :src="singer.photo" alt="歌手照片">
          {{ singer.name }}
        </div>
      </template>
      <template #chart-introductions>
        <div v-for="item in title" :key="item.id" class="title">
          <div class="text-container">
            <h3>{{ item.title }}</h3>
            <p>{{ item.introduction }}</p>
          </div>
          <div class="img-container">
            <img :src="item.img" alt="">
          </div>
        </div>
      </template>
      <template #new-song-chart>
        <ol>
          <li v-for="(song, index) in newSongs" :key="index">
            {{ song.title }}
          </li>
        </ol>
      </template>
      <template #hot-song-chart>
        <ol>
          <li v-for="(song, index) in hotSongs" :key="index">
            {{ song.title }}
          </li>
        </ol>
      </template>
      <template #original-song-chart>
        <ol>
          <li v-for="(song, index) in originalSongs" :key="index">
            {{ song.title }}
          </li>
        </ol>
      </template>
    </MusicList>
  </div>
</template>

<script setup lang="ts">
import MusicList from './components/MusicList.vue';
const title = [
  {
    id: 1,
    title: '新歌榜',
    introduction: '云音乐新歌榜：云音乐用户一周内收听所有线上歌曲官方TOP排行榜，每日更新。',
    img: 'https://p1.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg',
  },
  {
    id: 2,
    title: '热歌榜',
    introduction: '云音乐热歌榜：云音乐用户一周内收听所有新歌（一月内最新发行） 官方TOP排行榜，每天更新。',
    img: 'https://p1.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg',
  },
  {
    id: 3,
    title: '原创榜',
    introduction: '云音乐独立原创音乐人作品官方榜单，以推荐优秀原创作品为目的。每周四网易云音乐首发。',
    img: 'https://p1.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg',
  },
];

const singers = [
  { id: 1, name: '林俊杰', photo: 'http://p1.music.126.net/78q0jUUJ0h08GxAs2G-tCA==/109951168529051968.jpg' },
  { id: 2, name: '薛之谦', photo: 'http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg' },
  { id: 3, name: '陈奕迅', photo: 'http://p1.music.126.net/w_vuv9hBWq2hlJxJcmJrjg==/109951166115915081.jpg' },
  { id: 4, name: '邓紫棋', photo: 'http://p1.music.126.net/fq1O8ZRT5_FHzg_uLEtUQA==/109951167773880633.jpg' },
  { id: 5, name: '李荣浩', photo: 'http://p1.music.126.net/mkWDxcXZk8W3NwdCEMg00A==/109951165693668650.jpg' },
  { id: 6, name: '告五人', photo: 'http://p1.music.126.net/Xyoa72EqbaHGHiSfL5D_qA==/109951168306629780.jpg' },
  { id: 7, name: '周杰伦', photo: 'http://p1.music.126.net/BbR3TuhPULMLDV0MjczI4g==/109951165793869641.jpg' },
  { id: 8, name: '毛不易', photo: 'http://p1.music.126.net/W5LXS0-I-P9Wk6lQpS6HGA==/109951165787072463.jpg' },
  { id: 9, name: '张杰', photo: 'http://p1.music.126.net/-Of37SoslyjWsPhLKTogqQ==/109951168167006631.jpg' },
  { id: 10, name: '许嵩', photo: 'http://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg' },
];
const newSongs = [
  { id: 1, title: 'アイドル' },
  { id: 2, title: '声音' },
  { id: 3, title: '身骑白马' },
  { id: 4, title: '明天' },
  { id: 5, title: 'Slow' },
  { id: 6, title: '雨过天不晴' },
  { id: 7, title: '芯房' },
  { id: 8, title: '床' },
  { id: 9, title: '冠军情歌' },
  { id: 10, title: '迷宫' }
];

const hotSongs = [
  { id: 1, title: '雪 Distance' },
  { id: 2, title: '我记得' },
  { id: 3, title: '把回忆拼好给你' },
  { id: 4, title: '精卫' },
  { id: 5, title: '姑娘在远方' },
  { id: 6, title: '我的美丽feat.海洋Bo' },
  { id: 7, title: '可能' },
  { id: 8, title: '在你的身边' },
  { id: 9, title: '若把你' },
  { id: 10, title: '唯一' }
];

const originalSongs = [
  { id: 1, title: '床' },
  { id: 2, title: '经典' },
  { id: 3, title: '现在 你才不幸福' },
  { id: 4, title: '烟花之下' },
  { id: 5, title: '夏日痛哭企划' },
  { id: 6, title: '9.26' },
  { id: 7, title: '戒烟报告' },
  { id: 8, title: '8Hz' },
  { id: 9, title: '人间指南' },
  { id: 10, title: '别哭了吧' }
];
</script>

<style scoped>
.singer {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.singer img {
  width: 50px;
  height: 50px;
}
.title img{
  height: 100px;
}
.text-container {
  width: 60%; 
}
.img-container {
  width: 30%;
  display: flex;
  justify-content: flex-end; 
}
.img-container img {
  width: 100%;
  height: auto;
}
.title {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
}
</style>