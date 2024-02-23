import { defineStore } from 'pinia';

export const useBurgerStore = defineStore('burgerStore', {
  state: () => {
    return {
      isBurgerClick: false,
    };
  },
  actions: {
    setIsBurgerClick() {
      this.isBurgerClick = !this.isBurgerClick;
    },
  },
});
