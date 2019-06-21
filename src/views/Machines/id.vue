<template>
  <div>
    <h1>this is a machine {{ this.$route.params.maquina }}</h1>
    <router-link
      :to="{name: 'tm', params: { maquina: `${this.$route.params.maquina}`}}"
    >{{ this.$route.params.maquina }}</router-link>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
export default {
  methods: {

  },
  created() {}
};
</script>