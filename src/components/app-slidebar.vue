<template>
     <div id="sidenav  " class="sidebar" >
  <div class="container-fluid text-center ">
    <div>
     
      <h4 >Wise</h4>
      
      <nav id="navbar-example3" class="navbar  flex-column align-items-stretch p-3">
        <div>
          <img class="image mt-3 mb-1" src="../assets/profile2.jpg" alt="">
          <p>Louis Carter</p>
          <div>
          <button v-on:click="Edit()" class="btn btx px-2 py-0 mb-5  text-center" disabled >Edit</button>
          </div>
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
              <button v-on:click="activity()" class="btn shadow-none" style="color:white ; border: none;" >
               Activity
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
           <button class="btn py-0 px-1 mx-2 shadow-none btx" v-on:click="toggleDarkLight()">
             <div class="d-flex">
              <i class="bi bi-brightness-low-fill" ></i>
              <i class="bi bi-record-fill px-0 py-0" style="color:yellow !important"></i>


             </div>
           </button>
      <a href="#">Dark</a>
    </div>
  </div>
</div>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useStore()
function Dashboard(){
  return router.push('/dashboard')
}
function activity(){ 


     return   router.push('/activity');
}
function Edit(){
  return   router.push('/edit');

}
function logout(){
  return router.push('/')
}
function toggleDarkLight() {
  // store.dispatch('asyncIncrement')
  store.dispatch('darkmode')
}

</script>