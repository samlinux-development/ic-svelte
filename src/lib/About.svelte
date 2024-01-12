<script lang="ts">
  const about = "This is a starter dApp built with Svelte, Vite and the Internet Computer.";
 
  import { createActor } from '../declarations/backend';
 
   let input = '', greeting = '';
 
   const handleOnSubmit = async () => {
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
   };
 
 </script>
 
 <div>
   <h1>{about}</h1>
 
   <form>
     <label for="name">Say hello to: </label>
     <input id="name" alt="Name" type="text" bind:value={input}/>
     <button type="button" on:click={handleOnSubmit}>Click Me!</button>

     <div id="greeting">
      {greeting}
     </div>
   </form>
 </div>

 <style>
    #greeting {
      margin-top: 20px;
      height: 50px;
      font-size: 1.5em;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center; 
    }
 </style>