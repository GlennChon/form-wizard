/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from "react";
import { FormWizard } from "react-material-formik-wizard";

import RecipeStep from "./steps/RecipeStep";
import AboutStep from "./steps/AboutStep";
import DetailStep from "./steps/DetailStep";
import DisplayStep from "./steps/DisplayStep";
import Review from "./steps/Review";

function App() {
  const steps = [
    {
      component: RecipeStep,
      title: "Recipe"
    },
    {
      component: AboutStep,
      title: "About"
    },
    {
      component: DetailStep,
      title: "Details"
    },
    {
      component: DisplayStep,
      title: "Display"
    },
    {
      component: Review,
      title: "Review"
    }
  ];

  const doSubmit = values => {
    alert("submitting: " + JSON.stringify(values));
    console.log("submitting valuess", values);
  };

  return (
    <React.Fragment>
      <main>
        <FormWizard
          displayProgress={true}
          formComponents={steps}
          doSubmit={doSubmit}
          successTitle={"Success"}
          successTitleComponent={"h1"}
          successMessage={"Your recipe has been submitted"}
          successMessageComponent={"h5"}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
