import { useForm } from "@inertiajs/react"
import {useRoute} from '../../../vendor/tightenco/ziggy'

export default function show({ post }) {
    const route = useRoute()
    const {delete: destroy} = useForm()
    function submit(e)
    {
        e.preventDefault()
        // use manual method
        // destroy(`/posts/${post.id}`)
        // use ziggi method
        destroy(route('posts.destroy', post))
    }
    return (
        <>
            <h1 className="title">{post.body}</h1>
            <div className="gap-2 ml-5">
                <form onSubmit={submit}>
                    <button className="bg-red-500 rounded-md px-4 py-1 text-sm text-white">Delete</button>
                </form>
            </div>
        </>
    )
}