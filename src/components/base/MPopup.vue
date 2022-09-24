<template>
  <div id="dlgEmployeeDetail" class="dialog">
    <div class="dialog__content" :style='{
        "min-width": componentWidth + "px",
        "height": componentHeight ? (componentHeight + "px") : "auto"
    }'>
      <div class="dialog__button--close" @click="closeDialog"></div>
      <div class="dialog__header">
        <slot name="header"></slot>
      </div>
      <div class="dialog__body">
        <slot name="content"></slot>
      </div>
      <div class="footer__border"></div>
      <div class="dialog__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MPopup",
  props: {
    componentWidth: {
      Type: [Number, String],
      default: 100
    },
    componentHeight: {
      Type: [Number, String],
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style>
@import url(@/css/page/employee_detail.css);
</style>