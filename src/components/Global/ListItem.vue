<template>
  <div class="listItem container-grid">
    <div class="nameProduct">
      <span>{{nameProduct}}</span>
    </div>
    <div class="group-button">
      <el-button type="primary" size="small">
        <icon icon="pencil-alt" />
      </el-button>
      <el-button type="warning" size="small">
        <icon icon="clone" />
      </el-button>
      <el-button type="danger" size="small">
        <icon icon="trash-alt" />
      </el-button>
    </div>
    <div class="price">${{ price }}</div>
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
  grid-gap: 5px;
  grid-template-areas:
    ". group-button group-button group-button"
    "nameProduct nameProduct nameProduct price";
  grid-template-rows: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px 10px 10px 0px;
}
.nameProduct {
  grid-area: nameProduct;
  justify-self: center;
  align-self: center;
  font-size: medium;
  font-weight: 600;
}
.clone {
  grid-area: clone;
  justify-self: end;
}
.edit {
  grid-area: edit;
  justify-self: end;
}
.group-button {
  grid-area: group-button;
  justify-self: end;
}
.price {
  grid-area: price;
  justify-self: center;
  align-self: center;
  font-size: medium;
  font-weight: 600;
  width: 100%;
  background: #b5b5b5;
  padding: 5px 0px 0px 0px;
  border-radius: 4px;
  text-align: center;
}
</style>

