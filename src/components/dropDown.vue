<template>

    <div class="dropdown">
        <div></div>
        <div class="input-group mb-3">
                <select  class="form-select" :name="`${name}`" @change="e=>getDD(e)" >
                  <option selected>{{heading}}</option>
                  <option v-for="year in years" :key="year">{{ year }}</option>
                </select>
              </div>
    </div>

</template>
<script>
export default {
   name:"Dropdown" ,
   props:['years','heading','name'],
   methods:{
     getDD(e){
        let data={value:e.target.value,name:e.target.name}
        this.$store.dispatch('handleInput', data)
     }
   }
}
</script>
<style scoped>

select{
  width: 100%;
  padding: 0px 10px;
  display: inline-block;
  background: #fff;
  border-width:0.5mm;
  border-radius: 4px;
  height:53px;
  box-sizing: border-box;
}
select:focus{
     outline: 1px solid #fff;
   border-width: 0.5mm;
}
</style>