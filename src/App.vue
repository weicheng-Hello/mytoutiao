<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style > 

  *{
    --themeColor:#ea4245;
  }
  .tt-message {
  line-height: 50px;
  font-size: 16px;
  color: #6ac144;
  text-align: center;
  left: 50%;
  position: fixed;
  top: 0;
  width: 400px;
  height: 50px;
  margin-left: -200px;
}

</style>
