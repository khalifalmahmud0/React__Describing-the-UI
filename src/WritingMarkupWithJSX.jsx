export default function WritingMarkupWithJSX() {
	return (
		<>
			<h1>Writing Markup with JSX</h1>
			<span>
				JSX is a syntax extension for JavaScript that lets you write HTML-like
				markup inside a JavaScript file. Although there are other ways to write
				components, most React developers prefer the conciseness of JSX, and
				most codebases use it.
				<br />
				JSX looks like HTML, but under the hood it is transformed into plain
				JavaScript objects. You can’t return two objects from a function without
				wrapping them into an array. This explains why you also can’t return two
				JSX tags without wrapping them into another tag or a Fragment.
			</span>
		</>
	);
}
