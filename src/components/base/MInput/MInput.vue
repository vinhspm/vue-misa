<template>
  <input
    :type="type"
    :value="modelValue"
    @input="handleInput($event)"
    :class="{ input__form: type !== 'checkbox', invalidInput: !isValidate }"
    :name="name"
    @focusout="checkInvalidInput($event)"
    :title="title"

  />
</template>
<script>
import MBaseControl from "../MBaseControl.vue";
import { WARNING_TXT } from "@/constants";
export default {
  extends: MBaseControl,
  name: "MInput",
  props: {
    type: String,
    modelValue: String,
    name: String,
    isRequire: {
      Type: Boolean,
      default: false,
    },
    fieldNameTxt: {
      Type: String,
      default: ''
    }
  },
  data() {
    return {
      isDate: false,
      title: '',
    };
  },
  created() {
    if (this.type === "date") {
      this.isDate = true;
    }
  },
  methods: {
    handleInput(event) {
      this.checkInvalidInput(event)
      this.$emit("update:modelValue", event.target.value);
    },
    checkInvalidInput(event) {
      if (this.isRequire) {
        if (!event.target.value && event.type === 'focusout') {
          this.isValidate = false;
          this.title = this.fieldNameTxt + WARNING_TXT.REQUIRE;
          this.$emit('field-invalid', this.title)
        } else {
          this.isValidate = true;
          this.$emit('field-valid', this.title)
          this.title = "";
        }
      }
    },
  },
};
</script>
<style>
@import url(@/css/base/input.css);
</style>
