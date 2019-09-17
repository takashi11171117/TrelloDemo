<template>
  <div class="home">
    <p>{{count}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  components: {
  },
})
export default class Home extends Vue {
    public count: Number = 0;

    created () {
        let timer = interval(1000);
        let timerObserver = timer.pipe(
            filter((n: number) => {
                return n % 2 !== 0
            }),
            map((n: number) => n * n)
        );
        timerObserver.subscribe(x => {
            this.count = x
        });
    }
}
</script>
