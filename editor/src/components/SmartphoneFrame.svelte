<div class="smartphoneFrame">
	
	<div class="camera">◎︎</div>
	
	<slot />
	
	<div class="buttons">
		<span>◁</span>
		<span>◯</span>
		<span>□</span>
	</div>
	
</div>

<style>

.smartphoneFrame{
	
	display: inline-block;
	position: relative;
	background-color: rgb(109, 77, 77);
	padding: 1em;
	padding-bottom: 2em;
	border-radius: 1em;
	
	& .camera{
		position: absolute;
		color: white;
		left: 50%;
		top: 0;
		translate: -50% 0;
		cursor: default;
	}
	
	& .screen {
		display: inline-block;
		width: 200px;
		height: 340px;
		margin: 0 auto;
		overflow: auto;
		resize: both;
	}
	
	& .buttons{
		
		font-family: 'Courier New', Courier, monospace;
		text-align: center;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		color: white;
		display: flex;
		padding: 0.5em;
		
		& > span{
			flex: 1;
			cursor: default;
		}
		
	}
	
}

</style>