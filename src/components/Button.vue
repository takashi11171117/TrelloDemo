<template>
    <button @click="onClick">MyButton</button>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Button extends Vue{
        @Prop()
        public greet?: string;

        @Emit()
        public clicked(){
        }

        public onClick(){
            alert(this.greet);
            this.clicked();
        }
    }
</script>