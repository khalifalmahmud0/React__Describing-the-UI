// export default function Child({ name, age }) {
// 	return (
// 		<div>
// 			<h2>
// 				I am {name} and age is {age}
// 			</h2>
// 		</div>
// 	);
// }

// ......

// export default function Child({ name, age = "80" }) {
// 	return (
// 		<div>
// 			<h2>
// 				I am {name} and age is {age}
// 			</h2>
// 		</div>
// 	);
// }

// ......

export default function Child({ ...props }) {
	return (
		<div>
			<h2>
				I am {props.name} and age is {props.age ? props.age : "100"} and i live
				in {props.location}
			</h2>
		</div>
	);
}
