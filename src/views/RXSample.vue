<template>
  <div class="home">
    <p>{{count}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { interval, Subject, Observable } from 'rxjs';
import { filter, map, repeatWhen, takeUntil } from 'rxjs/operators';
import { DOMStream, Subscription, DOMStreamObservable } from 'vue-rx-decorators'

@Component({
})
export default class Home extends Vue {
    private count: Number = 0;

    @DOMStream()
    private snooze$!: DOMStreamObservable<MouseEvent>;

    created () {
        let time = interval(1000);
        time.pipe(
            filter((n: number) => n % 2 !== 0),
            map((n: number) => n * n),
        )
        .subscribe(t => this.count = t)
    }
}
</script>
