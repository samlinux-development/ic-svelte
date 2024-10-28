import './app.css'
import App from './App.svelte'
import { mount } from 'svelte';

const targetElement = document.getElementById('app')
if (!targetElement) {
  throw new Error("Couldn't find target element with id 'app'")
}

const app = mount( App, {
  "target": targetElement,
} );

export default app
