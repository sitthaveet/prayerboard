<template>
  <div class="footer-section">
    <div class="container" style="position: relative">
      <img v-if="currentRouteName == 'HomePage' ? true : false"
        class="img-man-left"
        src="../assets/images/peep-sit-1man-left.png"
        alt="not found image"
      />
    </div>

    <div class="footer-top-extension">
      <div class="container">
        <img
          class="img-woman-right"
          src="../assets/images/peep-05.png"
          alt="not found image"
        />
        <img
          class="img-man-right"
          src="../assets/images/peep-07.png"
          alt="not found image"
        />
      </div>
    </div>
    <div class="footer-content">
      <div class="container">
        <div class="row float-right">
          <img src="../assets/logo-without-text.png" width="48.4" height="56" alt="logo" />
          <p><span class="font-weight-bold text-primary">Christ Space</span> พื้นที่ปลอดภัยสำหรับคริสเตียน</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      category: "",
    };
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
}
};
</script>

<style scoped>
.footer-section {
    width: 100%;
    position: relative;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: 0px;
}

.footer-content {
    padding: 1em 0px;
    justify-content: right;
}

.footer-content p {
    margin: 1em 0em 1em 2em;
}

.footer-top-extension {
    position: relative;
    height: 350px;
    background-image: linear-gradient(0deg, #EB8E39, #FFE4C0);
}

.img-man-left {
    position: absolute;
    left: 0px;
    width: 280px;
    margin-top: 70px;
    padding: 0px 10px;
    z-index: 100;
}

.img-man-right {
    position: absolute;
    left: auto;
    right: 250px;
    width: 200px;
    bottom: 0px;
}

.img-woman-right {
    position: absolute;
    left: auto;
    right: 150px;
    width: 200px;
    bottom: 0px;
}
</style>