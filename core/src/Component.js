export class Component{
	
	constructor(props){
		
		this.backgroundColor = props.backgroundColor?.[0]?.[0]
		this.size = props.size?.[0]?.[0]
		this.cornerRadius = props.cornerRadius?.[0]?.[0]
		this.showIf = props.showIf?.[0]?.[0] ?? true
		this.keepIf = props.keepIf?.[0]?.[0] ?? true
		
		const paddings = props.padding ?? [[]]
		paddings.reverse()
		
		const defaultPadding = paddings.find(p => p[1] == undefined) ?? []
		
		this.paddingTop    = (paddings.find(p => p[1]?.includes(`t`)) ?? defaultPadding)[0]
		this.paddingRight  = (paddings.find(p => p[1]?.includes(`r`)) ?? defaultPadding)[0]
		this.paddingBottom = (paddings.find(p => p[1]?.includes(`b`)) ?? defaultPadding)[0]
		this.paddingLeft   = (paddings.find(p => p[1]?.includes(`l`)) ?? defaultPadding)[0]
		
		const borders = props.border ?? [[]]
		borders.reverse()
		
		const defaultBorder = borders.find(b => b[2] == undefined) ?? []
		
		const borderTop    = (borders.find(b => b[2]?.includes(`t`)) ?? defaultBorder)
		const borderRight  = (borders.find(b => b[2]?.includes(`r`)) ?? defaultBorder)
		const borderBottom = (borders.find(b => b[2]?.includes(`b`)) ?? defaultBorder)
		const borderLeft   = (borders.find(b => b[2]?.includes(`l`)) ?? defaultBorder)

		this.borderTop = {
			thickness: borderTop[0],
			color: borderTop[1],
		}
		this.borderRight = {
			thickness: borderRight[0],
			color: borderRight[1],
		}
		this.borderBottom = {
			thickness: borderBottom[0],
			color: borderBottom[1],
		}
		this.borderLeft = {
			thickness: borderLeft[0],
			color: borderLeft[1],
		}
		
	}
	
	onAfter(a, p){
		
	}
	
	createAfterDirections(){
		return [
			/* Direction */
		]
	}
	
}