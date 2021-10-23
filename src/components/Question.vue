<template>
    <section class="question">
        <h4>ถาม-ตอบ</h4>
        <div class="row" style="margin-top: 40px">
            <div
                class="topic"
                v-for="item in topics"
                :key="item.id"
                :style="`background: ${item.color}`"
                @click="onTopicSelected(item.id)"
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
                comments="2"
                :by="item.by"
                :avatar="item.avatar"
            />
        </div>
    </section>
</template>

<script>
  import {QUESTIONS} from "../mockup-data/question";
  import {TOPICS} from "../mockup-data/topic";
  import QuestionCard from '../components/QuestionCard'

  export default {
    name: "Question",
    data() {
      return {
        questions: [],
        questionsAll: [],
        topics: [],
        idSelected: null
      }
    },
    mounted() {
      this.questions = QUESTIONS;
      this.questionsAll = QUESTIONS;
      this.topics = TOPICS;
    },
    methods: {
      onTopicSelected(id) {
        this.idSelected = id;
        this.questions = [...this.questionsAll.filter(question => question.topic === id)];
      }
    },
    components: {
      QuestionCard: QuestionCard
    }
  }
</script>

<style lang="scss" scoped>
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
</style>