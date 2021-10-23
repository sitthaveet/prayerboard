<template>
  <nav class="navbar navbar-expand-lg navbar-dark header fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="60" height="69" alt="" />
        <!-- <div class="mock-icon"></div> -->
        <p class="web-title">hristSpace</p>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="#navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">หน้าแรก</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="onClickForums">ขอคำอธิษฐาน</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="onClickForums">ถาม-ตอบ</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-custom-yellow my-2 my-sm-0 text-white">
              สร้างกระดานใหม่
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      category: "",
    };
  },
  methods: {
     onClickForums() {
        this.$router.push({path: 'forums', query: { id: this.id }})
      },
  },
};
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #464c55;
    color: #fff;
    margin-bottom: 50px;
  }
  
  .navbar-brand {
    padding: 0.6em 0px 0.4em 0px;
  }
  
  .navbar-dark {
      color:white !important;
  }
  
  .navbar-toggler {
      /* // color: white;
      // background-color: white;
      // z-index:999; */
  }
  
  a.navbar-brand .web-title {
    position: absolute;
    margin-left: 2em;
    margin-top: -2.2em;
    font-size: 1.2em;
    /* font-family: 'Promt'; */
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
    text-shadow: 1px 2px 0px black;
  }
  
  #navbarSupportedContent {
    position: relative;
    justify-content: right;
  }
  
  .nav-item {
      margin: 0px 1em;
      padding: 0px 0px !important;
  }
  
  .nav-item .nav-link {
      color: white;
      background-image: linear-gradient(to right, white, white);
      background-position: bottom left;
      background-repeat: no-repeat;
      background-size: 0% 4px;
      transition: background-size .5s ease;
      /* transition: .3s; */
  }
  
  .nav-item.active .nav-link {
      background-size: 100% 4px;
  }
  
  .nav-item:hover .nav-link {
      background-size: 100% 4px;
  }
  
  .btn-custom-yellow {
    background-color: #f9a93e;
    border: #18191f solid 2px;
    border-radius: 0.6em;
    transition: .3s;
  }
  
  .btn-custom-yellow:hover {
    box-shadow: 2px 2px 2px rgba(0,0,0,.5);
    color: black !important;
      transform: translate(-1px,-1px);
  }
</style>