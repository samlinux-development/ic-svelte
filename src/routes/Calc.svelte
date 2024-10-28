<script lang="ts">
  import { ic } from '../store/ic';
  let a: number = $state(0);
  let b: number = $state(0);

  let result: bigint = $state(BigInt(0));
  const about = "call calc function a + b";

  const calc = async () => {
    try {
      // Call the IC
      result = await $ic.actor.calc(BigInt(a), BigInt(b));

    } catch (err: unknown) {
      console.error(err);
    }
  }

  const validatePositiveInteger = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (parseInt(input.value) < 0) {
      input.value = input.value.replace(/-/g, '');
    }
  }

</script>

<div>
  <span class="highlight">{about}</span>
</div>

<form>
  <div>
    <label for="name">Value A</label>
    <input id="a" alt="value a" type="number" min="0" oninput={validatePositiveInteger} bind:value={a}/>
  </div>    
  <div>
    <label for="name">Value B</label>
    <input id="b" alt="value a" type="number" min="0" oninput={validatePositiveInteger} bind:value={b}/>
  </div>
  

  <button type="button" onclick={calc}>Click Me!</button>
</form>

<div class="result">
  Result is: {result}
</div>



