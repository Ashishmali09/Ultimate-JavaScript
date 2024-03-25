class RailwayForm {
  constructor(givenName, trainNo, address) {
    console.log(`Constructor called...${givenName} ${trainNo} ${address}`);
    this.name = givenName;
    this.trainNo = trainNo;
    this.address = address;
  }

  preview() {
    alert(
      this.name +
        ": Your Form is for train number " +
        this.trainNo +
        " and your address is " +
        this.address
    );
  }
  submit() {
    alert(
      this.name + ": Your Form is submitted for train number " + this.trainNo
    );
  }
  cancel() {
    alert(
      this.name + ": This form is cancelled for train number " + this.trainNo
    );
    this.trainNo = 0;
  }
}

let ashForm = new RailwayForm("Ash", "11029", "990, Main Road Delhi, India");
ashForm.preview();
ashForm.submit();
ashForm.cancel();
ashForm.preview();
