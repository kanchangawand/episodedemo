import {Routes} from '@angular/router';
import {ShowsComponent} from './shows/shows.component';




export const appRoutes : Routes =[
    {
        path:'show', component:ShowsComponent
    },
    {
        path:'', redirectTo:'show',pathMatch:'full'
    }
]
