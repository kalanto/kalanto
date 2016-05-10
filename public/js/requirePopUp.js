var text = element(by.binding('customer.firstname', 'customer.lastname', 'customer.address', 'customer.city', 'customer.state', 'customer.zipCode', 'customer.phone.areaCode', 'customer.phone.ANI'));
var valid = element(by.binding('myForm.input.$valid'));
var input = element(by.model('customer.firstname', 'customer.lastname', 'customer.address', 'customer.city', 'customer.state', 'customer.zipCode', 'customer.phone.areaCode', 'customer.phone.ANI', 'customer.email', 'customer.debt', 'customer.payDate'));

it('should initialize to model', function() {
  expect(text.getText()).toContain('guest');
  expect(valid.getText()).toContain('true');
});

it('should be invalid if empty', function() {
  input.clear();
  input.sendKeys('');

  expect(text.getText()).toEqual('text =');
  expect(valid.getText()).toContain('false');
});

it('should be invalid if multi word', function() {
  input.clear();
  input.sendKeys('hello world');

  expect(valid.getText()).toContain('false');
});
