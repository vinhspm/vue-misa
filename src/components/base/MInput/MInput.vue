<template>
  <input :type="type" :value="modelValue" @input="handleInput($event)"
    :class="{ input__form: type !== 'checkbox', invalidInput: !isValidate }" :name="name"
    @focusout="checkInvalidInput($event)" :title="title" />
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

    /**
     * truyền dữ liệu từ trường input lên component cha để xử lý
     * author: vinhkt
     * created: 21/09/2022
     * @param {event} event 
     */
    handleInput(event) {
      this.checkInvalidInput(event)
      this.$emit("update:modelValue", event.target.value);
    },

    /**
     * validate giá trị input có rỗng hay không dựa trên event
     * author: vinhkt
     * created: 21/09/2022
     * @param {event: $event} event 
     */
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
