<template>
    <div id="footer">
        <nav>
            <router-link to="/"><el-button type="primary" circle><icon icon="tasks"/></el-button></router-link>
            <router-link to="/profile"><el-button type="primary" circle><icon icon="user"/></el-button></router-link>
            <router-link to="/menu"><el-button type="success" circle><icon icon="th"/></el-button></router-link>
            <router-link to="/notifications"><el-button type="primary" circle><icon icon="bell"/></el-button></router-link>
            <router-link to="/messages"><el-button type="primary" circle><icon icon="comment-alt"/></el-button></router-link>
        </nav>
    </div>  
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
#footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;    
}

nav > a > button {
    width: 35px;
    height: 35px;
    font-size: x-large;
}

nav > a {
    padding: 5px;
}
@media only screen and (max-width: 768px) {
     nav > a > button {
        font-size: medium;
    }
}
</style>