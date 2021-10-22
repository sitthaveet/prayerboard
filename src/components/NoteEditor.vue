<template>
    <div class="note-grid">

        <div class="note-editor" :style="`background: ${theme}`">
            <input class="title-input" type="text" v-model="title" placeholder="Title" :style="`background: ${theme}`">
            <textarea rows="2" v-model="text" placeholder="Take a note..." :style="`background: ${theme}`"></textarea>

            <div class="note-editor-bottom">
            <!-- Color Picker -->
            <div class="color-picker">
            <input v-model="theme" @click="changeColor" type="radio" value="#FFFFFF" id="0">
            <label for="0" style="background: #FFFFFF"></label>
            <input v-model="theme" @click="changeColor" type="radio" value="#FF8A80" id="1">
            <label for="1" style="background: #FF8A80"></label>
            <input v-model="theme" @click="changeColor" type="radio" value="#80D8FF" id="2">
            <label for="2" style="background: #80D8FF"></label>
            <input v-model="theme" @click="changeColor" type="radio" value="#FFFF8D" id="3">
            <label for="3" style="background: #FFFF8D"></label>
            <input v-model="theme" @click="changeColor" type="radio" value="#CCFF90" id="4">
            <label for="4" style="background: #CCFF90"></label>
            <input v-model="theme" @click="changeColor" type="radio" value="#DDA0DD" id="5">
            <label for="5" style="background: #DDA0DD"></label>
            </div>

            <button class="add-btn" @click.prevent="createNew"><i class="fas fa-plus"></i></button>

            </div>
        </div>



    </div>
</template>

<script>

export default {
    data: function() {
        return {
            title: '',
            chosenColor: '',
            theme: '',
            editing: '',
            text: ''
        }
    },
    props: ['notes'],
    methods: {
        handleSelected() {
            this.editingNote = event.target;
        },
        createNew() {
            this.$emit('noteAdded', this.title, this.text, this.theme, this.editing);
            this.title = '';
            this.text = '',
            this.theme = '';
            this.editing = false
        },
        deleteNote(index) {
            this.$emit('noteDeleted', index);
        },
        changeColor() {
            this.theme = event.target.value
        },
    },
}
</script>

<style lang="scss" scope>
    ::placeholder {
        color: #737373;
    }
</style>