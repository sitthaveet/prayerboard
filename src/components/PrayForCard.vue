<template>
  <section style="margin-bottom: 20px" ref="carousel">
    <div class="pray-for" id="pray-for-card" :style="`background: ${theme}`">
      <img style="width: 60px; margin-bottom: 20px" :src="avatar" />
      <h3>"{{ title }}"</h3>
      <p>{{ desc }}</p>
      <div class="pray-by">
        <h5>{{ by }}</h5>
        <p>30 March, 21 ,18:30</p>
      </div>
      <div class="btn-submit">
        <button-custom name="อธิษฐานเผื่อ" :onClick="onClick" />
      </div>
    </div>
  </section>
</template>

<script>
    import Button from '../components/Button'
  export default {
    name: "PrayForCard",
    props: ['id', 'title', 'desc', 'by', 'avatar', 'theme'],
    components: {
      ButtonCustom: Button
    },
    methods: {
      onClick() {
        this.$router.push({path: 'note', query: { id: this.id }})
      },
      
    },
    
  }
</script>

<style lang="scss" scoped>
.pray-for {
  height: 400px;
  width: 330px;
  border: 2px solid black;
  border-bottom-width: 5px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
}
.pray-by {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.btn-submit {
  position: absolute;
  bottom: 20px;
  right: 10px;
}
</style>