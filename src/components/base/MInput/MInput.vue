<template>
  <input
    :type="type"
    :value="modelValue"
    @input="handleInput($event)"
    :class="{
      input__form: type !== 'checkbox',
      invalidInput: !isValidate || !isValidData.value,
    }"
    :name="name"
    @focusout="checkInvalidInput($event)"
    :title="title || isValidData.msg"
    :ref="fieldNameTxt"
    :placeholder="placeHolder"
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
      default: "",
    },
    isValidProp: {
      Type: Object,
      default: {
        value: true,
        msg: "",
      },
    },
    needMountedFocus: {
      Type: Boolean,
      default: false
    },
    placeHolder: {
      Type: String,
      default: ""
    }
  },
  data() {
    return {
      isDate: false,
      title: "",
      isValidate: true,
      isValidData: {
        value: true,
        msg: "",
      },
    };
  },

  mounted() {
    if(this.needMountedFocus) {
      this.$nextTick(() => this.$refs[this.fieldNameTxt].focus())
    }
  },

  created() {
    if (this.type === "date") {
      this.isDate = true;
    }
  },

  watch: {
    isValidProp: {
      handler() {
          this.isValidData = {...this.isValidProp};
      },
      immediate: true,
      deep: true
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
      this.checkInvalidInput(event);
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
        if (!event.target.value && event.type === "focusout") {
          this.isValidate = false;
          this.title = this.fieldNameTxt + WARNING_TXT.REQUIRE;
          this.$emit("field-invalid", this.title);
        } else {
          this.isValidate = true;
          this.$emit("field-valid", this.title);
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
