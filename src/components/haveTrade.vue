<template>
<div class="container">
    <div class="d-flex justify-content-between align-items-center parentContainer" @click="showMenu">
        <div class="d-flex flex-row align-items-center vertical-margin">
            <span><i class='fas fa-motorcycle' style='font-size:22px;color:red'></i></span>
            <p class="page-heading grey-disabled">
                <b>Have a Trade-in ?</b>
                <i>(Optional)</i>
            </p>
        </div>
        <span v-if="!openAccordion">
             <i class="fas fa-angle-down"></i>
        </span>
           <span v-if="openAccordion">
            <i class="fas fa-angle-up"></i>
        </span>
    </div>
    <div class="container mb-4" v-if="openAccordion">
        <div class="row">
            <div class="btn-group col-sm-12 col-md-6">
                <button class="col-6 b-option left-button" :class='{"highlight":!tradeIn}' @click="noTrade">No Trade in</button>
                <button class="col-6 b-option right-button" :class='{"highlight":tradeIn}'  @click="TradeIn">Yes, I have a Trade-in</button>
            </div>
        </div>
        <div v-if="tradeIn">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="dropd">
                  <Dropdown :years="years" heading="Select Year" name="Year"  @handleDD="getValue"/>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <Input labelName="Make" name="Make"  @handleInput="getValue"/>
                </div>
                 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <Input labelName="Model" name="Model"  @handleInput="getValue"/>
                </div>
                 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="dropd">
                  <Dropdown :years="condition" heading="Condition" name="Condition" @handleDD="getValue"/>
                    </div>
                </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <Input labelName="Estimated Mileage" name="Mileage"  @handleInput="getValue"/>
                </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <Input labelName="VIN" name="VIN"  @handleInput="getValue"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Input from "./inputBox.vue";
import Dropdown from "./dropDown.vue";
export default {
  name:"Trade",
  components:{
    Dropdown,
    Input
  } ,
  data(){
      return{
          openAccordion:false,
          tradeIn:false,
          years:[],
          condition:['Excellent','Good','Fair','Poor']
      }
  } ,
  methods:{
      showMenu(){
          this.openAccordion=!this.openAccordion;
      },
      noTrade(){
          this.tradeIn=false;
      },
      TradeIn(){
          this.tradeIn=true;
      },
      getValue(value,name){
          this.$emit('collectValues',value,name)
      }

  },
  created(){
       const year = new Date().getFullYear()
       this.years=Array.from({length: year - 1990}, (value, index) => 1991 + index);
  }
}
</script>
<style scoped>
.parentContainer{
    margin-left: 12px;
    margin-right: 12px;
}
.vertical-margin{
    margin:10px 0;
}
.page-heading{
    font-size: 14px;
    margin: 0 0 0 10px;
}
p{
      font-family: "Open Sans",sans-serif;
    line-height: 24px;
}
.btn-group{
    position: relative;
    display: inline-flex;
    vertical-align: middle;
}
.container{
    transition-delay: 00.5s;
}
span{
    font-size:22px;
}
.b-option{
    outline: none;
    font-size: 14px;
    height: 50px;
    margin-top: 5px;
    margin-bottom: 30px;
    font-weight: 400;
    background: #fff;
    border: 1px solid grey;
}

.left-button{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
.right-button{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.highlight{
font-weight: 700;
    border: 2px solid #b52519;;
    background-color: #b5251920;
}
.row{
    background: #fff;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    flex-wrap: wrap;
}
.dropd{
    margin-top: 29px;
}
</style>