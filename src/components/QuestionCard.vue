<template>
    <section>
        <div class="question">
            <h3>"{{title}}"</h3>
            <p class="desc">{{desc}}</p>
            <div class="topics">
                <div class="row">
                    <div
                        class="topic"
                        v-for="item in topics"
                        :key="item.id"
                    >
                        <small>#{{item.name}}</small>
                    </div>
                </div>
            </div>
            <div class="question-by row">
                <span>{{comments}}</span>
                <span>{{by}}</span>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: "QuestionCard",
    props: ['title', 'desc', 'by', 'comments', 'topics'],
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
    }
    .topics {
        position: absolute;
        bottom: 80px;
        left: 20px;
    }
    .topic {
        padding: 5px;
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
</style>