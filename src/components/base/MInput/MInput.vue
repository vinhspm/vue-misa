<template>
  <input :type="type" :value="modelValue" @input="handleInput($event)" :class="{input__form: type!=='checkbox'}" :name="name"/>
</template>
<script>
import MBaseControl from "../MBaseControl.vue";
import {formatDateInput} from "@/js/base.js"
export default {
  extends: MBaseControl,
  name: "MInput",
  props: {
    type: String,
    modelValue: String,
    name: String,
  },
  data() {
    return {
      isDate: false,
    };
  },
  created() {
    if(this.type === 'date') {
      this.isDate = true;
    }
  },  
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    formatDateInput(value, event) {
      console.log(event);
      return formatDateInput(value)
    },
  },
};
</script>
<style>
@import url(@/css/base/input.css);
</style>
