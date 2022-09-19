
<script>
  export default{
      name: "MInput",
      props: {
          rules: {
              Type: String,
              default: null
          }
      },
      data(){
          return{
              isValidate: false
          }
      },
      methods: {
          validateControl(){
              if(this.rules && this.rules.length > 0){
                  var lstRule = this.rules.split(";");
                  lstRule.forEach(rule => {
                      if(rule == "require"){
                          if(!this.value){
                              this.isValidate = true;
                          }
                      }
                      else if(rule == "email"){
                          //Kiểm tra email hợp lệ không
                      }
                  });
              }
          }
      }
  }
  </script>
     <style>
     @import url(@/css/base/input.css);
     </style>