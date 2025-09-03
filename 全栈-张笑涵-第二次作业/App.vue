<template>
  <div>
    <p>当前选中：{{ currentBook.title || '无' }} | 总价：¥{{ total }}</p>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <BookItem
          v-for="(book, i) in bookList"
          :key="i"
          :index="i"
          :book="book"
          :isSelected="currentIndex === i"
          @change-count="updateCount"
          @remove="removeBook"
          @select="selectBook"
        />
        <tr v-if="showAddForm" class="new-book-row">
          <td>{{ bookList.length + 1 }}</td>
          <td><input v-model="newBook.title" placeholder="输入书名" ref="titleInput"></td>
          <td><input v-model.number="newBook.price" type="number" placeholder="输入价格"></td>
          <td>
            <button @click="decreaseNew">-</button>
            {{ newBook.count }}
            <button @click="increaseNew">+</button>
          </td>
          <td>
            <button @click="confirmAdd">确认</button>
            <button @click="cancelAdd">取消</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="startAdd">添加书籍</button>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from "vue"
import BookItem from "./components/BookItem.vue"

const bookList = ref([
  { title: "Vue.js实战指南", price: 88, count: 1 },
  { title: "JavaScript高级编程", price: 99, count: 1 },
  { title: "深入浅出Node.js", price: 79, count: 1 },
  { title: "React.js小书", price: 59, count: 1 }
])

const currentIndex = ref(-1) 
const currentBook = ref({})
const showAddForm = ref(false)
const newBook = ref({ title: "", price: 0, count: 1 })
const titleInput = ref(null)

const total = computed(() => {
  return bookList.value.reduce((sum, book) => sum + book.price * book.count, 0)
})

const startAdd = () => {
  showAddForm.value = true
  newBook.value = { title: "", price: 0, count: 1 }
  nextTick(() => {
    titleInput.value?.focus()
  })
}

const confirmAdd = () => {
  if (!newBook.value.title.trim()) {
    window.alert("书籍名不能为空");
    return;
  }
  if (newBook.value.price <= 0) {
    window.alert("价格需为正数");
    return;
  }
  bookList.value.push({ ...newBook.value })
  showAddForm.value = false
}

const cancelAdd = () => {
  showAddForm.value = false
}

const increaseNew = () => newBook.value.count++
const decreaseNew = () => newBook.value.count > 1 && newBook.value.count--

const updateCount = (index, count) => {
  bookList.value[index].count = count
}

const removeBook = (index) => {
  bookList.value.splice(index, 1)
  if (index < currentIndex.value) {
    currentIndex.value--;
  } else if (index === currentIndex.value) {
    currentIndex.value = -1;
  }
}

const selectBook = (index) => {
  currentIndex.value = index;
  currentBook.value = bookList.value[index];
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
p{
  font-size: 30px;
  font-weight: bold;
}
th, td {
  border: 1px solid #ddd;
  padding:20px 100px;
  text-align: center;
  line-height: 1.5; 
}
tr.selected {
  background-color: #94e6f3;
}
th {
  background-color: #f2f2f2;
  font-size: 24px;
  font-weight: bold;
}
td{
  font-size: 18px;
}
.new-book-row {
  background-color: #f5f9ff;
}
input {
  width: 80%;
  padding: 5px;
  text-align: center;
}
button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>