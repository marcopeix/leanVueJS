<template lang="html">
    <div class="row">
        <form class="" action="index.html" method="post">
            <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 form-group">
                <label for="">Quote</label>
                <textarea name="name" rows="3" cols="80" class="form-control" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 form-group">
                <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            quote: ''
        };
    },
    methods: {
        createNew() {
            this.$emit('quoteAdded', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style lang="css">
</style>
