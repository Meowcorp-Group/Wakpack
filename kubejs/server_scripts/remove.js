// priority: 0

ServerEvents.recipes(event => {
	event.remove({ output: 'extradisks:infinite_storage_part' })
	event.remove({ output: 'extradisks:infinite_fluid_storage_part' })
})