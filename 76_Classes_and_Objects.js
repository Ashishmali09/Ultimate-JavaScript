class RailwayForm {
  submit() {
    alert(
      this.name + ": Your Form is submitted for train number " + this.trainNo
    );
  }
  cancel() {
    alert(
      this.name + ": This form is cancelled for train number " + this.trainNo
    );
  }
  fill(givenName, trainNo) {
    this.name = givenName;
    this.trainNo = trainNo;
  }
}

//Create a form for Ash
let AshForm = new RailwayForm();
//Fill the form of Ash's details
AshForm.fill("Ash", 11029);

//Create a forms for Ash
let TigerForm = new RailwayForm();
let TigerForm2 = new RailwayForm();
//Fill the forms of Tiger's details
TigerForm.fill("Tiger", 11028);
TigerForm2.fill("Tiger", 11030);

AshForm.submit();
TigerForm.submit();
TigerForm2.submit();
TigerForm.cancel();
