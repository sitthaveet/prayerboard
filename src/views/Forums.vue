<template>

    <div>
        <header-custom/>

            <div class="forums" style="margin-top: 40px">
                <b-tabs content-class="mt-3">
                    <b-tab title="ถามตอบ">
                        <question/>
                    </b-tab>
                    <b-tab title="ขอคำอธิษฐาน" active>
                        <div class="row p-5">
                            <pray-for-card
                                class="col-4"
                                v-for="item in prays"
                                :key="item.title"
                                :title="item.title"
                                :desc="item.desc"
                                :by="item.by"
                            />
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
    </div>
</template>

<script>
    import Question from '../components/Question'
    import PrayForCard from '../components/PrayForCard'
    import {PRAYS} from "../mockup-data/prayfor";
    import Header from '../components/Header.vue';

   



  export default {
    name: "Forums",
    components: {
        Question: Question,
        PrayForCard: PrayForCard,
        HeaderCustom: Header,
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

<style lang="scss">
    .forums {
        .nav-tabs {
            border: none;
            .active {
                border: none;
                border-bottom: 2px solid black !important;
            }
        }
        a {
            color: black
        }
    }
    .pray-for {
        padding: 20px;
    }
</style>