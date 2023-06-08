import Child from "./Child";

export default function Parent() {
	return (
		<div>
			{/* <Child name="khalif" age="26" /> */}

			{/* <Child name="khalif" /> */}
			<Child name="khalif" location="Dhaka" />
		</div>
	);
}
