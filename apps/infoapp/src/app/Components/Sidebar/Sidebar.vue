<script setup lang="ts">
import { useBurgerStore } from '../../stores/burgerStore';

const store = useBurgerStore();
</script>

<template>
  <div v-if="store.isBurgerClick" class="sidebar"></div>
</template>

<style scoped>
.sidebar {
  width: 100px;
  height: 100%;
  background-color: #3096fb;
}
</style>
