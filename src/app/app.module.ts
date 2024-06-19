import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { BindingComponent } from './components/demos/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './components/demos/pipe/pipe.component';
import { FormatterPipe } from './pipes/formatter.pipe';
import { ReductionPipe } from './pipes/reduction.pipe';
import { ChronometreComponent } from './components/exos/chronometre/chronometre.component';
import { DirectivesComponent } from './components/demos/directives/directives.component';
import { SurbrillanceDirective } from './directives/surbrillance.directive';
import { ListeProduitsComponent } from './components/exos/list-produits/list-produits.component';
import { ParentComponent } from './components/demos/inputOutput/parent/parent.component';
import { EnfantComponent } from './components/demos/inputOutput/enfant/enfant.component';
import { AffichageListeComponent } from './components/exos/shoppingList/affichage-liste/affichage-liste.component';
import { AjoutArticleComponent } from './components/exos/shoppingList/ajout-article/ajout-article.component';
import { ShoppingComponent } from './components/exos/shoppingList/shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    NavBarComponent,
    PipeComponent,
    FormatterPipe,
    ReductionPipe,
    ChronometreComponent,
    DirectivesComponent,
    SurbrillanceDirective,
    ListeProduitsComponent,
    ParentComponent,
    EnfantComponent,
    AffichageListeComponent,
    AjoutArticleComponent,
    ShoppingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }