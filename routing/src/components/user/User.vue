<template>
    <div>
        <h1>The User Page</h1>
        <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
        <p>Loaded ID: {{ id }}</p>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({name: 'home'});
        }
    }
}
</script>

