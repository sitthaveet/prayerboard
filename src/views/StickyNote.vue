<template>
    <div id="app">
        <header-custom/>
        <div class="row" style="padding: 50px">
            <div class="note col-6" :style="{'background-color': currentNote.theme}">
                <h3>"{{currentNote.title}}"</h3>
                <small>{{currentNote.desc}}</small>
                <div class="by row">
                    <img
                        style="width: 60px; margin: 0 10px 20px;"
                        :src="currentNote.avatar"
                    />
                    <div>
                        <h5>{{currentNote.by}}</h5>
                        <p>30 March, 21 ,18:30</p>
                    </div>
                </div>
            </div>
            <app-note-editor class="col-6" @noteAdded="newNote" :notes="notes" @noteDeleted="deleteNote"></app-note-editor>
        </div>

        <div class="noteContainer">
            <div @click="note.editing = !note.editing" v-for="(note, index) in filteredNotes" :key="`note-${index}`" class="note" :style="{'background-color': note.theme}">
                <div>
                    <span v-if="note.editing" @click.prevent="deleteNote(index)" class="delete"><i class="fas fa-times"></i></span>
                    <!--<span contenteditable="true" >{{ note.title}}</span>-->
                    <p contenteditable="true" class="note-text">{{ note.text }}</p>
                    <small>{{ note.name }}</small>
                    <br>
                    <small>30 March, 21 ,18:30</small>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  import NoteEditor from '../components/NoteEditor.vue';
  import {PRAYS} from "../mockup-data/prayfor";
  import Header from '../components/Header.vue';

  export default {
    name: 'StickyNote',
    data: function() {
      return {
        notes: [
          // {
          //   title: 'Code',
          //   text: '1131111222',
          //   theme: '#FF8A80',
          //   editing: false,
          // },
          // {
          //   title: 'event',
          //   text: 'event',
          //   theme: '#DDA0DD',
          //   editing: false,
          // },
          // {
          //   title: 'game code',
          //   text: '5555555',
          //   theme: '#FF8A80',
          //   editing: false,
          // },
          // {
          //   title: 'DONT FORGET!!',
          //   text: 'Lord of the flies',
          //   theme: '#FFFF8D',
          //   editing: false,
          // },
          // {
          //   title: 'todo',
          //   text: 'a todo',
          //   theme: '#80D8FF',
          //   editing: false,
          // },
          // {
          //   title: 'breaking bad final song',
          //   text: 'https://www.youtube.com/watch?v=fZGsPVOhIPg',
          //   theme: '#CCFF90',
          //   editing: false,
          // },
          // {
          //   title: 'Avatar: The Last Airbender',
          //   text: 'While helping Avatar Roku manage a volcano eruption, Fire Lord Sozin was able to cool the lava by absorbing the heat into his body and redirecting it into the air, similar to the way Firebenders are able to redirect lightning from their fingertips.',
          //   theme: '#CCFF90',
          //   editing: false,
          // },
        ],
        selectedTheme: 'all',
        currentNote: null
      }
    },
    computed: {
      filteredNotes: function() {
        var vm = this;
        var theme = vm.selectedTheme;

        if(theme === "all") {
          return vm.notes;
        } else {
          return vm.notes.filter(function(note) {
            return note.theme === theme;
          });
        }
      }
    },
    methods: {
      changeCategory(newCategory) {
        this.selectedTheme = newCategory;
      },
      newNote(title, text, theme, editing, name) {
        this.notes.push({title: title, text: text, theme: theme, editing: editing, name: name});
      },
      deleteNote(index) {
        this.notes.splice(index, 1)
      },
    },
    mounted() {
      const id = this.$route.query.id;
      this.currentNote = PRAYS.find(pray => pray.id === +id);
      // if (localStorage.getItem('notes')) this.notes = JSON.parse(localStorage.getItem('notes'));
    },
    watch: {
      notes: {
        handler() {
          var newNotes = this.notes;
          localStorage.setItem('notes', JSON.stringify(newNotes));
        },
        deep: true,
      },
    },
    components: {
      appNoteEditor: NoteEditor,
      HeaderCustom: Header
    }
  }
</script>

<style lang="scss">
    @import '../styles/global.scss';
    .by {
        position: absolute;
        bottom: 0px;
        left: 20px;
    }
</style>
