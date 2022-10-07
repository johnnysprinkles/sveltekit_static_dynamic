<script>
  import { onMount } from 'svelte';

  let message = '';

  onMount(async () => {
    let response = await fetch('/api/foo/bar/baz');
    message = await response.text();
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1>{message}</h1>
