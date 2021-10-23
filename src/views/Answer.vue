<template>
    <section class="answer-container">
        <header-custom/>
        <div class="question background-primary">
            <h3>{{currentQuestion.title}}</h3>
            <p style="margin-bottom: 200px; margin-top: 40px">{{currentQuestion.desc}}</p>
            <div class="topics">
                <div class="row">
                    <div
                        class="topic"
                        v-for="item in currentQuestion.topics"
                        :style="`background: ${item.color}`"
                        :key="item.id"
                    >
                        <small>#{{item.name}}</small>
                    </div>
                </div>
            </div>
            <div class="question-by row">
                <div class="row">
                    <img
                        style="width: 50px; height: 50px; margin-left: 10px; margin-right: 10px"
                        :src="currentQuestion.avatar"
                    />
                    <div>
                        <p style="margin-bottom: 0px">{{currentQuestion.by}}</p>
                        <small>30 March, 21 ,18:30</small>
                    </div>
                </div>
                <div style="margin-left: 40px; margin-top: 20px">
                    <img
                        style="width: 25px; height: 25px; margin-right: 10px"
                        :src="require('../assets/icons/message.png')"
                    />
                    <span>{{currentQuestion.comments.length}}</span>
                </div>
            </div>
            <img
                class="question-image"
                :src="require('../assets/icons/question.png')"
            />
        </div>
        <div
            class="border-post comment"
            v-for="item in currentQuestion.comments"
            :key="item.by"
            :style="`background: ${item.theme}`"
        >
            <h5>{{ item.by }}</h5>
            <small>{{ item.comment }}</small>

            <div class="row" style="margin-left: 0px; margin-top: 20px">
                <img
                    style="width: 15px; height: 15px; cursor: pointer"
                    :src="require('../assets/icons/down.png')"
                    @click="() => item.like_count--"
                />
                <small style="margin: 0 10px">{{ item.like_count }}</small>
                <img
                    style="width: 15px; height: 15px; cursor: pointer"
                    :src="require('../assets/icons/up.png')"
                    @click="() => item.like_count++"
                />
            </div>
            <small>30 March, 21 ,18:30</small>
        </div>

        <div class="note-editor" :style="`background: ${theme}`">
            <textarea class="border-input" rows="4" v-model="text" placeholder="พิมพ์คำตอบของคุณได้ที่นี่"></textarea>
            <input class="title-input border-input" type="text" v-model="name" placeholder="ใส่ชื่อของคุณ" style="width: 200px">

            <div class="note-editor-bottom">
                <!-- Color Picker -->
                <div class="color-picker">
                    <input v-model="theme" @click="changeColor" type="radio" value="#FFF3F8" id="0">
                    <label for="0" style="background: #FFF3F8"></label>
                    <input v-model="theme" @click="changeColor" type="radio" value="#D9FCD6" id="1">
                    <label for="1" style="background: #D9FCD6"></label>
                    <input v-model="theme" @click="changeColor" type="radio" value="#D6FCF7" id="2">
                    <label for="2" style="background: #D6FCF7"></label>
                    <input v-model="theme" @click="changeColor" type="radio" value="#FFF5D2" id="3">
                    <label for="3" style="background: #FFF5D2"></label>
                    <input v-model="theme" @click="changeColor" type="radio" value="#EFDDF7" id="4">
                    <label for="4" style="background: #EFDDF7"></label>
                    <input v-model="theme" @click="changeColor" type="radio" value="#DAE9FF" id="5">
                    <label for="5" style="background: #DAE9FF"></label>
                </div>

                <!--<button class="add-btn" @click.prevent="createNew"><i class="fas fa-plus"></i></button>-->
                <div class="btn-submit">
                    <button-custom
                        name="ส่งคำตอบของคุณ"
                        :onClick="createNew"
                    />
                </div>

            </div>
        </div>
        <footer-custom />
    </section>
    
</template>

<script>
  import {QUESTIONS} from "../mockup-data/question";
  import Button from '../components/Button';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  export default {
    name: "Answer",
    data() {
      return {
        currentQuestion: null,
        theme: '#FFF3F8',
        text: '',
        name: ''
      }
    },
    mounted() {
      const id = this.$route.query.id;
      this.currentQuestion = QUESTIONS.find(pray => pray.id === +id);
    },
    methods: {
      changeColor() {
        this.theme = event.target.value
      },
      createNew() {
        this.currentQuestion.comments.push({
          comment: this.text,
          like_count: 0,
          by: this.name,
          theme: this.theme
        },)
      }
    },
    components: {
      ButtonCustom: Button,
      HeaderCustom: Header,
      FooterCustom: Footer,
    }
  }
</script>

<style scoped>
    .answer-container {
        padding: 40px 80px
    }
    .question {
        border: 2px solid black;
        border-bottom-width: 5px;
        border-radius: 10px;
        padding: 20px;
        position: relative;
    }
    .topics {
        position: absolute;
        bottom: 80px;
        left: 20px;
    }
    .topic {
        padding: 5px 10px 5px 10px;
        background: lightgrey;
        border-radius: 40px;
        margin-left: 10px;
    }
    .question-by {
        position: absolute;
        bottom: 10px;
        left: 40px;
    }
    .question-image {
        width: 100px;
        position:  absolute;
        bottom: 20px;
        right: 20px;
    }
    .comment {
        padding: 20px;
        position: relative;
        margin-top: 20px;
    }
    ::placeholder {
        color: #737373;
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
    .note-editor {
        max-width: 100%;
    }
</style>