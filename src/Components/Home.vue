<template>
    <v-container
        fluid
      >
      <div>
        <div class="d-print-none">Screen Only (Hide on print only)</div>
        <div class="d-none d-print-block">Print Only (Hide on screen only)</div>
        <div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
      </div>

      <div class="layout my-4 align-center justify-space-between wrap">
        <div class="flex display-3">Quantum Mechanics</div>
        <div class="flex hidden-md-and-down text-right text-uppercase grey--text">
            Regular
        </div>
      </div>

      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </v-card>

    </v-container>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {

    }
</script>