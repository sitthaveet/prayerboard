<template>
    <b-popover target="popover-create" title="" placement="bottom" class="p-4">
      <button class="btn btn-custom-yellow2 m-3 text-white">
              <span>+</span> &nbsp;&nbsp;&nbsp;ต้องการคำอธิษฐานเผื่อ
       </button>
       <button class="btn btn-custom-primary mx-3 mb-3 text-white">
              <span>+</span> &nbsp;&nbsp;&nbsp;สร้างคำถามใหม่
       </button>
    </b-popover>
</template>

<script>

</script>

<style lang="scss" scope>
.btn-custom-yellow2 {
    width: 215px;
    background-color: #f9a93e;
    border: #18191f solid 2px;
    border-radius: 0.6em;
    color:black !important;
    transition: .3s;
  }
  
  .btn-custom-yellow2:hover {
    box-shadow: 2px 2px 2px rgba(0,0,0,.5);
    color: black !important;
    transform: translate(-1px,-1px);
  }

  .btn-custom-primary {
    width: 215px;
    background-color: #397490;
    border: #18191f solid 2px;
    border-radius: 0.6em;
    color:white !important;
    transition: .3s;
  }

  .btn-custom-primary:hover {
    box-shadow: 2px 2px 2px rgba(0,0,0,.5);
    transform: translate(-1px,-1px);
  }
</style>