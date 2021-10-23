<template>
    <section>
        <div class="question background-primary" @click="onClick">
            <h3>"{{title}}"</h3>
            <p class="desc">{{desc}}</p>
            <div class="topics">
                <div class="row">
                    <div
                        class="topic"
                        v-for="item in topics"
                        :style="`background: ${item.color}`"
                        :key="item.id"
                    >
                        <small>#{{item.name}}</small>
                    </div>
                </div>
            </div>
            <div class="question-by row">
                <img
                    style="width: 25px; margin-right: 10px"
                    :src="require('../assets/icons/message.png')"
                />
                <span>{{comments}}</span>
                <img
                    style="width: 25px; margin-left: 10px; margin-right: 10px"
                    :src="avatar"
                />
                <span>{{by}}</span>
            </div>
            <img
                class="question-image"
                :src="require('../assets/icons/question.png')"
            />
        </div>
    </section>
</template>

<script>
  export default {
    name: "QuestionCard",
    props: ['title', 'desc', 'by', 'comments', 'topics', 'avatar', 'id'],
    methods: {
      onClick() {
        this.$router.push({path: 'answer', query: { id: this.id }})
      }
    }
  }
</script>

<style lang="scss" scoped>
    .question {
        height: 300px;
        width: 480px;
        border: 2px solid black;
        border-bottom-width: 5px;
        border-radius: 10px;
        padding: 20px;
        position: relative;
        cursor: pointer;
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
    .desc {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .question-image {
        width: 100px;
        position:  absolute;
        bottom: 20px;
        right: 20px;
    }
</style>