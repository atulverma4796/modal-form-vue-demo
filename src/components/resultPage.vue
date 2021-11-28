<template>
    <div class="container  my-4">

        <div class="row  p-1 bg-secondary ">
            <div class="col-6 bg-light "><b>First Name</b></div>
            <div class="col-6 bg-light">{{getValue.fname}}</div>
        </div>
         <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Last Name</b></div>
            <div class="col-6 bg-light">{{getValue.lname}}</div>
        </div>
         <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Email</b></div>
            <div class="col-6 bg-light">{{getValue.email}}</div>
        </div>
         <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Mobile</b></div>
            <div class="col-6 bg-light">{{getValue.mobile}}</div>
        </div>
         <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Offer</b></div>
            <div class="col-6 bg-light">{{getValue.offer}}</div>
        </div>
         <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Year</b></div>
            <div class="col-6 bg-light">{{getValue.year}}</div>
        </div>
         <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Make</b></div>
            <div class="col-6 bg-light">{{getValue.make}}</div>
        </div>
         <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Model</b></div>
            <div class="col-6 bg-light">{{getValue.model}}</div>
        </div>
       <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Mileage</b></div>
            <div class="col-6 bg-light">{{getValue.mileage}}</div>
        </div>

         <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Condition</b></div>
            <div class="col-6 bg-light">{{getValue.condition}}</div>
        </div>

          <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>VIN</b></div>
            <div class="col-6 bg-light">{{getValue.vin}}</div>
        </div>
          <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Payment Mode</b></div>
            <div class="col-6 bg-light">{{getValue.payment}}</div>
        </div>

          <div class="row  p-1 bg-secondary">
            <div class="col-6 bg-light"><b>Message</b></div>
            <div class="col-6 bg-light">{{getValue.message}}</div>
        </div>




           
       
       <!-- {{getValue}} -->
    </div>
</template>
<script>
export default {
    name:"Result",
   
    computed:{
      getValue(){
          return this.$store.state.details;
      }
    }
   
}
</script>
<style scoped>
.showdata{
    display:flex;
    flex-direction:column;
}
.container{
    padding: 25px;
}
div{
 border: .0625rem solid;
}
</style>