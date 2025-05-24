import { BasePage } from "./BasePage";


export class HomePage extends BasePage {
  static get url() {
    return "https://demoqa.com/automation-practice-form";
  }

  static get firstNameField() {
    return cy.get("#firstName");
  }

  static get lastNameField() {
    return cy.get("#lastName");
  }

  static get emailField() {
    return cy.get("#userEmail");
  }

  static get maleChk() {
    return cy.get("#gender-radio-1");
  }
  
  static get phoneNumber() {
    return cy.get("#userNumber");
  }
  static get DOB() {
    return cy.get("#dateOfBirthInput");
  }
  
  static get yearSelect() {
    return cy.get("[class='react-datepicker__year-select']");
  }
  
  static get monthSelect() {
    return cy.get("[class='react-datepicker__month-select']");
  }
 
  
  static selectDay(day) {
    return cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month');
  }

  
  static get subjects() {
    return cy.get("#subjectsContainer");
  }

  static get musicChk() {
    return cy.get("#hobbies-checkbox-3");
  }

  static get fileInput() {
    return cy.get("#uploadPicture");
  }
  
  static get addressField() {
    return cy.get("#currentAddress");
  }
  
  static get stateSelect() {
    return cy.get("#state");
  }

  static get citySelect() {
    return cy.get("#city");
  }

  static get submitBtn() {
    return cy.get("#submit");
  }


  //----------------------------------------------------------------

  static get endTable(){
    return cy.get("[class='table-responsive']");
  }
}