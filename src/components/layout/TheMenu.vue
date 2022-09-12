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

    <!-- <router-link to="/" class="menu__item">
      <div class="menu__icon icon icon-24 icon__dashboard"></div>
      <div class="menu__text">Tổng quan</div>
    </router-link>
    <router-link to="/nhan-vien" class="menu__item">
      <div class="menu__icon icon icon-24 icon__dashboard"></div>
      <div class="menu__text">Tiền mặt</div>
    </router-link>
    <router-link to="/1" class="menu__item">
      <div class="menu__icon icon icon-24 icon__employee"></div>
      <div class="menu__text">Danh sách khách</div>
    </router-link>
    <router-link to="/2" class="menu__item">
      <div class="menu__icon icon icon-24 icon__report"></div>
      <div class="menu__text">Báo cáo</div>
    </router-link> -->
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
