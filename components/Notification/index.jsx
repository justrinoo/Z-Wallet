import { ArrowDown, ArrowUp } from "components";

export default function Notification() {
	return (
		<>
			<section className="dashboard_notification position-absolute">
				<div className="dashboard_notification-list-income-expanse">
					<ArrowDown stroke="#4CEDB3" />
					<div className="dashboard_notification-list-description">
						<p>Transfer to Jessica Lee</p>
						<h5>Rp100.000</h5>
					</div>
				</div>
			</section>
		</>
	);
}
