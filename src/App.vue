<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->

  <!-- </nav> -->
<appLayout>
  <router-view/>
 
</appLayout>

  
</template>
<script setup>
import appLayout from './components/app-layout.vue';
  // export default ({
   
  //   components:{
  //    ppLayout
  //   },
  
  //   computed:{
  //    layout(){
  //     return (this.$route.meta.layout)? this.$route.meta.layout : "";
  
  //    }
  //   }
    
  // })

</script>

