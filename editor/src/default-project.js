export const defaultProject = {
	
	app: {
		code: `
class MyApp extends App{
	
	createStartPage(){
		return AskFeelingPage
	}
	
}
		`.trim(),
	},
	
	folders: [{
		id: 1,
		name: "Start",
		offsetX: 0,
		offsetY: 0,
	}, {
		id: 2,
		name: "SecondFolder",
		offsetX: 0,
		offsetY: 0,
	}],
	
	pages: [{
		id: 1,
		folderId: 1,
		code: `
class AskFeelingPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`Hello!\`),
			Space,
			Text(\`How are you feeling?\`),
			Space,
			Columns(
				Space,
				Button(\`Bad\`).page(FeelingBadPage),
				Space,
				Button(\`Good\`).page(FeelingGoodPage),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}
	`.trim(),
		x: 200,
		y: 300
	}, {
		id: 2,
		folderId: 1,
		code: `
class FeelingGoodPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`Glad to hear that! :)\`),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}
	`.trim(),
		x: 800,
		y: 300
	}, {
		id: 3,
		folderId: 1,
		code: `
class FeelingBadPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`Sorry to hear that :(\`),
			Space,
			Button(\`I feel better now\`).page(FeelingGoodPage)
		)
	}
	
	onAfter(){
		
	}
	
}
	`.trim(),
		x: 500,
		y: 150
	}, {
		id: 4,
		folderId: 2,
		code: `
class PageInOtherFolder extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Text(\`This is a page in the other folder!\`)
	}
	
	onAfter(){
		
	}
	
}
	`.trim(),
		x: 250,
		y: 300
	}],
	
	pageTemplates: [{
		id: 1,
		code: `
class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`Are you older than 18?\`),
			Space,
			Columns(
				Space,
				Button(\`No\`).page(null),
				Space,
				Button(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}
		`.trim()
	}, {
		id: 2,
		code: `
class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`What's your age?\`),
			Space,
			Button(\`10\`).page(null),
			Button(\`15\`).page(null),
			Button(\`20\`).page(null),
			Button(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}
		`.trim()
	}],
	
}