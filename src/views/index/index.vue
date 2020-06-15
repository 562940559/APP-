<template>
  <div class="indexWrap">
    首页
  </div>
</template>

<script>
import * as $api from '@/api';
export default {
  data() {
    return {
     
    }
  },
  methods: {
   
  },
  mounted() {
    
  },
  beforeCreate() {
    if(!localStorage.token) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
@import '../../assets/less/common.less';
.indexWrap {
  
}
</style>