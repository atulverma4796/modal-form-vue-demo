<template>

    <div class="dropdown">
        <div></div>
        <div class="input-group mb-3">
                <select  class="form-select" >
                  <option selected>{{heading}}</option>
                  <option v-for="year in years" :key="year">{{ year }}</option>
                </select>
              </div>
    </div>

</template>
<script>
export default {
   name:"Dropdown" ,
   props:['years','heading']
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