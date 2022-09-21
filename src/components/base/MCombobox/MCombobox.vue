<template>
  <div class="m-dropdown" :style='{
  "width": width + "px"
  }' v-click-away="closeOption">
    <div>
      <input :disabled="false" type="text" v-model="valueText" @input="searchItem($event)" class="input__form"
        :readonly="readOnly" @click="showOption" />
      <div class="input_action" v-show="top" @click="showOption">
        <div class="icon icon-16 arrow_icon_dropdown" :class="{rotate_icon: isShow}"></div>
      </div>
    </div>
    <div class="m-dropdown-menu" :class="{showOnTop: top}" v-if="isShow">

      <div v-for="(item,index) in dataSearch" :key="index">
        <div class="menu-item" :class='{"item-active": itemSelect && itemSelect[fieldKey] == item[fieldKey]}'
          @click="selectItem(item)">{{item[fieldName]}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import MBaseControl from "../MBaseControl.vue";

export default {
  extends: MBaseControl,
  name: "MDropdown",
  props: {
    width: {
      Type: [Number, String],
      default: 421
    },
    data: {
      Type: Array,
      default: []
    },
    fieldKey: {
      Type: String,
      default: "ID"
    },
    fieldName: {
      Type: String,
      default: "Name"
    },
    readOnly: {
      Type: Boolean,
      default: false,
    },
    top: {
      Type: Boolean,
      default: false,
    },
    modelValue: String
  },
  created() {
    this.dataSearch = { ...this.data };
    this.valueText = this.findNameByKey(this.modelValue)
  },
  data() {
    return {
      itemSelect: null,
      isShow: false,
      dataSearch: this.data,
      valueText: null
    }
  },

  methods: {
    searchItem(val) {
      let keySearch = val.target.value;
      this.dataSearch = this.data.filter(x => x[this.fieldName].toLowerCase().includes(keySearch.toLowerCase()));
      if (!keySearch || keySearch == "") {
        this.itemSelect = null;
        this.dataSearch = this.data;
      }
    },
    findNameByKey(key) {
      for (let i = 0; i < this.data.length; i++) {
        if (key === this.data[i][this.fieldKey]) {
          this.itemSelect = this.data[i];
          this.selectItem(this.itemSelect)
          return this.data[i][this.fieldName]
        }
      }
    },
    showOption() {
      this.isShow = !this.isShow;
    },
    closeOption() {
      this.isShow = false;
    },
    selectItem(item) {
      this.itemSelect = item;
      this.valueText = item[this.fieldName];
      this.closeOption();
      this.$emit("update:modelValue", this.itemSelect[this.fieldKey]);
    }
  }
}
</script>
<style scoped>
@import url(@/css/base/input.css);
@import url(@/css/base/combobox.css)
</style>