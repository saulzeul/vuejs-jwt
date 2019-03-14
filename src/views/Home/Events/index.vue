<template>
  <div>
    <h2>Martes 2 de Marzo de 2019</h2>
    <div class="row">
      <div class="column" v-for="(evento, index) in eventos" :key="index">
        <el-card shadow="never">{{ evento.name }}</el-card>
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


