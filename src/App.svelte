<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";

  import Home from "./routes/Home.svelte";
  import Calc from "./routes/Calc.svelte";

  export let url:string = "";

  const about = "This is a starter dApp built with Svelte, Vite for the Internet Computer.";
</script>

<main>

  <Router {url}>
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/calc">Calc</Link>
    </nav>

    <h1>{about}</h1>
    
    <div id="app">
      <Route path="/"><Home /></Route>
      <Route path="/calc"><Calc /></Route>
    </div>
  </Router>

</main>