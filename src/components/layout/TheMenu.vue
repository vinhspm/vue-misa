<template>
  <div class="menu">
    <router-link
      v-for="item in menuItems"
      :key="menuItems.indexOf(item)"
      :to="item.route"
      class="menu__item"
    >
      <div
        class="menu__icon icon icon-24 sprite_icon"
        :style="{
          'background-position': (-item.iconCoordinates[0])+'px' + ' ' + (-item.iconCoordinates[1])+'px',
        }"
      ></div>
      <div class="menu__text">{{item.text}}</div>
    </router-link>

  </div>
</template>
<script>
import {MENU_ITEMS} from "../../constants.js";
export default {
  data() {
    return {
      menuItems: [],
    };
  },
  created() {
    this.menuItems = MENU_ITEMS;
    console.log(this.menuItems);

  }
};
</script>
<style scoped>
@import url(../../css/layout/menu.css);
</style>
