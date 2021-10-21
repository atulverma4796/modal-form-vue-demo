<template>
    <div class="modalContent">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2 class="contactHeading">Contact Information</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p class="requireText">
                    <span class="text-danger">*</span>Required
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="group">
                   <Input labelName="First Name" @handleInput="getValue" name="First Name" />
                </div>
            </div>
             <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="group">
                   <Input labelName="Last Name" name="Last Name"  @handleInput="getValue"/>
                </div>
            </div>
             <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="group">
                   <Input labelName="Email" name="Email" @handleInput="getValue"/>
                </div>
            </div>
             <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="group">
                   <Input labelName="Phone Number" name="mobile"  @handleInput="getValue"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-6 d-flex justify-content-between align-items-baseline flex-wrap">
                <h2 class="offerheading">My Offer</h2>
                <span class="currentPrice">Current Asking Price $--</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12">
                 <Input labelName="Enter Offer"  name="offer" @handleInput="getValue"/>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Input from "./inputBox.vue"
export default {
    name:"Contact",
    data(){
        return {
          
        }
    },
    components:{
        Input,
    },
    methods:{
        getValue(value,name){
           this.$emit('collectValue',value,name);
        }
    }
    
}
</script>
<style scoped>
.modalContent{
    padding: 15px;
    overflow-y: scroll;
}
.container{
    margin: 0 auto;
}
.row{
    display: flex;
    flex-wrap: wrap;
}
.contactHeading{
    font-size: 15px;
    padding: 15px 0;
    margin: 0;
    font-weight: 700;
    color: #000; 
    font-family: "Open Sans",sans-serif;
}
.requireText{
        margin-bottom: 5px;
        color: #000;
        font-size: 12px;
}
.group{
     position: relative;
    height: 80px;
}

.offerheading{
        font-weight: 700;font-size: 15px;
    padding: 15px 0;
}
.currentPrice{
        font-style: italic;
    color: grey;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 10px;
}
</style>