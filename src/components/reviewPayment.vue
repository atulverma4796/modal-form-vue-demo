<template>
    <div class="container">
         <div class="d-flex justify-content-between align-items-center parentContainer" @click="showMenu">
        <div class="d-flex flex-row align-items-center vertical-margin">
            <span><i class="fas fa-dollar-sign" style="font-size:22px;color:red"></i></span>
            <p class="page-heading grey-disabled">
                <b>Review Payments Options</b>
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
    <div class="container" v-if="openAccordion">
        <div class="row transparent">
            <div class="col-12">
                <p class="normal">Select a Payment Option:</p>
            </div>
        </div>
        <div class="row extra transparent">
            <div class="col-12 payMode radio-item" :class='{"activeRadio":payMode=="Cash"}' @click="selectValue('Cash')">
                <span><input type="radio" name="payMode" value="Cash"  v-model="payMode" @change="e=>getRadioValue(e)"/> </span>
                <label class="">Cash</label>
            </div>
        </div>
         <div class="row extra transparent">
            <div class="col-12 payMode radio-item"  :class='{"activeRadio":payMode=="Finance"}'  @click="selectValue('Finance')">
                <span class=""><input type="radio" name="payMode" value="Finance" v-model="payMode" @change="e=>getRadioValue(e)" /> </span>
                <label class="">Finance</label>
                <div class="d-flex flex-column justify-content-between" v-if="payMode==='Finance'">
                    <div class="row transparent">
                        <div class="col-12">
                             <div class="sepLine mt-3"></div>
                        </div>
                        <div class="col-md-7 col-sm-12 crDropdown clear-padding">
                             <div class="dropd">
                              <Dropdown :years="arrayOfCredit" heading="Hows your Credit ?"/>
                              </div>
                        </div>
                        <div class="col-md-8 col-sm-12 clear-padding">
                            <strong><b>Estimated Monthly Payment</b></strong>
                        </div>
                        <div class="col-12">
                             <div class="sepLine mt-3"></div>
                        </div>
                    </div>
                    <div class="row transparent">
                        <div class="col-md-6 col-sm-12 clear-padding">
                            <div class="row d-flex justify-content-center align-items-center transparent">
                                <div class="row d-flex align-items-center secDD transparent">
                                <div class="col-5 clear-padding-mobile">
                                    <p class="normal slideLabel">Down Payment</p>
                                </div>
                                <div class="col-7 padding-right-0">
                                    <div class="group review">
                                        <input type="text" v-model="sliderValue" @change="e=>getTextValue(e)" class="input-area centered-input-area" />
                                    </div>
                                </div>
                                </div>
                                <div class="col-12 clear-padding-mobile">
<!-- slider -->                     <div class="slidecontainer">
                                    <input type="range" min="0" max="1000" v-model="sliderValue" class="slider" step="100" @change="e=>getSliderValue(e)" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 clear-padding">
                            <div class="row d-flex justify-content-center align-items-center transparent">
                                <div class="row d-flex align-items-center secDD transparent">
                                     <div class="col-5 clear-padding-mobile">
                                    <p class="normal slideLabel">Term (months)</p>
                                    </div>
                                     <div class="col-7 padding-right-0">
                                    <div class="group review">
                                        <input type="text" v-model="sliderMonth" class="input-area centered-input-area" @change="e=>getMonthValue(e)" />
                                    </div>
                                </div>
                                </div>
                                 <div class="col-12 clear-padding-mobile">
<!-- slider -->                     <div class="slidecontainer">
                                    <input type="range" min="24" max="72" v-model="sliderMonth" class="slider" step="12" @change="e=>getSliderMonthsValue(e)" />
                                    </div>
                                    <div class="row d-flex justify-content-between slider-label-container transparent">
                                        <div class="months1">24</div>
                                        <div  class="months2">36</div>
                                        <div  class="months3">48</div>
                                        <div  class="months3">60</div>
                                        <div  class="months4">72</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <p class="col-12 bold underline disclaimer-heading clear-padding" @click="showPara">
                            Disclaimer
                        </p>
                        <div class="col-12" v-if="disclaimerPara">
                            <p class="normal disclaimer-text">
                                 This monthly payment estimate is based solely on the credit and other information you have provided and is for informational purposes only. The monthly estimate does not represent a financing offer from the seller of this vehicle or from any third party, and we do not and will not disclose this estimate (or any other information you have provided) to any third-party providers of financing or credit. This estimate does not include any title or other fees and incentives, and other taxes may apply to the actual monthly payment. The actual monthly payment for this vehicle may be significantly different from this estimate. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Dropdown from "./dropDown.vue";

export default {
    name:"ReviewPayment",
    components:{
        Dropdown,
      
    },
    data(){
        return {
              openAccordion:false,
              payMode:"",
              arrayOfCredit:['Excellent (720-850)','Good (690-719)','Fair (630-689)','Repairing (300-629)'],
              sliderValue:"",
              sliderMonth:"",
              disclaimerPara:false
        }
    },
    methods:{
          showMenu(){
          this.openAccordion=!this.openAccordion;
      },
      getRadioValue(e){
          this.payMode=e.target.value;
          let data={value:e.target.value,name:e.target.name}
        this.$store.dispatch('handleInput', data)
      },
      selectValue(value){
          this.payMode=value;
      },
      getSliderValue(e){
        //   console.log(e.target.value);
        this.sliderValue=  e.target.value;
      },
      getTextValue(e){
          this.sliderValue = e.target.value;
      },
      getSliderMonthsValue(e){
            this.sliderMonth=  e.target.value;
      },
      getMonthValue(e){
           this.sliderMonth=  e.target.value;
      },
      showPara(){
          this.disclaimerPara = !this.disclaimerPara;
      }
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
.disclaimer-text{
    text-align: justify;
    font-size: 12px;
    margin-top: 10px;
}
.page-heading{
    font-size: 14px;
    margin: 0 0 0 24px;
}
p{
      font-family: "Open Sans",sans-serif;
    line-height: 24px;
}
span{
    font-size:22px;
}
.disclaimer-heading{
        margin: 10px 0 0 0;
    color: #4a90e2;
    text-decoration: underline;
}
.transparent{
    background: transparent;
}
.normal{
        font-size: 14px;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-style: normal;
}
.extra{
    padding: 5px 15px;
}
.radio-item{
    display: inline-block;
    position: relative;
}
.payMode{
    margin: 10px 0;
    border: 2px solid grey;
    border-radius: 5px;
    padding: 20px;
    cursor: pointer;
    min-height: 80px;
}
label{
    color: #666;
    font-weight: 400;
    margin-left:12px;
}
.months1{
    margin-left:20px
}
.months4{
    margin-right:20px
}
.activeRadio{
    background-color: rgba(87,102,121,.07);
}
.sepLine{
    
   border: 1px solid #e5e5e5;
}
.crDropdown{
    margin-top: 10px;
}
.secDD{
    width: 100%;
    margin: 10px 0 10px 0;
}
.slideLabel{
        color: grey;
    font-size: 13px;

}
.review{
    height:60px;

}
.group{
    position: relative;
    height: 80px;
}
.input-area{
    width: 100%;
    margin-top:15px;
    height: 50px;
    font-size: revert;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 0;
    border: 1px solid grey;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 5px;
}
.slider{
      background:#000; 
    padding: 0;
    outline: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #d3d3d3;
    opacity: .7;
    border: 1px solid #000;
 
}
</style>