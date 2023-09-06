<template>
   <div  class="container-fluid">
        <hello-world  class="col-md-10 ms-auto" />
       <appSlidebar  class="col-2 "/>
        <slot/>
    </div>
</template>
<script setup>
import appSlidebar from './app-slidebar.vue';
import HelloWorld from './HelloWorld.vue';

</script>