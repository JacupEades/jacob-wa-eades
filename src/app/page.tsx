import "./HomePage.css";

export default function HomePage() {
	return (
		<div className="HomePage">
			<header className="HomePage-header">
				<h1 className="HomePage-headerHead">Welcome, to Jacob WA Eades Site</h1>
				<h2 className="HomePage-headerSub">
					Next js, React 19, site for learning and develoment fun.
				</h2>
			</header>
			<main className="HomePage-main">
				<section className="HomePage-todo">
					<h1>Todo List</h1>
					<ul className="HomePage-todoList">
						<li>Add package Motion</li>
						<li>Add ideas list</li>
						<li>Add WIP list</li>
						<li>Add completed features list</li>
						<li>Fix Site colors</li>
						<li>Nav categories: Games, Faith, Portfolio</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
