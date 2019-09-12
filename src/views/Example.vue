<template>
  <div class="home">
    <p>{{greetText}}</p>
    <Button :greet="greetText" @clicked="onMyButtonClicked" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button,
  },
})
export default class Home extends Vue {
    public greetText: string = "Hello";

    public onMyButtonClicked(){
        this.greetText = "こんにちは";
    }
}
</script>
