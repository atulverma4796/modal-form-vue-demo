import { createStore } from "vuex";

 const store = createStore({

    state:{
        details:{
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
            vin:"",
            payMode:"",
            message:""
        },
        error:{},
    },
    mutations:{
        setValue(state,data){
            if(data.name==="First Name"){
                state.details.fname=data.value;
            }
            if(data.name==="Last Name"){
                state.details.lname=data.value;
            }
             if(data.name==="Email"){
                state.details.email=data.value;
            }
            if(data.name==="mobile"){
                state.details.mobile=data.value;
            }
            if(data.name==="offer"){
                state.details.offer=data.value;
            }
            if(data.name==="Year"){
                state.details.year=data.value;
            }
            if(data.name==="Make"){
            state.details.make=data.value;
            }
            if(data.name==="Model"){
                state.details.model=data.value;
            }
            if(data.name==="Condition"){
                state.details.condition=data.value;
            }
            if(data.name==="Mileage"){
                state.details.mileage=data.value;
            }
            if(data.name==="VIN"){
                state.details.vin=data.value;
            }
            if(data.name==="message"){
                state.details.message=data.value;
            }
            if(data.name==="payMode"){
                state.details.payMode=data.value;
            }
        },
        SET_VALIDATION(state,data){
            if(data.name==="First Name" && data.value===""){
                state.error.fname="Invalid First Name!";
            }
            if(data.name==="Last Name" && data.value===""){
                state.error.lname="Invalid Last Name!";
            }
             if(data.name==="Email" && data.value===""){
                state.error.email="Invalid Email-id!";
            }
            if(data.name==="mobile" && data.value===""){
                state.error.mobile="Invalid Phone Number!";
            }
            if(data.name==="Email" && data.value!==""){
                if(!data.value.includes('@' && '.')){
                    state.error.email="Invalid Email-id!";
                }
            }
            if(data.name==="offer" && data.value===""){
                state.error.offer="Offer too low! Please enter valid amount.";
            }
        }
    },
    getters:{
        getErrors(state){
            return state.error;
        }
    },
    actions:{
        handleInput({commit},data){
            commit('setValue',data);
        },
        validateForm({commit},data){
            commit('SET_VALIDATION',data);
        }
    }

});
export default store;