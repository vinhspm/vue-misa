<template>
    <div class="menu">
                <router-link to="/" class="menu__item">
                    <div class="menu__icon icon icon-24 icon__dashboard"></div>
                    <div class="menu__text">Tổng quan</div>
                </router-link>
                <router-link to="/nhan-vien" class="menu__item">
                    <div class="menu__icon icon icon-24 icon__dashboard"></div>
                    <div class="menu__text">Danh sách nhân viên</div>
                </router-link>
                <router-link to="/khach-hang" class="menu__item">
                    <div class="menu__icon icon icon-24 icon__employee"></div>
                    <div class="menu__text">Danh sách khách</div>
                </router-link>
                <router-link to="/bao-cao" class="menu__item">
                    <div class="menu__icon icon icon-24 icon__report"></div>
                    <div class="menu__text">Báo cáo</div>
                </router-link>
            </div>
</template>
<style scoped>
@import url(../../css/layout/menu.css);
</style>