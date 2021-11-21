export default function AmountDetail({ data }) {
	return (
		<>
			<section className="transfer_detail-main">
				<p className="transfer_detail-title-detail">Details</p>
				<section className="transfer_detail-card">
					<p className="transfer_detail-title">Amount</p>
					<h4 className="transfer_detail-description">
						Rp{new Intl.NumberFormat("id-ID").format(data.amount)}
					</h4>
				</section>
				<section className="transfer_detail-card">
					<p className="transfer_detail-title">Balance Left</p>
					<h4 className="transfer_detail-description">
						Rp{new Intl.NumberFormat("id-ID").format(data.balanceLeft)}
					</h4>
				</section>
				<section className="transfer_detail-card">
					<p className="transfer_detail-title">Date & Time</p>
					<h4 className="transfer_detail-description">
						{data.dateTransaction}
					</h4>
				</section>
				<section className="transfer_detail-card">
					<p className="transfer_detail-title">Notes</p>
					<h4 className="transfer_detail-description">{data.notes}</h4>
				</section>
			</section>
		</>
	);
}
