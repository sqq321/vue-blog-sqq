import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import ListBlog from './components/ListBlogs'
import SingleBlog from './components/SingleBlog'
export default [
    { path: "/", component: ShowBlogs },
    { path: "/add", component: AddBlog },
    { path: "/list", component: ListBlog },
    { path: "/blog/:id", component: SingleBlog }
]
