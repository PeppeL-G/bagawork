<script>
	
	const categories = [{
		name: `Arrows`,
		rows: [
			`⇦ ⇨ ⇧ ⇩`,
			`← → ↑ ↓`,
			`↖ ↗`,
			`↙ ↘`,
			`↩ ↪`,
			`↶ ↷`,
			`↺ ↻`,
			`↔ ↕`,
		],
	}, {
		name: `Chess`,
		rows: [
			`♙ ♘ ♗ ♖ ♕ ♔`,
			`♟ ♞ ♝ ♜ ♛ ♚`
		],
	}, {
		name: `Dice`,
		rows: [
			`⚀ ⚁ ⚂ ⚃ ⚄ ⚅`,
		],
	}, {
		name: `Playing Cards`,
		rows: [
			`🂡 🂢 🂣 🂤 🂥 🂦 🂧 🂨 🂩 🂪 🂫 🂬 🂭 🂮`,
			`🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂼 🂽 🂾`,
			`🃁 🃂 🃃 🃄 🃅 🃆 🃇 🃈 🃉 🃊 🃋 🃌 🃍 🃎`,
			`🃑 🃒 🃓 🃔 🃕 🃖 🃗 🃘 🃙 🃚 🃛 🃜 🃝 🃞`,
			`🂠 🃟`,
			`♤ ♡ ♢ ♧`,
			`♠ ♥ ♦ ♣`
		],
	}, {
		name: `Shapes`,
		rows: [
			`■ □`,
			`◆ ◇`,
			`● ○`,
			`◀ ▶ ▲ ▼`,
			`◁ ▷ △ ▽`,
			`◢ ◣ ◤ ◥`,
			`◸ ◹ ◺ ◿`,
		],
	}, {
		name: `Smileys`,
		rows: [
			`🙂 😀 😄 😃 😁 😅 🤣`,
			`😐 😑 😒 😕`,
			`🙁 😖 😞 😓 😟 😢`,
		],
	}]
	
	
</script>

{#each categories as category}
	
	<h2>{category.name}</h2>
	
	{#if category.rows}
		
		<table>
			{#each category.rows as row}
				<tr>
					{#each row.split(` `) as symbol}
						<td>{symbol}</td>
					{/each}
				</tr>
			{/each}
		</table>
		
	{:else}
		
		{#each category.symbols.split(` `) as symbol}
			<p>{symbol}</p>
		{/each}
		
	{/if}
	
	
{/each}

<style>
	
	table{
		font-size: 150%;
		margin-left: 1em;
	}
	
</style>