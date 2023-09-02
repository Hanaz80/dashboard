<template>
     <div id="sidenav  " class="sidebar" >
  <div class="container-fluid  ">
    <div>
     
      <h4 >Wise</h4>
      <nav id="navbar-example3" class="navbar  flex-column align-items-stretch p-3">
        <div>
          <img class="image" src="../assets/profile2.jpg" alt="">
          <p>Louis Carter</p>
          <button v-on:click="Edit()" class="btn btx" >Edit</button>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item ">
            <div class="d-flex">
             <i class="bi bi-columns-gap mt-2"></i>
              <button v-on:click="Dashboard()" class="btn" style="color:white">
                
              Dashboard
            </button>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <div class="d-flex">
              <i class="bi bi-file-earmark-text-fill mt-2" ></i>
              <button v-on:click="activity()" class="btn" style="color:white">
               Activity
            </button>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <div class="d-flex">
              <i class="bi bi-calendar2-date-fill mt-2"></i>
              <button v-on:click="schedule()" class="btn" style="color:white">
                Schedule
            </button>
            </div>
           
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <div class="d-flex">
              <i class="bi bi-toggles mt-2"></i>
              <button v-on:click="setting()" class="btn" style="color:white">
                Setting
            </button>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <div class="d-flex">
              
              <button v-on:click="logout()" class="btn" style="color:white">
              logout
            </button>
            </div>
          </li>
        </ul>
      </nav>
     
    </div>
    
    <div class="footer d-flex ">
      <p>Light</p>
        <button class="btn dl ">
          <div class="d-flex">
            <span class="bi bi-sun-fill " style="color:wheat"></span>
            <i class="bi bi-circle-fill ms-2" style="color:white" ></i>   
          </div>
        </button>
      <p>Dark</p>
    </div>
  </div>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function Dashboard(){
  return router.push('/dashboard')
}
function activity(){ 


     return   router.push('/activity');
}
function Edit(){
  return   router.push('/edit');

}
function schedule(){
  return router.push('/schedule')
}
function setting(){
  return router.push('/setting')
}
function logout(){
  return router.push('/')
}
</script>