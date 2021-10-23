<template>
  <div>
    <header-custom />
    <popover-custom />

    <section id="section-1-background-container" class="section-wrapper section">
    <div class="container">
      <div class="row d-flex">
          <div class="col-6 justify-content-start">
            <h2>อยากให้อธิษฐานเผื่อหน่อย</h2>
          </div>
          <div class="col-6 d-flex justify-content-end align-items-center">
            <a class ="ds-a-blue cursor-pointer" @click="onClickPrayFor">ดูทั้งหมด ></a>
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
                :id="item.id"
            />
          </slide>
        </carousel>
      </div>
    </div>
    </section>

    <section class="section-wrapper section my-4 px-2">
      <div class="container">
        <div class="row d-flex">
            <div class="col-6 justify-content-start">
              <h2>ถาม-ตอบ</h2>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center">
              <a class ="ds-a-blue cursor-pointer" @click="onClickQuestion">ดูทั้งหมด ></a>
            </div>
        </div>
      

       <div class="row" style="margin-top: 40px">
            <div
                class="topic"
                v-for="item in topics"
                :key="item.id"
                :style="`background: ${item.color}`"
            >
                <small>#{{item.name}}</small>
            </div>
        </div>
        <div class="row" style="margin-top: 40px">
            <question-card
                class="col-6"
                style="margin-bottom: 20px"
                v-for="item in questions"
                :key="item.title"
                :title="item.title"
                :desc="item.desc"
                :topics="item.topics"
                :comments="item.comments.length"
                :by="item.by"
                :avatar="item.avatar"
                :id="item.id"
            />
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-outline-secondary btn-radius my-2" @click="onClickQuestion">ดูทั้งหมด ></button>
        </div>
      </div>
    </section>
    <footer-custom />
  </div>

</template>

<script>
import Header from "../components/Header.vue";
import Popover from "../components/Modals_Popovers/PopoverCreate.vue";
import { Carousel, Slide } from "vue-carousel";
import PrayForCard from "../components/PrayForCard";
import { PRAYS } from "../mockup-data/prayfor";
import Footer from "../components/Footer.vue";
import {QUESTIONS} from "../mockup-data/question";
import {TOPICS} from "../mockup-data/topic";
import QuestionCard from '../components/QuestionCard'

export default {
  name: "HomePage",
  components: {
    HeaderCustom: Header,
    PopoverCustom: Popover,
    Carousel,
    Slide,
    PrayForCard: PrayForCard,
    QuestionCard: QuestionCard,
    FooterCustom: Footer,
  },
  data() {
    return {
      prays: [],
      questions: [],
      questionsAll: [],
      topics: [],
      idSelected: null
    };
  },
  mounted() {
    this.prays = PRAYS;
    this.questions = QUESTIONS;
    this.questionsAll = QUESTIONS;
    this.topics = TOPICS;
  },
  methods: {
      onTopicSelected(id) {
        if (id === this.idSelected) {
          this.questions = [...this.questionsAll];
          return
        }
        this.idSelected = id;
        this.questions = [...this.questionsAll.filter(question => question.topics.find(topic => topic.id === id))];
      },
      onClickPrayFor() {
        this.$router.push({path: 'prayfor'})
      },
      onClickQuestion() {
        this.$router.push({path: 'question'})
      }
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

.question {
        padding: 100px
    }
.topic {
    padding: 10px 20px 10px 20px;
    background: lightgrey;
    border-radius: 40px;
    margin-left: 10px;
    cursor: pointer;
}

.btn-radius {
  border-radius: 40px;
  padding: 10px 20px 10px 20px;
}

.cursor-pointer {
    cursor: pointer;
}

</style>