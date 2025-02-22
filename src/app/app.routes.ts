import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
    {path:"",
        loadChildren: ()=> import('./page/page-route').then( m => m.pageRoute )
      
    },
];
