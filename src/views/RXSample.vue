<template>
  <div class="home">
    <p>{{count}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { interval, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    subscriptions: () => {
        return {
            count: interval(1000).pipe(
                filter((n: number) => {
                    return n % 2 !== 0
                }),
                map((n: number) => n * n)
            )
        }
    }
})
export default class Home extends Vue {
    public count: Number = 0;
}
</script>
