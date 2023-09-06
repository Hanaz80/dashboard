<template>
     <div id="sidenav  " class="sidebar" >
  <div class="container-fluid text-center ">
    <div>
     
      <h4 >Wise</h4>
      <nav id="navbar-example3" class="navbar  flex-column align-items-stretch p-3">
        <div>
          <img class="image" src="../assets/profile2.jpg" alt="">
          <p>Louis Carter</p>
          <button v-on:click="Edit()" class="btn btx" disabled >Edit</button>
        </div>
        <div class="ms-5">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <div class="d-flex">
             
              <button v-on:click="Dashboard()" class="btn dash shadow-none" style="color:white ; margin-left: -14px;">
                <i class="bi bi-columns-gap mt-2"></i>
              Dashboard
            </button>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <div class="d-flex">
              <i class="bi bi-file-earmark-text-fill mt-2" ></i>
              <button v-on:click="activity()" class="btn" style="color:white ; border: none;" >
               Activity
            </button>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <div class="d-flex">
              <i class="bi bi-calendar2-date-fill mt-2"></i>
              <button v-on:click="schedule()" class="btn" style="color:white; border: none;" disabled>
                Schedule
            </button>
            </div>
           
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <div class="d-flex">
              <i class="bi bi-toggles mt-2"></i>
              <button v-on:click="setting()" class="btn" style="color:white ;border: none;" disabled>
                Setting
            </button>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <div class="d-flex">
              <i class="fa fa-sign-out mt-2" aria-hidden="true" style="color:white; border: none;" disabled></i>
              <button v-on:click="logout()" class="btn" style="color:white">
              logout
            </button>
            </div>
          </li>
        </ul>
      </div>
      </nav>
     
    </div>
    <div class="footer d-flex justify-content-center">
      <a href="#">Light</a>
          <div class="form-check form-switch mx-2" v-on:click="toggleDarkLight()">
           <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
           </div>
      <a href="#">Dark</a>
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
function toggleDarkLight() {
  let body = document.getElementById("body");
  let currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
</script>