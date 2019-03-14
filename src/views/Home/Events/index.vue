<template>
  <div>
    <h2>{{ new Date | moment("LL") }}</h2>
    <div class="row">
      <div class="column" v-for="(evento, index) in eventos" :key="index">
        <el-card shadow="never">{{ evento.name }}
          <router-link to="/home/events/1454">Una maquina</router-link>
        </el-card>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      eventos: [
        { id: 1, name: "Actualizar maquinas" },
        { id: 2, name: "Actualizar erp" },
        { id: 3, name: "Actualizar bpm" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.column {
  flex: 25%;
  max-width: 25%;
}
</style>


