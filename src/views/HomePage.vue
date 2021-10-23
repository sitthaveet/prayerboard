<template>
  <div>
    <header-custom />

    <section id="section-1-background-container" class="section-wrapper section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>อยากให้อธิษฐานเผื่อหน่อย</h2>
          <a class ="justify-content-end ds-a-blue" href="#">ดูทั้งหมด ></a>
        </div>
      </div>
      
      <div class="row p-1 my-2">
        <carousel :perPageCustom="[[768, 3], [1024, 4]]">
          <slide v-for="item in prays" :key="item.title">
            <pray-for-card
                class="col-lg-4"
                :title="item.title"
                :desc="item.desc"
                :by="item.by"
            />
          </slide>
        </carousel>
      </div>
    </div>
    </section>
    <footer-custom />
  </div>

</template>

<script>
import Header from "../components/Header.vue";
import { Carousel, Slide } from "vue-carousel";
// import Question from '../components/Question'
import PrayForCard from "../components/PrayForCard";
import { PRAYS } from "../mockup-data/prayfor";
import Footer from "../components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    HeaderCustom: Header,
    Carousel,
    Slide,
    PrayForCard: PrayForCard,
    // Question: Question,
    FooterCustom: Footer,
  },
  data() {
    return {
      prays: [],
    };
  },
  mounted() {
    this.prays = PRAYS;
  },
};
</script>



<style lang='scss' scoped>

#section-1-background-container {
  position: relative;
  background-image: url("../assets/images/background-homepage.svg");
  height: 70vh;
  width: 100vw;
}
</style>