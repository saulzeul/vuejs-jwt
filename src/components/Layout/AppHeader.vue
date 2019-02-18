<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="6">
                <router-link to="/"><el-button type="primary" size="small" icon="el-icon-menu" circle ></el-button></router-link>                                 
            </el-col>
            <el-col :span="12" align="middle">
                <el-button type="primary" icon="el-icon-search" size="small">Buscar</el-button>
            </el-col>
            <el-col :span="6" align="right">
                <router-link to="/about"><el-button type="primary" size="small">Perfil</el-button></router-link> 
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>