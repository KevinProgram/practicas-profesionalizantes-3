class CalculatorModel
{
	constructor()
	{

	}

	async calculateResult( expression )
	{
		let response_json = await fetch('./api/calculate.php', { method:'post', body: JSON.stringify(expression) } );
		let response = await response_json.json();

		return response;
	}

}

export { CalculatorModel };