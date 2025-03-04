import { Head, Link, useForm, usePage } from "@inertiajs/react"
import {useRoute} from '../../../vendor/tightenco/ziggy'

export default function show({ post }) {
    const route = useRoute()
    const {delete: destroy} = useForm()
    const {component} = usePage()
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
            <Head title={component} />
            <h1 className="title">{post.body}</h1>
            <div className="flex item-center justify-end gap-2">
                <form onSubmit={submit}>
                    <button className="bg-red-500 rounded-md px-4 py-1 text-sm text-white">Delete</button>
                </form>
                {/* <Link href={`/posts/${post.id}/edit`} className="bg-green-500 rounded-md px-4 py-1 text-sm text-white">Update</Link> */}

                <Link href={route('posts.edit', post)} className="bg-green-500 rounded-md px-4 py-1 text-sm text-white">Update</Link>
            </div>
        </>
    )
}