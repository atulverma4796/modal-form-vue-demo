<template>
    <div class="container-fluid" :class="{'overlay':showPopUp}">
        <div class="showButton" v-if="!showPopUp">
        <button class="btn btn-success btn-sm p-2"  @click="openPopup">Click me to open</button>
        </div>
        <div v-if="showPopUp">
        <div class="container-modal" >
          <div class="modalHeading" >
              <span class="modalText">Make an offer</span>
              <button class="btn btn-default closeBtn" @click="closeModel">
                  <span>
                    <b > X</b>
                  </span>
              </button>
          </div>
          <div class="contact" v-if="!submitAction">
           <Contact/>
            <div class="sepLine"></div>
            <Trade />
            <div></div>
            <div class="sepLine"></div>
            <ReviewPayment />
             <div class="sepLine"></div>
             <Message  name="message"/>
           </div>
            <div v-if="submitAction" class="contact">
                <Result  />
            </div>
          <div class="d-flex flex-column footer-area-div">
              <div class="d-flex justify-content-center"></div>
              <div class="d-flex justify-content-center" v-if="!submitAction">
                  <button class="button basic col-sm-12 col-md-6 " @click="submitForm">
                      <p class="para">Submit</p>
                  </button>
              </div>
              <div class="d-flex justify-content-center" v-if="submitAction">
                  <button class="button basic col-sm-12 col-md-6 " @click="closeModel">
                      <p class="para">Close</p>
                  </button>
              </div>
          </div>
        </div>
        </div>
    </div>
</template>
<script>
import ReviewPayment from "./reviewPayment.vue"
import Contact from "./contactInfo.vue"
import Trade from "./haveTrade.vue"
import Message from "./message.vue";
import Result from "./resultPage.vue"
export default {
    name:"Modal",
    components:{
        Contact,
        Trade,
        ReviewPayment,
        Message,
        Result
    },
  data(){
      return {
          showPopUp:false,
          submitAction:false,
      }
  },
  methods:{
      openPopup(){
          this.showPopUp=true;
      },
      closeModel(){
            this.showPopUp=false;
            this.submitAction=false;
      },
      submitForm(){
          this.submitAction=true;
      },
      getPayment(value){
          this.payment=value;
      },
      getMessage(value){
          this.message=value;
      }
  }
}
</script>


<style scoped>
.container-fluid{
   
    position: absolute;
    top:0;
    bottom: 0;
    left:0;
    right:0;
   width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #fff;
}
.container-fluid.overlay{
   
     background-color: rgba(0,0,0,0.3); 
     background: cover;
     z-index: -1
}
.container-modal{
   border:1px solid;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    transition: 0.5s;
    -moz-border-radius: 1px;
    -webkit-border-radius: 1px;
    border-radius: 1px;
    text-align: left;
    width: 65%;
    background: #fff;
    height: 80vh;
    border-radius: 12px;
}

.modalHeading{
    position: sticky;
    top:0px;
    width: 100%;
    height: auto;
    background: 0 0;
    font-size: 24px;
    letter-spacing: 1px;
    font-family: "Open Sans",sans-serif;
    text-transform: capitalize;
    font-weight: 400;
    color: #000;
    padding: 15px;
    border: 0;
    height: 60px;
    display: flex;
 justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
}
::-webkit-scrollbar {
  width: 0px;
}
.contact{
     overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;
    height: 70%;
}
.modalText{
        float: left;
    width: auto;
    font-size: 110%;
    width: 90%;
}
.closeBtn{
    float: right;
    margin-top: -3px;
}
.showButton{
    margin-top: 10%;
}
.footer-area-div{
    padding-top: 8px;
    margin-top: 15px;
    border-top: 1px solid rgba(0,0,0,.125);
    position:fixed;
    width: 100%;
    bottom: 10px;
    background: #fff;
}

.button{
    height: 50px;
    font-weight: 600;
    background-color:#3d3d3d;
    color: #b2b2b2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    outline: none;
        font-family: "Open Sans",sans-serif;
}
.para{
        padding-right: 5px;
    margin-bottom: 0;
    font-size: 14px;
}
.sepLine{
        width: calc(100% - 20px);
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 10px;
        border: 1px solid #e5e5e5;
}
@media screen and (max-width: 600px) {
    .container-modal{
        width: 90vw;
    }
}
@media (min-width: 991px){
   .container-modal{
        width: 50%;
    } 
}
</style>