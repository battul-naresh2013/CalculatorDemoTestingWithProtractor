// spec.js
describe('Protractor Demo App', function () {
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var operator = element(by.model('operator'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));

	var history = element.all(by.repeater('result in memory'));

	function add(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
	}

function sub(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
	}
	
	function mul(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
	}

	function div(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
	}
	
		function rem(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
	}
		
	beforeEach(function () {
		browser.get('http://juliemr.github.io/protractor-demo/');
		// browser.get('http://localhost:58885/index.html');

	});

it('should have a history', function () {
		add(3, 4);
		sub(10,5);
		mul(20,2);
		div(20,2);

		expect(history.count()).toEqual(4);

		add(5, 6);

		expect(history.count()).toEqual(5); 
	});
});

// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
	  // browser.get('http://localhost:58885/index.html');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('should sub 10 from 5', function() {
    firstNumber.sendKeys(10);
    secondNumber.sendKeys(5);
		var select = element(by.model('operator'));
		select.$('[value="SUBTRACTION"]').click();

    goButton.click();

    expect(latestResult.getText()).toEqual('5');
  });
  
  it('should div 20 and 2', function() {
    // Fill this in.
	 firstNumber.sendKeys(20);
    secondNumber.sendKeys(2);
		var select = element(by.model('operator'));
		select.$('[value="DIVISION"]').click();
    goButton.click();
    expect(latestResult.getText()).toEqual('10');
  });
 
    
  it('should mul 20 and 2', function() {
    // Fill this in.
	 firstNumber.sendKeys(20);
    secondNumber.sendKeys(2);
		var select = element(by.model('operator'));
		select.$('[value="MULTIPLICATION"]').click();
    goButton.click();
    expect(latestResult.getText()).toEqual('40');
  });

  it('should read the value from an input', function() {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });
});




/*

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
		browser.pause();
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
	}

	function add(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		operator.$('[value="ADDITION"]').click();
		goButton.click();
	}

	function sub(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		operator.$('[value="SUBTRACTION"]').click();
		goButton.click();
	}

	function mul(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		operator.$('[value="MULTIPLICATION"]').click();
		goButton.click();
	}

	function div(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		operator.$('[value="DIVISION"]').click();
		goButton.click();
	}

	function rem(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		operator.$('[value="MODULO"]').click();
		goButton.click();
	}
});
*/