import { Accounts } from "meteor/accounts-base";

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY",
  requestPermissions: {},
  extraSignupFields: [
    {
      fieldName: "name",
      fieldLabel: "First name",
      inputType: "text",
      visible: true,
      validate: function(value, errorFunction) {
        if (!value) {
          errorFunction("Please write your first name");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      fieldName: "surname",
      fieldLabel: "Last name",
      inputType: "text",
      visible: true
    },
    {
      fieldName: "gender",
      showFieldLabel: false,
      fieldLabel: "Gender",
      inputType: "radio",
      radioLayout: "vertical",
      data: [
        {
          id: 1,
          label: "Male",
          value: "M",
          checked: "checked"
        },
        {
          id: 2,
          label: "Female",
          value: "F"
        },
        {
          id: 3,
          label: "Other",
          value: "Other"
        }
      ],
      visible: true
    },
    {
      fieldName: "country",
      fieldLabel: "Country",
      inputType: "select",
      showFieldLabel: true,
      empty: "Select your country",
      data: [
        {
          id: 1,
          label: "Colombia",
          value: "Colombia"
        },
        {
          id: 2,
          label: "Spain",
          value: "Spain"
        }
      ],
      visible: true
    },
    {
      fieldName: "terms",
      fieldLabel: "I accept the terms and conditions",
      inputType: "checkbox",
      visible: true,
      saveToProfile: false,
      validate: function(value, errorFunction) {
        if (value) {
          return true;
        } else {
          errorFunction("You must accept the terms and conditions.");
          return false;
        }
      }
    }
  ]
});
