<template>
  <input :type="type" :value="modelValue" @input="handleInput($event)" class="input__form" />
</template>
<script>
import MBaseControl from "../MBaseControl.vue";
export default {
  extends: MBaseControl,
  name: "MInput",
  props: {
    type: String,
    modelValue: String
  },
  // data() {
  //   return {
  //     valueX: this.value,
  //   };
  // },
  created() {
    console.log(this.modelValue);
  },  
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
};
</script>
<style>
@import url(@/css/base/input.css);
</style>
