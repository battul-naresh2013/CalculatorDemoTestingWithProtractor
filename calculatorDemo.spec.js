// Test suit for Calculator application
// This contains test cases for addition, substraction, division, multiplication and remender math operations.
describe('Protractor Demo App', function () {
	var firstNumber = element(by.model('first')); // get first input textbox
	var secondNumber = element(by.model('second')); // get first input textbox
	var operator = element(by.model('operator')); // get operator
	var goButton = element(by.id('gobutton')); // get button
	var latestResult = element(by.binding('latest')); // get results
	var history = element.all(by.repeater('result in memory')); // store results in memory

	beforeEach(function () {
		browser.get('http://juliemr.github.io/protractor-demo/');
		// browser.get('http://localhost:58885/index.html');
	});

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('should have a history', function () {
		calculate(20,2,'ADDITION');
		calculate(20,2,'SUBTRACTION');
		calculate(20,2,'MULTIPLICATION');
		calculate(20,2,'DIVISION');
		calculate(20,2,'MODULO');
		expect(history.count()).toEqual(5);
		// browser.pause();
	});

	it('should read the value from an input', function() {
		firstNumber.sendKeys(1);
		expect(firstNumber.getAttribute('value')).toEqual('1');
	});

	function calculate(a, b, op) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		operator.$('[value='+op+']').click();
		goButton.click();
		switch(op) {
			case 'ADDITION':
			expect(latestResult.getText()).toEqual((a+b).toString());
			break;
			case 'SUBTRACTION':
			expect(latestResult.getText()).toEqual((a-b).toString());
			break;
			case 'MULTIPLICATION':
			expect(latestResult.getText()).toEqual((a*b).toString());
			break;
			case 'DIVISION':
			expect(latestResult.getText()).toEqual((a/b).toString());
			break;
			case 'MODULO':
			expect(latestResult.getText()).toEqual((a%b).toString());
			break;    
			default:
			expect(latestResult.getText()).toEqual((a+b).toString());
		}
	}
});