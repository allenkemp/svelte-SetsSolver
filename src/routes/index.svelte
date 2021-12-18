<script lang="ts">
import { add_flush_callback } from 'svelte/internal';

import * as FullDeckJSON from '../json/FullDeck.json';

const fullDeck = FullDeckJSON.fullDeck;


</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1>Full Deck</h1>
{#each fullDeck as {id, }}
