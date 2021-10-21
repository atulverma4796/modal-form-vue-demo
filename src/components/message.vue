<template>
    <div class="container">
          <div class="d-flex justify-content-between align-items-center parentContainer" @click="showMenu">
        <div class="d-flex flex-row align-items-center vertical-margin">
            <span><i class="far fa-edit" style="font-size:22px;color:red"></i></span>
            <p class="page-heading grey-disabled">
                <b>Message Dealer</b>
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
        <div class="row">
            <div class="col-md--12 col-sm-12">
                <p class="normal">Add a short message to the dealer:</p>
            </div>
            <div class="card col-12  review-textarea-content">
                <textarea maxlength="250" placeholder="I would like to make an offer on your 2019 Harley-Davidson® XL 1200NS - Sportster® Iron 1200 . My offer is $50,000. " class="review-textarea" @change="e=>getTextArea(e)"/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p class="endMessage">
                     Stay Safe. Read more about 
                     <a target="_blank" href="https://www.traderinteractive.com/security-center/" class="underline"> avoiding scams and protecting your money</a>
                     . By using this site, you agree to our 
                     <a  target="_blank" href="https://www.traderinteractive.com/terms/" class="underline">Terms of Use</a>
                    & our
                    <a  target="_blank" href="/privacy/" class="underline">Privacy Policy.</a> 
                </p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"Message",
    data(){
        return{
        openAccordion:false,
        }
    },
     methods:{
          showMenu(){
          this.openAccordion=!this.openAccordion;
          },
          getTextArea(e){
              this.$emit('getMessages',e.target.value);
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
.review-textarea-content{
    flex-shrink: 1;
    padding: 15px;
    height: 200px;
        border-radius: 10px;
    margin-bottom: 30px;
    margin-top: 10px;
}
.card{
    position: relative;
    display: flex;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    padding: 0;
    border-radius: 10px;
}
.review-textarea{
        border: none;
    height: 100%;
    width: 100%;
    resize: none;
    font-family: monospace;
}
.endMessage{
        font-size: 12px;
    text-align: justify;
}
a{
    color: #2971ea;
    text-decoration: none;
    background-color: transparent
}
.underline{
text-decoration:underline;
}
</style>