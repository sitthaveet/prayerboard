<template>
    <section>
        <div class="question">
            <h3>"{{title}}"</h3>
            <p>{{desc}}</p>
            <div class="topic">
                <div class="row">
                    <div
                        class="topic"
                        v-for="item in topics"
                        :key="item.id"
                    >
                        #{{item.name}}
                    </div>
                </div>
            </div>
            <div class="question-by row">
                <span>{{comment}}</span>
                <span>{{by}}</span>
            </div>
        </div>
    </section>
</template>

<script>
  import {TOPICS} from "../mockup-data/topic";
  export default {
    name: "QuestionCard",
    props: ['title', 'desc', 'by', 'comment', 'topics'],
  }
</script>

<style lang="scss" scoped>
    .question {
        height: 300px;
        width: 540px;
        border: 2px solid black;
        border-bottom-width: 5px;
        border-radius: 10px;
        padding: 20px;
        position: relative;
    }
    .topic {
        position: absolute;
        bottom: 60px;
        left: 10px;
        padding: 10px;
        background: lightgrey;
        border-radius: 40px;
        margin-left: 20px;
    }
    .question-by {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
</style>