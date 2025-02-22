import { Routes } from "@angular/router"



export const pageRoute:Routes = [
    {
        path:'',
        pathMatch:"full",
        redirectTo:'login'
    },
    
    {
        path:'login',
        loadComponent:()=>import('./login/login.component').then(m => m.LoginComponent)
    },

    {
        path:'rejster',
         loadComponent:()=> import('./rejester/rejester.component').then(m=>m.RejesterComponent)
    }

]

