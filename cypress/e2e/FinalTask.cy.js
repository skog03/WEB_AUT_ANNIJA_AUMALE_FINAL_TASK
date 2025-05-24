import { HomePage } from "../pageObjects.js/HomePage";

describe('template spec', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('', () => {
    // b. Input all the necessary information in the text fields, buttons, etc, where it is not
    // stated otherwise.
    HomePage.firstNameField.type("John");
    HomePage.lastNameField.type("Doe");
    HomePage.emailField.type("johndoe@gmail.com");
    HomePage.maleChk.check({force: true});
    HomePage.phoneNumber.type("1234567891");
    // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
    HomePage.DOB.click();
    var year = "1930";
    HomePage.yearSelect.select(year);
    var month = 1; //(0-11) january = 0
    HomePage.monthSelect.select(month);
    var day = 28;
    HomePage.selectDay(day).click();

    // d. Set Subjects to Economics.
    HomePage.subjects.type("eco{enter}");
    // e. Set Hobbies to Music.
    HomePage.musicChk.click({force: true});
    // f. Upload an image of your choice.
    HomePage.fileInput.selectFile('cypress/files/Gegy hous.jpg');
    // i. Create folder “files” and put the image there
    // ii. Might come in handy: https://docs.cypress.io/api/commands/selectfile
    
    //address
    HomePage.addressField.type("Hollywood street 1");
    // g. Set State to NCR.
    HomePage.stateSelect.type("NCR{enter}");
    // h. Set City to Delhi.
    HomePage.citySelect.type("Delhi{enter}");
    // i. Click Submit.
    HomePage.submitBtn.click({force: true});
    // j. Validate that each Labeled row contains the correct information.
    HomePage.endTable.should('contain.text','John Doe');
    HomePage.endTable.should('contain.text','johndoe@gmail.com');
    HomePage.endTable.should('contain.text','1234567891');
    HomePage.endTable.should('contain.text','28 February,1930');
    HomePage.endTable.should('contain.text','Economics');
    HomePage.endTable.should('contain.text','Music');
    HomePage.endTable.should('contain.text','Gegy hous.jpg');
    HomePage.endTable.should('contain.text','Hollywood street 1');
    HomePage.endTable.should('contain.text','NCR Delhi');
  })
})