<template>
   <div class="d-flex justify-content-center  p-4 login " > 
   <div >
    <form>
      
      <h4 class="text-center bold mb-4" style="color: white;">login  </h4>
    <div class="mb-3">
    
      <input type="email"  v-model="email"  class="form-control bg-light" id="exampleInputEmail1" placeholder="username" aria-describedby="emailHelp">
    </div>
    
    <div class="mb-3">
      <input type="password" v-model="password" class="form-control bg-light" id="exampleInputPassword1" placeholder="password">
    </div>
    
    <div class=" mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked" style="color:white">
      Remember me
    </label>
    <a href="#" class="float-end bb" >Forgot?</a>
    </div>
    <div class="text-center">
    <button type="button" v-on:click="Login()" class="btn ">LOGIN</button>
    
    </div>
    </form>
  </div>
  
  </div>

</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
let email = ref();
let password =ref();


function Login(){ 

let myEmail='hz@gmail.com';
let myPass =1234;



if(myEmail==email.value && myPass==password.value) {
localStorage.setItem( "email", myEmail)

return   router.push("/dashboard");

}




}   
</script>