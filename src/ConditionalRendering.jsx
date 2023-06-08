export default function ConditionalRendering() {
	return (
		<div>
			<p>
				Another common shortcut you’ll encounter is the JavaScript logical AND
				(&&) operator. Inside React components, it often comes up when you want
				to render some JSX when the condition is true, or render nothing
				otherwise. With &&, you could conditionally render the checkmark only if
				isPacked is true:
				{/* {isPacked && "✔"} */}
			</p>
		</div>
	);
}
