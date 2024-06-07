import { CalculatorController } from './CalculatorController.js';

class CalculatorView extends HTMLElement
{
	constructor(modelInstance)
	{
		super();

		/*Creamos los elementos/objetos de la UI (User Interface)*/

		this._innerController = new CalculatorController(this, modelInstance);

		this._table = document.createElement('table');

		this._tableBody = document.createElement('tbody');

        this._table.appendChild(this._tableBody);

		const displayTableRow = this._table.insertRow();
		const sevenTableRow = this._table.insertRow();
		const fourTableRow = this._table.insertRow();
		const oneTableRow = this._table.insertRow();
		const zeroTableRow = this._table.insertRow();
		const clearTableRow = this._table.insertRow();
			

		this._display = document.createElement('input');

		this._button0 = document.createElement('button');
		this._button1 = document.createElement('button');
		this._button2 = document.createElement('button');
		this._button3 = document.createElement('button');
		this._button4 = document.createElement('button');
		this._button5 = document.createElement('button');
		this._button6 = document.createElement('button');
		this._button7 = document.createElement('button');
		this._button8 = document.createElement('button');
		this._button9 = document.createElement('button');

		this._plusButton = document.createElement('button');
		this._minusButton = document.createElement('button');
		this._productButton = document.createElement('button');
		this._divisionButton = document.createElement('button');
			
		this._dotButton = document.createElement('button');
		this._calculateButton = document.createElement('button');
		this._clearButton = document.createElement('button');

		this._button0.textContent = "0";
		this._button1.textContent = "1";
		this._button2.textContent = "2";
		this._button3.textContent = "3";
		this._button4.textContent = "4";
		this._button5.textContent = "5";
		this._button6.textContent = "6";
		this._button7.textContent = "7";
		this._button8.textContent = "8";
		this._button9.textContent = "9";
		
		this._plusButton.textContent = '+';
		this._minusButton.textContent = '-';
		this._productButton.textContent = '*';
		this._divisionButton.textContent = '/';
			
		this._dotButton.textContent = '.';
		this._calculateButton.textContent = '=';
		this._clearButton.textContent = 'Clear';

		this._display.classList.add("displayResult");

		this._button0.classList.add("numberButton");
		this._button1.classList.add("numberButton");
		this._button2.classList.add("numberButton");
		this._button3.classList.add("numberButton");
		this._button4.classList.add("numberButton");
		this._button5.classList.add("numberButton");
		this._button6.classList.add("numberButton");
		this._button7.classList.add("numberButton");
		this._button8.classList.add("numberButton");
		this._button9.classList.add("numberButton");

		this._plusButton.classList.add("operatorButton");
		this._minusButton.classList.add("operatorButton");
		this._productButton.classList.add("operatorButton");
		this._divisionButton.classList.add("operatorButton");

		this._dotButton.classList.add("numberButton");
		this._calculateButton.classList.add("calculateButton");
		this._clearButton.classList.add("clearButton");

		this._displayCell = displayTableRow.insertCell()
		this._displayCell.colSpan = 4;
		this._displayCell.appendChild(this._display);


		sevenTableRow.insertCell().appendChild(this._button7);
		sevenTableRow.insertCell().appendChild(this._button8);
		sevenTableRow.insertCell().appendChild(this._button9);
		sevenTableRow.insertCell().appendChild(this._plusButton);

		fourTableRow.insertCell().appendChild(this._button4);
		fourTableRow.insertCell().appendChild(this._button5);
		fourTableRow.insertCell().appendChild(this._button6);
		fourTableRow.insertCell().appendChild(this._minusButton);

		oneTableRow.insertCell().appendChild(this._button1);
		oneTableRow.insertCell().appendChild(this._button2);
		oneTableRow.insertCell().appendChild(this._button3);
		oneTableRow.insertCell().appendChild(this._productButton);

		zeroTableRow.insertCell().appendChild(this._button0);
		zeroTableRow.insertCell().appendChild(this._dotButton);
		zeroTableRow.insertCell().appendChild(this._calculateButton);
		zeroTableRow.insertCell().appendChild(this._divisionButton);


		const clearTableCell = clearTableRow.insertCell()
		clearTableCell.colSpan = 4;
		clearTableCell.appendChild(this._clearButton);

		this.appendChild(this._table)


		/*Configurar los elementos/objetos*/

		/*Estilización*/
	
		/*Disposición de elementos de la interfaz (UI) (Layouting)*/

	}


	updateDisplayWith( data )
	{
		this.clearDisplay();

		this._display.value = data;
	}

	getDisplayValue()
	{
		return this._display.value;
	}

	clearDisplay()
	{
		this._display.value = "";
	}
	
	connectedCallback()
	{
		this._button0.onclick = this._innerController.onButton0Click.bind(this._innerController);
		this._button1.onclick = this._innerController.onButton1Click.bind(this._innerController);
		this._button2.onclick = this._innerController.onButton2Click.bind(this._innerController);
		this._button3.onclick = this._innerController.onButton3Click.bind(this._innerController);
		this._button4.onclick = this._innerController.onButton4Click.bind(this._innerController);
		this._button5.onclick = this._innerController.onButton5Click.bind(this._innerController);
		this._button6.onclick = this._innerController.onButton6Click.bind(this._innerController);
		this._button7.onclick = this._innerController.onButton7Click.bind(this._innerController);
		this._button8.onclick = this._innerController.onButton8Click.bind(this._innerController);
		this._button9.onclick = this._innerController.onButton9Click.bind(this._innerController);

		this._dotButton.onclick = this._innerController.onButtonDotClick.bind(this._innerController);

		this._plusButton.onclick = this._innerController.onButtonPlusClick.bind(this._innerController);
		this._minusButton.onclick = this._innerController.onButtonMinusClick.bind(this._innerController);
		this._productButton.onclick = this._innerController.onButtonProductClick.bind(this._innerController);
		this._divisionButton.onclick = this._innerController.onButtonDivisionClick.bind(this._innerController);
		this._calculateButton.onclick = this._innerController.onButtonCalculateClick.bind(this._innerController);
		this._clearButton.onclick = this._innerController.onButtonClearClick.bind(this._innerController);
	}

	disconnectedCallback()
	{

	}

	adoptedCallback()
	{

	}

	attributeChangedCallback(oldValue, newValue)
	{

	}

	static observableAttributes()
	{
		return [];
	}
}

customElements.define('wc-viewx', CalculatorView );

export { CalculatorView };