export const defaultProject = {
	
	editorSettings: {
		codeScreen: {
			widthInMm: 40*1.5,
			heightInMm: 66*1.5,
		},
		folderScreen: {
			widthInMm: 40,
			heightInMm: 66,
		},
	},
	
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
		return Rows.children(
			Space,
			Text.text(\`Hello!\`),
			Space,
			Text.text(\`How are you feeling?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Bad\`).page(FeelingBadPage),
				Space,
				Button.text(\`Good\`).page(FeelingGoodPage),
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
		return Rows.children(
			Space,
			Text.text(\`Glad to hear that! :)\`),
			Space,
			Button.text(\`Restart\`).page(AskFeelingPage)
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
		return Rows.children(
			Space,
			Text.text(\`Sorry to hear that :(\`),
			Space,
			Button.text(\`I feel better now\`).page(FeelingGoodPage)
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
		return Text.text(\`This is a page in the other folder!\`)
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
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
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
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}
		`.trim()
	}],
	
}