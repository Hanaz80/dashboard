<template>
  <div >
    <appBody/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import AppBody from '@/components/app-body.vue';
export default {
  name: 'HomeView',
  components: {
    AppBody,
  }
}
</script>
