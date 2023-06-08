import Parent from "./PassingPropsToAComponent/Parent";

export default function PassingPropsToAComponent() {
	return (
		<>
			<div>Passing Props to a Component</div>
			<div>
				If you want to give a prop a default value to fall back on when no value
				is specified, you can do it with destructuring by putting "=
				defaultValue" right after the parameter.
			</div>
			{/* function Avatar({ person, size = 100 }) */}
			<div>
				To pass props, add them to the JSX, just like you would with HTML
				{/* attributes. To read props, use the function Avatar({(person, size)}) */}
				destructuring syntax. You can specify a default value like `size = 100`,
				which is used for missing and undefined props. You can forward all props
				{/* with `<Avatar {...props} />` JSX spread syntax, but don't overuse it!
				Nested JSX like{" "}
				<Card>
					<Avatar />
				</Card>{" "} */}
				will appear as the Card component's children prop. Props are read-only
				snapshots in time: every render receives a new version of props. You
				can't change props. When you need interactivity, you'll need to set
				state.
			</div>
			<br />
			<br />
			<Parent />
		</>
	);
}
