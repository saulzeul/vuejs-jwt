<template>
  <el-tree
    :data="data"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :props="producProp"
  ></el-tree>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          label: "Hamburguesa Sencilla",
          price: 40,
          children: [
            {
              id: 9,
              label: "Lechuga"
            },
            {
              id: 10,
              label: "Jitomate"
            },
            {
              id: 11,
              label: "Cebolla"
            },
            {
              id: 12,
              label: "Catsup"
            }
          ]
        },
        {
          id: 2,
          label: "Hamburguesa Sencilla",
          price: 55,
          children: [
            {
              id: 9,
              label: "Lechuga"
            },
            {
              id: 10,
              label: "Jitomate"
            },
            {
              id: 11,
              label: "Cebolla"
            },
            {
              id: 12,
              label: "Catsup"
            }
          ]
        }        
      ],
      producProp: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>