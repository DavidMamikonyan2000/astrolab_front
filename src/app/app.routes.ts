import { Routes } from "@angular/router";
import { PatientComponent } from "./patient/patient.component";
import { AppComponent } from "./app.component";

export const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "patient", component: PatientComponent },
];
