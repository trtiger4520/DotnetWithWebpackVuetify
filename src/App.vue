<template>
    <div class="container">
        <h1>Index</h1>
        <button class="btn btn-primary" @click="add">count {{count}}</button>
        <div>
            <google-map></google-map>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import Maps from './Components/Maps.vue';

    @Component({
        components: {
            'google-map': Maps
        }
    })
    export default class App extends Vue {
        count: number = 1;

        add() {
            this.count++;
        }
    }
</script>