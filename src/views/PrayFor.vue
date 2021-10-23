<template>
    <section class="section-pray">
        <h4 class="p-4">อยากให้อธิษฐานเผื่อหน่อย</h4>
        <div class="row">
            <pray-for-card
                class="col-4"
                v-for="item in prays"
                :id="item.id"
                :key="item.title"
                :title="item.title"
                :desc="item.desc"
                :by="item.by"
                :avatar="item.avatar"
                :theme="item.theme"
            />
        </div>
    </section>
</template>

<script>
  import PrayForCard from '../components/PrayForCard'
  import {PRAYS} from "../mockup-data/prayfor";
  export default {
    name: "PrayFor",
    components: {
      PrayForCard: PrayForCard,
    },
    data() {
      return {
        prays: []
      }
    },
    mounted() {
      this.prays = PRAYS;
    },
  }
</script>

<style lang="scss" scoped>
    .section-pray {
        padding: 100px;
    }
</style>