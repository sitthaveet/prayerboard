<template>
  <section>
    <div class="section-pray">
      <header-custom />
      <h4 class="p-4">อยากให้อธิษฐานเผื่อหน่อย</h4>
      <div class="row">
        <pray-for-card
          class="col-4"
          v-for="item in prays"
          :id="item.id"
          :key="item.title"
          :title="item.title"
          :desc="item.desc"
          :by="item.by"
          :avatar="item.avatar"
          :theme="item.theme"
        />
      </div>
      <img
        class="create-pray-for"
        :src="require('../assets/hack/create_pray_for.png')"
        @click="show = true"
      />
      <b-modal v-model="show" hide-footer hide-header>
        <div
          class="note-editor"
          :style="`background: ${theme}`"
          style="margin: 0"
        >
          <div style="width: 80%">
            <h4>ช่วงนี้เผชิญเรื่องอะไรอยู่ เล่าได้นะ พวกเราช่วยอธิษฐานเผื่อ</h4>
          </div>
          <img
            style="position: absolute; top: 10px; right: 10px; cursor: pointer"
            :src="require('../assets/icons/close.png')"
            @click="show = false"
          />
          <hr />
          <input
            class="title-input border-input"
            type="text"
            v-model="title"
            placeholder="หัวข้อคำอธิษฐาน"
          />
          <textarea
            class="border-input"
            rows="4"
            v-model="text"
            placeholder="พิมพ์ข้อความของคุณได้ที่นี่"
          ></textarea>
          <input
            class="title-input border-input"
            type="text"
            v-model="name"
            placeholder="ใส่ชื่อของคุณ"
            style="width: 200px"
          />

          <div class="note-editor-bottom">
            <!-- Color Picker -->
            <div class="color-picker">
              <input
                v-model="theme"
                @click="changeColor"
                type="radio"
                value="#FFF3F8"
                id="0"
              />
              <label for="0" style="background: #fff3f8"></label>
              <input
                v-model="theme"
                @click="changeColor"
                type="radio"
                value="#D9FCD6"
                id="1"
              />
              <label for="1" style="background: #d9fcd6"></label>
              <input
                v-model="theme"
                @click="changeColor"
                type="radio"
                value="#D6FCF7"
                id="2"
              />
              <label for="2" style="background: #d6fcf7"></label>
              <input
                v-model="theme"
                @click="changeColor"
                type="radio"
                value="#FFF5D2"
                id="3"
              />
              <label for="3" style="background: #fff5d2"></label>
              <input
                v-model="theme"
                @click="changeColor"
                type="radio"
                value="#EFDDF7"
                id="4"
              />
              <label for="4" style="background: #efddf7"></label>
              <input
                v-model="theme"
                @click="changeColor"
                type="radio"
                value="#DAE9FF"
                id="5"
              />
              <label for="5" style="background: #dae9ff"></label>
            </div>

            <!--<button class="add-btn" @click.prevent="createNew"><i class="fas fa-plus"></i></button>-->
            <div class="btn-submit">
              <button-custom name="โพสต์" :onClick="createNew" />
            </div>
          </div>
        </div>
      </b-modal>
    </div>
    <footer-custom />
  </section>
</template>

<script>
  import PrayForCard from '../components/PrayForCard'
  import {PRAYS} from "../mockup-data/prayfor";
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import Button from '../components/Button'
  export default {
    name: "PrayFor",
    components: {
      PrayForCard: PrayForCard,
      HeaderCustom: Header,
      FooterCustom: Footer,
      ButtonCustom: Button
    },
    data() {
      return {
        prays: [],
        show: false,
        theme: '#FFF3F8',
        title: '',
        editing: '',
        text: '',
        name: ''
      }
    },
    methods: {
      changeColor() {
        this.theme = event.target.value;
      },
      createNew() {
        this.prays.push({
          id: Math.floor(Math.random() * 100),
          title: this.title,
          desc: this.text,
          by: this.name,
          theme: this.theme,
          avatar: require("../assets/avatar/avatar-1.png"),
          comments: [],
        });
        this.title = "";
        this.text = "";
        this.name = "";
        this.theme = '#FFF3F8';
        this.show = false;
      }
    },
  mounted() {
    this.prays = PRAYS;
  },
};
</script>

<style lang="scss" scoped>
.section-pray {
  padding: 100px;
  padding-top: 0;
}
.create-pray-for {
  z-index: 100;
  width: 300px;
  position: fixed;
  left: 20px;
  bottom: 30px;
  cursor: pointer;
}
.border-input {
  border-radius: 10px;
  border: 1px solid grey;
  padding-left: 20px !important;
  margin-bottom: 15px;
}
.btn-submit {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>