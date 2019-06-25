<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
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
        <el-row :gutter="10" type="flex" justify="space-between">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
            <Product/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Product from "@/components/Global/Product";
export default {
  components: { Product },
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
  width: 33.3444444%;
}
</style>


