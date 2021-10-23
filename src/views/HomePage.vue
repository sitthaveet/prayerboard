<template>

  <div>
    <header-custom/>

    <div class="container">
    <div class="row p-1 my-5">
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
  </div>



</template>

<script>
  import Header from '../components/Header.vue';
  import { Carousel, Slide } from 'vue-carousel';
  // import Question from '../components/Question'
  import PrayForCard from '../components/PrayForCard'
  import {PRAYS} from "../mockup-data/prayfor";

  export default {
    name: "HomePage",
    components: {
      HeaderCustom: Header,
      Carousel,
      Slide,
      PrayForCard: PrayForCard,
      // Question: Question,
    },
    data() {
      return {
        prays: []
      }
    },
    mounted() {
      this.prays = PRAYS;
    },
  }
</script>



<style lang='scss' scoped>


</style>