<template>
    <div class="container d-flex justify-content-center my-4">
        <h2 class="m-auto text-center text-info">
            Your Response is recorded! Please visit another Product.
             </h2>
             <div class="showdata">
           <div><b>First Name:</b> {{contactData.fname}} </div> 
                 <div><b>Last Name:</b> {{contactData.lname}} </div>
                       <div><b>Email:</b> {{contactData.email}} </div> 
                             <div><b>Mobile:</b> {{contactData.mobile}} </div>  
                                   <div><b>Offer:</b> {{contactData.offer}} </div> 
          <div><b>Year:</b>{{tradeDetail.year}}</div>  
          <div><b>Make:</b>{{tradeDetail.make}}</div>  
          <div><b>Model:</b>{{tradeDetail.model}}</div>  
          <div><b>Mileage:</b>{{tradeDetail.mileage}}</div>  
          <div><b>Condition:</b>{{tradeDetail.condition}}</div>  
          <div><b>VIN:</b>{{tradeDetail.vin}}</div>  

           <div><b>Payment Mode: </b>{{payment}}</div> 
           <div><b>Message:</b> {{message}}</div>
       </div>
    </div>
</template>
<script>
export default {
    name:"Result",
    props:['contactData','tradeDetail','payment','message'],
    data(){
        return {
            fname:"",
            lname:"",
            email:"",
            mobile:"",
            offer:"",
            year:"",
            make:"",
            model:"",
            condition:"",
            mileage:"",
            vin:""
        }
    },
    // mounted(){
    //     const {fname,lname,email,mobile,offer}=this.$route.contactData;
    //     const{year,make,model,mileage,condition,vin}=this.$route.tradeDetail
    //     this.fname=fname;
    //     this.lname=lname;
    //     this.email=email;
    //     this.mobile=mobile;
    //     this.offer=offer;
    //     this.year=year;
    //     this.make=make;
    //     this.model=model;
    //     this.mileage=mileage;
    //     this.condition=condition;
    //     this.vin=vin;
    // }
}
</script>
<style scoped>
.showdata{
    display:flex;
    flex-direction:column;
}
</style>