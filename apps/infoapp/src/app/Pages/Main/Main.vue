<script setup lang="ts">
import Header from '../../Components/Header/Header.vue';
import Sidebar from '../../Components/Sidebar/Sidebar.vue';
import News from '../../Components/News/News.vue';
</script>

<template>
  <main class="main">
    <Header></Header>
    <News></News>
    <Sidebar></Sidebar>
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column;
}
</style>
