import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent, accueilComponent} from "./accueil/accueil.component";
import {AproposComponent, aproposComponent} from "./apropos/apropos.component";
import {ContactComponent, contactComponent} from "./contact/contact.component";
import {ProjetsComponent, projetsComponent} from "./projets/projets.component";
import {CvComponent} from "./cv/cv.component";

export const routes: Routes = [
  {path : "", component : AccueilComponent},
  {path : "accueil", component : AccueilComponent},
  {path : "apropos", component : AproposComponent},
  {path : "contact", component : ContactComponent},
  {path : "projets", component : ProjetsComponent},
  {path : "cv", component : CvComponent},
];
