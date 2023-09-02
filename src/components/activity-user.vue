<template >
    <div class="activity col-md-10 ms-auto">

<table class="table mt-4  table-dark">
    <thead >
        <tr >
         <th scope="col">id</th>
         <th scope="col">name</th>
         <th scope="col"> email</th>
         <th scope="col">nickname</th>
         <th scope="col">family name</th>
         <th scope="col">Last Login</th>
         <th scope="col">status</th>


       </tr>
    </thead>
    <tbody>
        <tr v-for="(user, index) in users" :key="index">
            <td v-text=" user.user_id"></td>
            <td>{{user.name}} </td>
            <td>{{user.email}}</td>
            <td>{{user.nickname}}</td>
            <td>{{ user.family_name }}</td>
            <td>{{ user.last_login }}</td>
            <td ></td>
        </tr>
    </tbody>
</table>
<hr>
<div >


</div>

</div>    
</template>
<script setup>
import axios from 'axios';
import { $ref } from "vue/macros";
let users = $ref({}) 
function getUser(){
   try{
    axios.get("http://localhost:8080/jsonusers/index.json",{
    headers: {
    'Content-Type': 'application/json'
    }
  })
   .then(function (response) {
    console.log(response.data);
    users = response.data;

   }).catch(function(error){
       console.log(error);
   })
} catch (error) {
    return error.response;
  }

}
getUser()
</script>