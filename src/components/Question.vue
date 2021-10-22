<template>
    <section class="question">
        <div class="row">
            <div
                class="topic"
                v-for="item in topics"
                :key="item.id"
                @click="onTopicSelected(item.id)"
            >
                #{{item.name}}
            </div>
        </div>
        <div
            v-for="item in questions"
            :key="item.title"
            style="margin-bottom: 40px; margin-top: 40px"
        >
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
        </div>
    </section>
</template>

<script>
  import {QUESTIONS} from "../mockup-data/question";
  import {TOPICS} from "../mockup-data/topic";

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
    }
  }
</script>

<style lang="scss" scoped>
    .question {
        padding: 40px
    }
    .topic {
        padding: 10px;
        background: lightgrey;
        border-radius: 40px;
        margin-left: 20px;
        cursor: pointer;
    }
</style>