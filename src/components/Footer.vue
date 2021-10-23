<template>
  <div class="footer-section">
    <div class="container" style="position: relative">
      <img
        v-if="currentRouteName == 'HomePage' ? true : false"
        class="img-man-left"
        src="../assets/images/peep-sit-1man-left.png"
        alt="not found image"
      />

      <div
        class="pray-dialog"
        v-if="currentRouteName == 'HomePage' ? true : false"
      >
        <p>
          “อยากให้อธิษฐานเผื่อ เรื่องอะไรเล่าได้เลยนะ”
          <small>พวกเราพร้อมจะรับฟังและอธิษฐานเผื่อ</small>
        </p>

        <button class="btn btn-custom-yellow2 m-3 text-white">
          <span style="font-size: 1.5em; margin-top: -0.2em; position: absolute"
            >+</span
          >
          &nbsp;&nbsp;&nbsp;เริ่มเขียนที่นี่
        </button>
      </div>

      <div
        class="q-a-dialog"
        v-if="currentRouteName == 'HomePage' ? true : false"
      >
        <p>
          ฉันก็มีเรื่องที่สงสัย???<br>
          <small>สร้างกระดานคำถามเลย</small>
        </p>
        <button class="btn btn-custom-primary mx-3 mb-3 text-white">
      <span style="font-size: 1.5em; margin-top: -0.2em; position: absolute"
        >+</span
      >
      &nbsp;&nbsp;&nbsp;สร้างคำถามใหม่
    </button>
      </div>
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
          <img
            src="../assets/logo-without-text.png"
            width="48.4"
            height="56"
            alt="logo"
          />
          <p>
            <span class="font-weight-bold text-primary ml-n4"
              >Christ Space</span
            >
            พื้นที่ปลอดภัยสำหรับคริสเตียน
          </p>
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
    },
  },
};
</script>

<style scoped>
.footer-section {
  width: 100%;
  position: relative;
  bottom: 0px;
  margin-top: 80px;
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
  background-image: linear-gradient(0deg, #eb8e39, #ffe4c0);
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

.pray-dialog {
  position: absolute;
  top: -60px;
  left: 220px;
  padding: 3em 1em;
  border-radius: 0.7em;
  background-color: #fff3f8;
  max-width: 300px;
  border: #18191f solid 2px;
  box-shadow: 0px 4px 0px black;
  z-index: 999;
}

.pray-dialog p {
  text-align: center;
  color: black;
  font-size: 1.3em;
  font-weight: 700;
}

.pray-dialog small {
  margin-top: -10px;
  margin-left: 5px;
  color: black;
  font-size: 0.6em;
  font-weight: 400;
}

.q-a-dialog {
  position: absolute;
  top: -30px;
  right: 150px;
  padding: 1em;
  border-radius: 0.7em;
  background-color: #FFBE66;
  max-width: 500px;
  width: 400px;
  border: #18191f solid 2px;
  box-shadow: 0px 4px 0px black;
  z-index: 999;
}

.q-a-dialog p {
  text-align: left;
  color: black;
  font-size: 1.3em;
  font-weight: 700;
}

.q-a-dialog small {
  margin-top: -10px;
  margin-left: 5px;
  color: black;
  font-size: 0.6em;
  font-weight: 400;
}

.btn-custom-yellow2 {
  background-color: #f9a93e;
  font-size: 1.1em;
  border-radius: 0.6em;
  color: black !important;
  transition: 0.3s;
}

.btn-custom-yellow2:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  color: black !important;
  transform: translate(-1px, -1px);
}

.btn-custom-primary {
  background-color: #397490;
  font-size: 1.1em;
  border: #18191f solid 2px;
  border-radius: 0.6em;
  color: white !important;
  transition: 0.3s;
}

.btn-custom-primary:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  transform: translate(-1px, -1px);
}
</style>