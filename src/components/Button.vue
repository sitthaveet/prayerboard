<template>
    <div
        class="button-custom"
        @click="onClick"
    >
        {{name}}
    </div>
</template>

<script>
  export default {
    name: "Button",
    props: ['name', 'onClick']
  }
</script>

<style lang="scss" scoped>
    .button-custom {
        padding: 8px;
        border: 2px solid black;
        border-bottom-width: 3px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>