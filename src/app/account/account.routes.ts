import { Routes } from "@angular/router";
import { NotFoundErrorComponent } from "../errors/not-found-error/not-found-error.component";
import { LoginComponent } from "./login/login.component";

export const accountRoutes:Routes = [
    { path: '404', component: NotFoundErrorComponent },
    { 
        path: 'account', 
        component: LoginComponent
    },
    { 
        path: 'account/login', 
        component: LoginComponent
    }
    // ,
    // { path: '', redirectTo: '/account', pathMatch:'full' }
]
