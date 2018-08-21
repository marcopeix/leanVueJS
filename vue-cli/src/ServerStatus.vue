<template lang="html">
    <div class="">
        <p>Server status: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change status</button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            status: 'Critical'
        }
    },
    methods: {
        changeStatus () {
            this.status = 'Normal';
        }
    }
}
</script>

<style lang="css">
</style>
