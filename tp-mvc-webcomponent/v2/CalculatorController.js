class CalculatorController
{
	constructor(viewInstance, modelInstance)
	{		
		this.innerView = viewInstance;
		this.innerModel = modelInstance;
	}

	onButton0Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "0") }

	onButton1Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "1") }

	onButton2Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "2") }

	onButton3Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "3") }

	onButton4Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "4") }

	onButton5Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "5") }

	onButton6Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "6") }

	onButton7Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "7") }

	onButton8Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "8") }

	onButton9Click() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "9") }


	onButtonDotClick() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + ".") }

	onButtonPlusClick() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "+") }

	onButtonMinusClick() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "-") }

	onButtonProductClick() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "*") }

	onButtonDivisionClick() { this.innerView.updateDisplayWith(this.innerView.getDisplayValue() + "/") }
		
	onButtonCalculateClick()
	{
		this.innerModel.calculateResult(this.innerView.getDisplayValue()).then(response => { this.innerView.updateDisplayWith( response ) });
	}

	onButtonClearClick() { this.innerView.clearDisplay() }


}

export { CalculatorController };