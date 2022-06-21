import { Routes } from "@angular/router";
import { ItemsListResolverService } from "src/app/shared/items-list-resolver.service";
import { NotFoundErrorComponent } from "../errors/not-found-error/not-found-error.component";
import { LoginComponent } from "./login/login.component";
import UserProfileRouteActivator from "./profile-route-activator.service";
import { ProfileComponent } from "./profile/profile.component";

export const userRoutes:Routes = [
    { path: '404', component: NotFoundErrorComponent },
    { 
        path: 'profile', 
        component: ProfileComponent
    },
    { 
        path: 'profile/login', 
        component: LoginComponent
    },
    { 
        path: 'profile/new', 
        component: ProfileComponent, 
        canDeactivate: ['canDeactivateCreateEvent'] 
    },
    { path: 'profile/edit', component: ProfileComponent,  resolve: {trucks: ItemsListResolverService} },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [UserProfileRouteActivator] },
    { path: '', redirectTo: '/profile', pathMatch:'full' }
]
