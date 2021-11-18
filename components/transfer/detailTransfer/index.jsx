import React from "react";

export default function DetailTransfer() {
	return (
		<>
			<section className="transfer_detail-main">
				<p className="transfer_detail-title-detail">Details</p>
				<section className="transfer_detail-card">
					<p className="transfer_detail-title">Amount</p>
					<h4 className="transfer_detail-description">Rp.100.000</h4>
				</section>
				<section className="transfer_detail-card">
					<p className="transfer_detail-title">Balance Left</p>
					<h4 className="transfer_detail-description">Rp.20.000</h4>
				</section>
				<section className="transfer_detail-card">
					<p className="transfer_detail-title">Date & Time</p>
					<h4 className="transfer_detail-description">
						{new Date(Date.now()).toDateString()}
					</h4>
				</section>
				<section className="transfer_detail-card">
					<p className="transfer_detail-title">Notes</p>
					<h4 className="transfer_detail-description">For buying some socks</h4>
				</section>
			</section>
		</>
	);
}
