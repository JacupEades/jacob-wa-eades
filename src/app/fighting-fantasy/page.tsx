import FantasyCard from "@/components/Card/Fantasy/FantasyCard";
import "./FightingFantasyPage.css";

export default function FightingFantasyPage() {
	return (
		<div className="FightingFantasyPage">
			<section className="FightingFantasyPage-cardSection">
				<FantasyCard />
				<FantasyCard />
				<FantasyCard />
				<FantasyCard />
			</section>
		</div>
	);
}
