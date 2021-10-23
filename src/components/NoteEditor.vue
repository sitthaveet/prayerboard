<template>
    <div class="note-grid">

        <div class="note-editor" :style="`background: ${theme}`">
            <!--<input class="title-input" type="text" v-model="title" placeholder="Title">-->
            <textarea class="border-input" rows="4" v-model="text" placeholder="พิมพ์ข้อความของคุณได้ที่นี่"></textarea>
            <input class="title-input border-input" type="text" v-model="name" placeholder="ใส่ชื่อของคุณ">

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
                    name="ส่งข้อความหนุนใจ"
                    :onClick="createNew"
                />
            </div>

            </div>
        </div>



    </div>
</template>

<script>
  import Button from '../components/Button'
export default {
    data: function() {
        return {
            title: '',
            chosenColor: '',
            theme: '#FFF3F8',
            editing: '',
            text: '',
            name: ''
        }
    },
    props: ['notes'],
    components: {
        ButtonCustom: Button
    },
    methods: {
        handleSelected() {
            this.editingNote = event.target;
        },
        createNew() {
            this.$emit('noteAdded', this.title, this.text, this.theme, this.editing, this.name);
            this.title = '';
            this.text = '';
            // this.theme = '';
            this.name = '';
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
</style>