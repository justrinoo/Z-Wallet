import Link from "next/link";
import Image from "next/image";

export default function ListUsers({ setSeeAll }) {
	const handleSeeAll = () => setSeeAll(true);
	return (
		<>
			<div className="dashboard_content-transaction-history-card">
				<div className="dashboard_content-transaction-history-card-body-link">
					<h4 className="dashboard_content-transaction-history-title">
						Transaction History
					</h4>
					<span
						className="dashboard_content-transaction-history-link-see-all"
						onClick={handleSeeAll}
					>
						See All
					</span>
				</div>

				<div className="dashboard_content-transaction-history-card-list-users mt-3">
					<Image
						src="/images/face1.png"
						width={56}
						height={56}
						className="d-block"
						alt="Face User"
						layout="fixed"
					/>
					<div className="dashboard_content-transaction-history-card-list-users-description">
						<div className="d-flex align-items-center justify-content-between">
							<div>
								<h5 className="dashboard_content-transaction-history-card-list-users-name">
									Samuel Suhi
								</h5>
								<p className="dashboard_content-transaction-history-card-list-users-option">
									Accept
								</p>
							</div>
							<span className="dashboard_content-transaction-history-card-list-users-accept-money ">
								+Rp50.000
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
