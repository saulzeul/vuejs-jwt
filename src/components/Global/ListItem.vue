<template>
  <div class="listItem container-grid">
    <div class="nameProduct">{{nameProduct}}</div>
    <div class="price">${{price}}</div>
    <div class="option">
      <el-button-group>
        <el-button type="primary" size="mini">
          <icon icon="pencil-alt" />
        </el-button>
        <el-button type="warning" size="mini">
          <icon icon="clone" />
        </el-button>
        <el-button type="danger" size="mini">
          <icon icon="trash-alt" />
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>
<script>
export default {
  props: ["nameProduct", "price", "description"]
};
</script>
<style lang="scss" scoped>
.listItem {
  background-color: #f0f2f5;
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.container-grid {
  display: grid;
  grid-template-areas: "nameProduct price option";
  grid-template-rows: auto;
  grid-template-columns: 50% 15% 35%;
  padding: 10px 10px 10px 0px;
}
.nameProduct {
  grid-area: nameProduct;
  justify-self: center;
  align-self: center;
  font-size: smaller;
  font-weight: 600;
}
.price {
  grid-area: price;
  justify-self: center;
  align-self: center;
  font-size: large;
  font-weight: 600;
  width: 100%;
  height: 100%;
  background: white;
  padding: 5px 0px 0px 0px;
  border-radius: 4px;
  text-align: center;
}
.option {
  grid-area: option;
  justify-self: right;
  align-self: center;
}
.icon-menu {
  width: 20px;
  height: 20px;
  background: #409eff;
  color: white;
  padding: 5px;
  border-radius: 20px;
}
</style>

