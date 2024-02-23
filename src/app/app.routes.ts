import { RouterModule, Routes } from '@angular/router';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent
    }, 
    {
        path: 'questionaire',
        component: QuestionaireComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}