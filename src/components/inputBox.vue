<template>
     <div class="group">
                    <div>
                    <label class="">{{labelName}}<span class="text-danger">*</span></label>
                    </div>
                    <input type="text" v-model="value" @change="e=>handleField(e)" :name="`${name}`" id=""  @blur="e=>getError(e)">
     </div>
</template>
<script>
export default {
    name:"Input",
    props:['labelName','name'],
    data(){
      return{
        value:""
      }
    },
    methods:{
      handleField(e){
        let data={value:e.target.value,name:e.target.name}
        this.$store.dispatch('handleInput', data)
      },
      getError(e){
        let data={value:e.target.value,name:e.target.name}
        this.$store.dispatch('validateForm',data);
      }
    }
}
</script>
<style scoped>
input[type=text]{
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid rgb(196, 195, 195);
  border-width:0.5mm;
  border-radius: 4px;
  box-sizing: border-box;
}
input:focus{
     outline: 1px solid #fff;
   border-width: 0.5mm;
}
label{
        font-size: 13px;
    font-weight: bold;
}
</style>