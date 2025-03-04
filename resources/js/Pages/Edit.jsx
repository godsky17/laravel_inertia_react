import { Head, useForm, usePage } from "@inertiajs/react"
import { route, useRoute } from "../../../vendor/tightenco/ziggy/src/js"

export default function Edit({post}) {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body
    })
    const route = useRoute()

    function submit(e) {
        e.preventDefault()
       // put(`/posts/${post.id}`)
       put(route('posts.update', post))
    }

    return (
        <>
            <Head>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the CREATE description"
                />
            </Head>
            <h1 className="title">Update post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        name="body"
                        id=""
                        rows={10} 
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && '!ring-red-500'}
                    >

                    </textarea>
                    {errors.body && <p className="error">{errors.body}</p>}
                    <button
                        className="primary-btn mt-4"
                        disabled={processing}
                    >
                        Edit post
                    </button>
                </form>
            </div>
        </>
    )
}