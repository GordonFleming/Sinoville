<script>
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
    body{
        background: rgb(98,136,207);
        background: linear-gradient(0deg, rgba(98,136,207,1) 0%, rgba(124,154,209,1) 16%, rgba(138,168,218,1) 32%, rgba(219,225,232,1) 89%);
    }
</style>
<body>
<Nav {segment}/>

<div class="container pt-5 pb-5">
    <!-- The slot is where for example the about page will be inserted -->
    <slot></slot>
</div>

    <Footer/>
</body>
