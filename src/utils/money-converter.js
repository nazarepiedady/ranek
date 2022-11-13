export default function moneyConverter(number) {
	const money = Number(number)
	const currency = {
		language: 'en-US',
		information: {
			style: 'currency',
			currency: 'USD'
		}
	}

	if (isNaN(money)) {
		return money
	} else {
		return money.toLocaleString(
			currency.language,
			currency.information
		)
	}
}