<template>
  <div
    class="m-dropdown"
    :style="{
      width: width + 'px',
    }"
    v-click-away="closeOption"
  >
    <div class="input_container">
      <input
        type="text"
        @focus="inputTouched"
        v-model="valueText"
        @input="searchItem($event)"
        class="input__form"
        :class="{ invalidInput: !isValidate }"
        :title="title"
      />
      <div class="input_action" @click="showOption">
        <div
          class="icon icon-16 arrow_icon_dropdown"
          :class="{ rotate_icon: isShow }"
        ></div>
      </div>
    </div>
    <div class="m-dropdown-menu" v-show="isShow">
      <div id="header" class="bg-gray">
        <div>Mã đơn vị</div>
        <div>Tên đơn vị</div>
      </div>

      <div v-for="(item, index) in dataSearch" :key="index">
        <div
          class="menu-item"
          :class="{
            'item-active': itemSelect && itemSelect[fieldKey] == item[fieldKey],
          }"
          @click="selectItem(item)"
        >
          <div>{{ item[fieldCode] }}</div>
          <div>{{ item[fieldName] }}</div>
        </div>
      </div>

      <div id="footer" class="bg-gray">
        <div class="icon icon-16 pen_icon"></div>
        <div>Cập nhật cơ cấu tổ chức</div>
      </div>
    </div>
  </div>
</template>
<script>
import MBaseControl from "../MBaseControl.vue";
import { WARNING_TXT } from "@/constants";
export default {
  extends: MBaseControl,
  name: "MDropdown",
  props: {
    width: {
      Type: [Number, String],
      default: 421,
    },
    data: {
      Type: Array,
      default: [],
    },
    fieldKey: {
      Type: String,
      default: "ID",
    },
    fieldCode: {
      Type: String,
      default: "Code",
    },
    fieldName: {
      Type: String,
      default: "Name",
    },
    modelValue: String,
    isRequire: {
      Type: Boolean,
      default: false,
    },
    fieldNameTxt: {
      Type: String,
      default: ''
    }
  },
  created() {
    this.dataSearch = { ...this.data };
    this.valueText = this.findNameByKey(this.modelValue);
  },
  data() {
    return {
      itemSelect: null,
      isShow: false,
      dataSearch: this.data,
      valueText: null,
      title: "",
    };
  },

  methods: {
    searchItem(val) {
      this.isShow = true;
      let keySearch = val.target.value;
      this.dataSearch = this.data.filter((item) => {
        return (
          item[this.fieldName].toLowerCase().includes(keySearch.toLowerCase()) |
          item[this.fieldCode].toLowerCase().includes(keySearch.toLowerCase())
        );
      });
      if (!keySearch || keySearch == "") {
        this.itemSelect = null;
        this.dataSearch = this.data;
      }
      let dataMatch = this.data.filter((item) => {
        return (
          item[this.fieldName].toLowerCase() === (keySearch.toLowerCase())          
        );
      });
      if(dataMatch.length === 0) {
        this.$emit("update:modelValue", "")
      }
      this.checkInvalidInput(val);
    },
    findNameByKey(key) {
      for (let i = 0; i < this.data.length; i++) {
        if (key === this.data[i][this.fieldKey]) {
          this.itemSelect = this.data[i];
          this.selectItem(this.itemSelect);
          return this.data[i][this.fieldName];
        }
      }
    },
    showOption() {
      this.isShow = !this.isShow;
     
    },
    inputTouched() {
      if(!this.valueText) {
        this.valueText = '';
      }
    },
    closeOption() {
      this.isShow = false;
      this.checkInvalidInputValue()
    },
    selectItem(item) {
      this.itemSelect = item;
      this.dataSearch = { ...this.data };
      this.valueText = item[this.fieldName];
      this.isShow = false;
      this.$emit("update:modelValue", this.itemSelect[this.fieldKey]);
      this.checkInvalidInputValue();
    },

    checkInvalidInput(event) {
      if (this.isRequire) {
        if (!event.target.value && event.type !== "input") {
          this.isValidate = false;
          this.title = this.fieldNameTxt + WARNING_TXT.REQUIRE;
          this.$emit('field-invalid', this.title)
        } else if(!this.dataSearch.length && event.type ) {
          this.isValidate = false;
          this.title = WARNING_TXT.dataNotInList(this.fieldNameTxt);
          this.$emit('field-invalid', this.title)
        } else {
          this.isValidate = true;
          this.$emit('field-valid', this.title)
          this.title = "";

        }
      }
    },
    
    checkInvalidInputValue() {
      if (this.isRequire) {
        if (this.valueText === '') {
          this.isValidate = false;
          this.title =this.fieldNameTxt + WARNING_TXT.REQUIRE;
          this.$emit('field-invalid', this.title)
        } else if(this.dataSearch.length === 0) {
          this.isValidate = false;
          this.title = WARNING_TXT.dataNotInList(this.fieldNameTxt);
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
<style scoped>
@import url(@/css/base/input.css);
@import url(@/css/base/combobox.css);
@import url(@/css/base/comboboxDepartment.css);
</style>
