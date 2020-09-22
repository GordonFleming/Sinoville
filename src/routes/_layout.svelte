<script>
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		/* background-color: white; */
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
<body>
<Nav {segment}/>

<main>
    <!-- The slot is where for example the about page will be inserted -->
	<slot></slot>
</main>
    <Footer/>
</body>
