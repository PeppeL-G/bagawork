/**
 * This class represents a GUI component that can be used to
 * build the GUI shown to the user. Use sub-classes to this class.
 */
abstract class Component{
	
	/**
	 * This method is only useful to call when the component is used as a
	 * child in a Rows/Columns layout.
	 * 
	 * If the children in the Rows/Columns layout don't occupy all the
	 * space in the layout, then you can call this method on the children
	 * to allow them to grow bigger. Pass it a number indicating the
	 * preferred relative size/ratio they should have, and then the children
	 * will grow bigger to try to honor this.
	 * 
	 * All children will use `0` as default, except the Space component,
	 * which uses `1` as default.
	 * 
	 * @param preferredRelativeSize A number indicating how big this child should be relative to the other children
	 */
	grow(preferredRelativeSize: number){ return this };
	
	/**
	 * This method is the same as `grow()` (so read the documentation for
	 * that one), but this method will also make sure that the child never
	 * grow bigger than the relative size you assign it. If the child's
	 * content don't fit within this size, then the child becomes scrollable.
	 * 
	 * @param preferredRelativeSize A number indicating how big this child should be relative to the other children
	 */
	growShrink(preferredRelativeSize: number){ return this };
	
	/**
	 * This method sets the background color the GUI component will have.
	 * 
	 * @param colorName The name of the color in English, such as `red`
	 */
	backgroundColor(colorName: string){ return this };
	
	/**
	 * This method sets the corner radius the GUI component will have.
	 * 
	 * @param radius The radius of the corner
	 */
	cornerRadius(radius: number){ return this };
	
	/**
	 * This method sets the padding (the amount of space between the
	 * component's border and its content) the GUI component should have.
	 * The padding will only be applied to the sides of the component
	 * indicated by the `sides` parameter, or all sides if it's not provided.
	 * 
	 * This configuration method can be called multiple times to give
	 * different sides different amounts of padding.
	 * 
	 * @param amount The amount of padding the component should have
	 * @param sides A string indicating which sides of the component
	 * the padding should be applied to. Write:
	 * 
	 * - t in the string to include the Top side
	 * - b in the string to include the Bottom side
	 * - l in the string to include the Left side
	 * - r in the string to include the Right side
	 * 
	 * If `sides` is not provided, the padding will be applied to all sides
	 * (the default value is `` `tblr` ``).
	 */
	padding(amount: number, sides: string = `tblr`){ return this };

	/**
	 * This method sets the border the GUI component should have.
	 * The border will only be applied to the sides of the component
	 * indicated by the `sides` parameter, or all sides if it's not provided.
	 * 
	 * This configuration method can be called multiple times to give
	 * different sides different borders.
	 * 
	 * @param thickness The thickness of the border
	 * @param color The color of the border in English, such as `red`
	 * @param sides A string indicating which sides of the component
	 * the border should be added to. Write:
	 * 
	 * - t in the string to include the Top side
	 * - b in the string to include the Bottom side
	 * - l in the string to include the Left side
	 * - r in the string to include the Right side
	 * 
	 * If `sides` is not provided, the border will be applied to all sides
	 * (the default value is `` `tblr` ``).
	 */
	border(thickness: number, color: string, sides: string = `tblr`) { return this }

	/**
	 * This method sets the font that should be used to format the text
	 * shown by this component and its child components.
	 * 
	 * @param font The font that should be used
	 */
	font(font: Font) { return this }

	/**
	 * This method will remove the component if the condition you pass
	 * to it is false. If the condition is true, the component will be
	 * used as usual.
	 * 
	 * @param condition The condition indicating when the component
	 * should be kept/removed
	 */
	keepIf(condition: boolean) { return this }

	/**
	 * This method will hide the component if the condition you pass
	 * to it is false. If the condition is true, the component will be
	 * shown as usual.
	 * 
	 * @param condition The condition indicating when the component
	 * should be shown/hidden
	 */
	showIf(condition: boolean) { return this }
	
}