<template>
    <div>
        <input v-model="inputWord" @keydown.enter="addWord" placeholder="输入单词">
        <p>你要输入的单词是：{{ inputWord }}</p>
        <button @click="addWord">添加</button>
        <button @click="deleteWord">删除</button>
        <div v-if="isWordCountExceeded" class="word-count-warning">
            鳖加辣！单词数量太多了
        </div>
        <div class="word-list-title">
            单词列表:
        </div>
        <ul>
            <li v-for="(word, index) in words" :key="index" :class="isWordCountExceeded ? 'word-red' : 'word-black'">{{
                word }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const inputWord = ref('');
const words = ref([]);

function addWord() {
    if (inputWord.value.trim() !== '') {
        words.value.push(inputWord.value);
        inputWord.value = '';
    }
}

function deleteWord() {
    if (words.value.length > 0) {
        words.value.pop();
    }
}

const isWordCountExceeded = computed(() => {
    return words.value.length >= 5;
});
</script>

<style scoped>
.word-count-warning {
    color: red;
    text-align: center;
}

.word-list-title {
    color: black;
    text-align: center;
}

.word-red {
    color: red;
}

.word-black {
    color: black;
}
</style>