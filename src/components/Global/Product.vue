<template>
  <div>
    <div class="card">
      <div class="card-text">
        <p>HAMBURGUESA SENCILLA <br> $40</p>
      </div>
      <img
        class="card-product-image"
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  max-width: 100%;
  height: auto;
  background: white;
  padding: 5px;
  margin: 0px;
  border-radius: 4px;
}
.card-product-image {
  width: 100%;
}

.card-text {
  background: #ff5566;
  color: white;
  text-align: center;
}
.card-text > p {
  margin: 0px;
}
</style>

