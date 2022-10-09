<template>
  <div class="content" v-loading="isLoading">
    <router-view @update:loading="changeLoading($event)"></router-view>
  </div>
</template>
<script>
export default {
  name: "TheContent",
  props: [],
  data() {
    return {
      isLoading: false,
    };
  },
  components: {},
  methods: {
    changeLoading(event) {
      this.isLoading = event;
    }
  }
};
</script>
<style scoped>
@import url(../../css/layout/content.css);
</style>
