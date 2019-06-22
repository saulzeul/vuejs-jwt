<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button class="BTN" type="primary">EDITAR PEDIDO</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button class="BTN" type="success">COBRAR</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button-group class="BTN">
          <el-button class="BTN-GROUP" type="danger">ALIMENTOS</el-button>
          <el-button class="BTN-GROUP" type="warning">BEBIDAS</el-button>
          <el-button class="BTN-GROUP" type="primary">OTROS</el-button>
        </el-button-group>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Orders"
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.BTN {
  width: 100%;
}
.BTN-GROUP {
    width: 33.3444444%
}
</style>


