---
import MainHero from "../components/MainHero.vue"
import TestimonialsHero from "../components/TestimonialsHero.vue"
import InstructionsHero from "../components/InstructionsHero.vue"
import FooterHero from "../components/FooterHero.vue"
import InstructionCard from "../components/elements/InstructionCard.vue"
import "../styles/global.css";  

---
<style>
	body{margin:0;}
</style>
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<meta name="generator" content={Astro.generator} />
	<title>Aquí Estoy</title>
</head>
<body>

	<MainHero/>
	<InstructionsHero/>
	<TestimonialsHero/>
	<FooterHero/>


</body>
