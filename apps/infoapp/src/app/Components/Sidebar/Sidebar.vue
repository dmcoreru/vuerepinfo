<script lang="ts">
import { useBurgerStore } from '../../stores/burgerStore';

export default {
  setup() {
    const store = useBurgerStore();

    return { store };
  },
};
</script>

<template>
  <div v-if="store.burgerClickState" class="sidebar"></div>
</template>

<style scoped>
.sidebar {
  width: 100px;
  height: 100%;
  background-color: #3096fb;
}
</style>
