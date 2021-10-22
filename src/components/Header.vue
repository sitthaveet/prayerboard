<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
    </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">หน้าแรก</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ขอคำอธิษฐาน</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ถาม-ตอบ</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-success my-2 my-sm-0">สร้างกระดานใหม่</button>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
    export default {
        data: function() {
            return {
                category: ''
            }
        },
    }
</script>