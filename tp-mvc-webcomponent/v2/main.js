import { CalculatorModel } from './CalculatorModel.js';
import { CalculatorView } from './CalculatorView.js';

function main()
{
	let model = new CalculatorModel();
	let view = new CalculatorView(model);

	document.body.appendChild(view);
}

window.onload = main;

export { main };