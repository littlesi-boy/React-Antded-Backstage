import Layouts from './Layout';
import LoginForm from './login'

export default[
    {path:'/',name:'LoginForm',component:LoginForm,auth: true},
    {path:'/detail',name:'Layouts',component:Layouts}
]