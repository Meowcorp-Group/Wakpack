StartupEvents.registry('item', (event) => {
	// Orespawn shit lmao
	event
		.create('nether_star_ingot')
		.displayName('Nether Star Ingot')

	event
		.create('fluxed_uranium_ingot')
		.displayName('Activated Uranium Ingot')

	event
		.create('titanium_uranium_sword', 'sword')
		.displayName('Ultimate Sword')
		.tier('netherite')
		.attackDamageBaseline(195.0)
		.maxDamage(5000)
});
