<script lang="ts">
import { useBurgerStore } from '../../stores/burgerStore';
import Burger from '../Icons/Burger/Burger.vue';

export default {
  setup() {
    const store = useBurgerStore();

    return { store };
  },

  components: {
    Burger,
  },
};
</script>

<template>
  <header class="header">
    <Burger
      @click="store.setIsBurgerClick()"
      width="40"
      height="40"
      iconColor="#fff"
      class="burger"
    />
    <p class="logo">News App</p>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #2d2cff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  box-sizing: border-box;
  padding: 0 40px;
  flex-shrink: 0;
}
.logo {
  font-size: 24px;
  font-weight: 900;
  line-height: normal;
  color: #fff;
}
.burger {
  &:hover {
    cursor: pointer;
  }
}
</style>
