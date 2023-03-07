<script lang="ts">
export default {
  props: {
    title: String
  },
  setup(props) {
    const afterRead = (file: any) => {
      let viewportHeight = window.innerHeight;
      console.log(file,props);
    };
    return {
      afterRead,
    };
    
  },
  mounted() {
    console.log(this.viewHeight) // 0
    this.viewHeight = window.innerHeight;
    this.viewHeight = window.innerHeight - 150;


  },
  data()
  {
    return{
      viewHeight : 0
    }
  }
};

</script>

<template>
  <div class="input" >
    <van-uploader class="area" :style ="{ height : viewHeight + 'px' }" :after-read="afterRead" >
    </van-uploader>
  </div>

</template>
<style>
.area
{
  background-color: aqua;
  width: 100%;
}
.input
{
  height: 100%;
  background-color: brown;
}
</style>