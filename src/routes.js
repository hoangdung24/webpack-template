import { lazy } from "react";
import {} from './views/about/About';
import {} from './views/blog/Blog';
const Author = lazy(() => import('./views/author/Author.js'));

const Home 

const routes = [
    { path: '/home/', exact: true, name: "Home", component: Home },
    { path: '/blog/:slug/', exact: true, name: "Single Post", component: Blog },
    { path: '/about', exact: true, name: "About", component: About },
    { path: '/', exact: false, name: "Homepage", component: About}
]

export default routes