// priority: 0

ServerEvents.recipes(event => {
	// stonecutting(output, input)
	event.stonecutting('createstation_decor:signalepole', '#create:tracks')
	event.stonecutting('createstation_decor:catenaryholder_1', '#create:tracks')
	event.stonecutting('createstation_decor:catenaryholder_2', '#create:tracks')
	event.stonecutting('createstation_decor:signal_screenlong', '#create:tracks')
	event.stonecutting('createstation_decor:signalbasemultisection', '#create:tracks')
	event.stonecutting('createstation_decor:signalbasemain', '#create:tracks')
	event.stonecutting('createstation_decor:signalbaseapproach', '#create:tracks')
	event.stonecutting('createstation_decor:catenary', '#create:tracks')
	event.stonecutting('createstation_decor:catenarywallmout', '#create:tracks')
	event.stonecutting('createstation_decor:celingcatenary', '#create:tracks')
	event.stonecutting('createstation_decor:signalscreen', '#create:tracks')
	event.stonecutting('createstation_decor:signalheadscrenn_2', '#create:tracks')

	event.stonecutting('createstation_decor:platform_1', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:platformsign_2', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:platformsign_3', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:platformsign_4', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:platformsign_5', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:platformsign_6', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:platformsign_7', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:platformsign_8', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:platformsign_9', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sbb_platformsign_1', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sbb_platformsign_2', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sbb_platformsign_3', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sbb_platformsign_4', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sbb_platformsign_5', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sbb_platformsign_6', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sbb_platformsign_7', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sbb_platformsign_8', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sbb_platformsign_9', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sncf_platformsign_1', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sncf_platformsign_2', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sncf_platformsign_3', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sncf_platformsign_4', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sncf_platformsign_5', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sncf_platformsign_6', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sncf_platformsign_7', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sncf_platformsign_8', '#forge:nuggets/iron')
	event.stonecutting('createstation_decor:sncf_platformsign_9', '#forge:nuggets/iron')

	// crafting
	event.shaped(
		Item.of('kubejs:titanium_uranium_sword', 1),
		[
			' T ',
			' U ',
			' I '
		],
		{
			T: 'kubejs:nether_star_ingot',
			U: 'kubejs:fluxed_uranium_ingot',
			I: 'minecraft:iron_ingot'
		}
	)
})