<script lang="ts">
  const about = "This is a starter dApp built with Svelte and the Internet Computer.";
 
  import { createActor } from '../declarations/backend';
 
   let input = '', disabled = false, greeting = '';
 
   const handleOnSubmit = async () => {
     disabled = true;
     try {
       // Canister IDs are automatically expanded to .env config - see vite.config.ts
       const canisterId = process.env.CANISTER_ID_BACKEND;
 
       // We pass the host instead of using a proxy to support NodeJS >= v17 (ViteJS issue: https://github.com/vitejs/vite/issues/4794)
       const host = process.env.HOST;
     
       // Create an actor to interact with the IC for a particular canister ID
       const actor = createActor(canisterId, { agentOptions: { host } });
 
       // Call the IC
       greeting = await actor.sayHelloTo(input);
     } catch (err: unknown) {
       console.error(err);
     }
     disabled = false;
   };
 
 </script>
 
 <div>
   <h1>{about}</h1>
 
   <form on:submit|preventDefault={handleOnSubmit}>
     <label for="name">Say hello to </label>
     <input id="name" alt="Name" type="text" bind:value={input} {disabled} />
     <button type="submit">Click Me!</button>
 
     {#if disabled}
       <p>Fetching data from the IC...</p>
     {:else}
       <section id="greeting">
         {greeting}
       </section>
     {/if}
   </form>
 </div>