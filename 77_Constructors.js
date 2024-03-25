class RailwayForm {
  constructor(givenName, trainNo) {
    console.log(`Constructor called...${givenName} ${trainNo}`);
    this.name = givenName;
    this.trainNo = trainNo;
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
  }
}

//Create and fill the form for Ash
let AshForm = new RailwayForm("Ash", 11029);
//No need to Fill the form of Ash's details
// AshForm.fill();

//Create and fill the forms for Tiger
let TigerForm = new RailwayForm("Tiger", 11028);
let TigerForm2 = new RailwayForm("Tiger", 11030);

AshForm.submit();
TigerForm.submit();
TigerForm2.submit();
TigerForm.cancel();
