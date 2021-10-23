<template>
  <nav class="navbar navbar-expand-lg header fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo.png" width="153" height="60" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
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