<template>
    <div class="forums" style="margin-top: 40px">
        <b-tabs content-class="mt-3">
            <b-tab title="ถามตอบ" active>
                <question/>
            </b-tab>
            <b-tab title="ขอคำอธิษฐาน"><p>I'm the second tab</p></b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import Question from '../components/Question'
  export default {
    name: "Forums",
    components: {
      Question: Question
    }
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
</style>