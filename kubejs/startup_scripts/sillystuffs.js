StartupEvents.registry('item', event => {

  // Orespawn shit lmao
event.create('nether_star_ingot')
.displayName('Nether Star Ingot')
.texture('kubejs:item/orespawn/nether_star_ingot')

event.create('fluxed_uranium_ingot')
.displayName('Activated Uranium Ingot')
.texture('kubejs:item/orespawn/fluxed_uranium_ingot')

event.create('titanium_uranium_sword', 'sword')
.displayName('Ultimate Sword')
.tier('netherite')
.attackDamageBaseline(195.0)
.maxDamage(5000)
.texture('kubejs:item/orespawn/titanium_uranium_sword.png')
  })