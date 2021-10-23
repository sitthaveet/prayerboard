<template>
  <section>
    <div class="question">
      <header-custom />
      <h4>ถาม-ตอบ</h4>
      <div class="row" style="margin-top: 40px">
        <div
          class="topic"
          v-for="item in topics"
          :key="item.id"
          :style="`background: ${item.color}`"
          @click="onTopicSelected(item.id)"
        >
          <small>#{{ item.name }}</small>
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
      <img
        class="create-question"
        :src="require('../assets/hack/create_question.png')"
        @click="show = true"
      />
      <b-modal v-model="show" hide-footer hide-header>
        <div
          class="note-editor"
          style="margin: 0; background: #f9a93e; width: 700px"
        >
          <div style="width: 80%">
            <h4>สร้างประเด็นคำถามใหม่</h4>
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
            placeholder="หัวข้อคำถาม"
          />
          <textarea
            class="border-input"
            rows="4"
            v-model="text"
            placeholder="พิมพ์คำถามของคุณได้ที่นี่"
          ></textarea>
          <input
            class="title-input border-input"
            type="text"
            v-model="name"
            placeholder="ใส่ชื่อของคุณ"
            style="width: 200px"
          />

          <div class="btn-submit" style="align-self: center; margin: 40px 0">
            <div style="width: 160px">
              <button-custom
                style="background: #397490; color: white"
                name="+ สร้างคำถามใหม่"
                :onClick="createNew"
              />
            </div>
          </div>
          <img
            class="question-image"
            :src="require('../assets/icons/question.png')"
          />
        </div>
      </b-modal>
    </div>
    <footer-custom />
  </section>
</template>

<script>
import { QUESTIONS } from "../mockup-data/question";
import { TOPICS } from "../mockup-data/topic";
import QuestionCard from "../components/QuestionCard";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Button from "../components/Button";

export default {
  name: "Question",
  data() {
    return {
      questions: [],
      questionsAll: [],
      topics: [],
      idSelected: null,
      show: false,
      title: "",
      text: "",
      name: "",
    };
  },
  mounted() {
    this.questions = QUESTIONS;
    this.questionsAll = QUESTIONS;
    this.topics = TOPICS;
  },
  methods: {
    onTopicSelected(id) {
      if (id === this.idSelected) {
        this.questions = [...this.questionsAll];
        return;
      }
      this.idSelected = id;
      this.questions = [
        ...this.questionsAll.filter((question) =>
          question.topics.find((topic) => topic.id === id)
        ),
      ];
    },
    createNew() {
      this.questions.push({
        id: Math.floor(Math.random() * 100),
        title: this.title,
        desc: this.text,
        by: this.name,
        avatar: require("../assets/avatar/avatar-1.png"),
        like_count: 0,
        comments: [],
        topics: [
          {
            id: 1,
            name: "เหนื่อยกับการมีชีวิต",
            color: "#CEECC9",
          },
        ],
      });
      this.title = "";
      this.text = "";
      this.name = "";
      this.show = false;
    },
  },
  components: {
    QuestionCard: QuestionCard,
    HeaderCustom: Header,
    ButtonCustom: Button,
    FooterCustom: Footer,
  },
};
</script>

<style lang="scss" scoped>
.question {
  padding: 100px;
  padding-top: 0;
}
.topic {
  padding: 10px 20px 10px 20px;
  background: lightgrey;
  border-radius: 40px;
  margin-left: 10px;
  cursor: pointer;
}
.create-question {
  width: 300px;
  position: fixed;
  right: 20px;
  bottom: 30px;
  cursor: pointer;
  z-index: 999 !important;
}

.border-input {
  border-radius: 10px;
  border: 1px solid grey;
  padding-left: 20px !important;
  margin-bottom: 15px;
}
.question-image {
  width: 1200px;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>