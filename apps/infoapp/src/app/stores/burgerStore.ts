import { defineStore } from 'pinia';

export const useBurgerStore = defineStore('burgerStore', {
  state: () => {
    return {
      isBurgerClick: false,
    };
  },

  getters: {
    burgerClickState: (state) => state.isBurgerClick,
  },

  actions: {
    setIsBurgerClick() {
      this.isBurgerClick = !this.isBurgerClick;
    },
  },
});
