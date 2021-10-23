<template>
    <v-app>
        <div id="app">
            <router-view></router-view>
        </div>
    </v-app>
</template>

<script>

export default {
  name: 'App',
  metaInfo() {
    return {
      title: "ChristSpace",
      meta: [
          {
            vmid: "description",
            name: "description",
            content:
              "พื้นที่ปลอดภัยสำหรับคริสเตียน"
          }
      ]
    }
}
}
</script>
