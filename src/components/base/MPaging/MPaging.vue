<template>
  <div class="table__paging">
    <div class="table__paging--left">
      Tổng số: <b>{{ total }}</b> bản ghi
    </div>

    <div class="table__paging--right">
      <div class="paging-container">
        <m-combobox width="200" :data="dataSource" fieldKey="Value" :modelValue="recordPerPage" :readOnly="true"
          :top="true" @update:modelValue="recordPerPage = $event" >
        </m-combobox>
      </div>

      <div class="table__paging--center">
        <button class="paging__button">Trước</button>
        <div class="paging__button--group">
          <button class="paging__number paging__number--selected">1</button>
          <button class="paging__number">2</button>
          <button class="paging__number">3</button>
          <button class="paging__number">4</button>
          <button class="paging__number">5</button>
          <button class="paging__number">6</button>
        </div>
        <button class="paging__button">Sau</button>
      </div>
    </div>
  </div>
</template>
<script>
import { PAGING_OPTION } from '@/constants.js'
export default {
  props: {
    total: {
      Type: Number,
      default: 100,
    },

  },
  data() {
    return {
      recordPerPage: 20,
      page: 1,
      totalPage: Number,
      dataSource: PAGING_OPTION
    }
  }
}
</script>
<style scoped>
@import url(@/css/base/mpaging.css);
</style>