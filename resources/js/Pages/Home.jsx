import { Head, Link, usePage} from "@inertiajs/react";
import Layout from "../Layouts/Layout"
import {useRoute} from '../../../vendor/tightenco/ziggy'
import { useState } from "react";

function Home({ posts }) {
    const route = useRoute()
    const {flash} = usePage().props
    const [flashMsg, setFlashMsg] = useState(flash.message)
    const [flashSuccesMsg, setFlashSuccesMsg] = useState(flash.success)
    const {component} = usePage()
    setTimeout(() => {
        setFlashMsg(null)
        setFlashSuccesMsg(null)
    }, 2000);
    return <>
    {console.log(flash)}
    <Head title={component} />
        <h1 className="title">Liste des postes</h1>
        {flashSuccesMsg && (<div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">{flashSuccesMsg}</div>)}

        {flash.success && (<div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">{flash.success}</div>)}

        <div>
            {posts.data.map(post => (
                <div key={post.id} className="p-4 border-b">
                    <div className="text-sm text-slate-600">
                        <span>Post at : </span>
                        <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                    </div>
                    <p className="font-medium">{post.body}</p>

                    {/* <Link href={`/posts/${post.id}`} className="text-link">Read more...</Link> */}
                    <Link href={route('posts.show', post)} className="text-link">Read more...</Link>
                </div>
            ))}
        </div>

        {/* pagination */}
        <div className="py-12 px-4">
            {posts.links.map((link) =>
                link.url ? (
                    <Link
                        key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""
                            }`}
                    />
                ) : (
                    <span
                        key={link.label}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="p-1 mx-1 text-slate-300"
                    ></span>
                )
            )}
        </div>
    </>
}

export default Home;