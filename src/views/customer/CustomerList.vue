<template>
  <div>
    <div>
      <label for="">Họ và tên 1:</label>
      <input id="inputName" class="nvmanh" :class="{'border-red':!isValid}" @input="inputOnChange" type="text" v-model="name" /><br />
    
    </div>
    <div>
        {{upperCaseFullName}}<br/>
        {{methodUpperCaseFullName()}}
    </div>
    <ul>
        <li v-for="(customer,index) in customers" :key="customer.CustomerCode">{{index}} -- {{customer.CustomerCode}} - {{methodUpperCaseFullName(customer.FullName)}}</li>
       
    </ul>
    <!-- <div>
      <label for="">Họ và tên 2:</label>
      <input type="text" v-model="name" />
    </div> -->

    <div>
      <button @click="btnSaveOnClick">Lưu</button>
    </div>
  </div>
</template>

<style scoped>
.border-red{
    border:1px solid #ff0000;
}
input{
    outline: none;
}
</style>