<script lang="ts">
  import { ic } from '../store/ic';
  let a: number = 0;
  let b: number = 0;

  let result: bigint = BigInt(0);
  const about = "call calc function";
  const calc = async () => {
    try {
      // Call the IC
      result = await $ic.actor.calc(BigInt(a), BigInt(b));

    } catch (err: unknown) {
      console.error(err);
    }
  }
</script>

<div>
  <span class="highlight">{about}</span>
</div>

<form>
  <div>
    <label for="name">Value A</label>
    <input id="a" alt="value a" type="number" min="0" bind:value={a}/>
  </div>    
  <div>
    <label for="name">Value B</label>
    <input id="b" alt="value a" type="number" min="0" bind:value={b}/>
  </div>
  

  <button type="button" on:click={calc}>Click Me!</button>
</form>

<div class="result">
  Result is: {result}
</div>



