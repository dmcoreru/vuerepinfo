<script setup lang="ts">
import Header from '../../Components/Header/Header.vue';
import Sidebar from '../../Components/Sidebar/Sidebar.vue';
import News from '../../Components/News/News.vue';
</script>

<template>
  <main class="main">
    <Header></Header>
    <div class="content">
      <Sidebar></Sidebar>
      <News></News>
    </div>
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  overflow-y: auto;
}

.content {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}
</style>
