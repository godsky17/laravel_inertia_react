import { Head, useForm } from "@inertiajs/react"

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        body: ""
    })

    function submit(e) {
        e.preventDefault()
        post('/posts')
    }

    return (
        <>
            <Head>
                <title>Create</title>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the CREATE description"
                />
            </Head>
            <h1 className="title">Create a new post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        name="body"
                        id=""
                        rows={10} v
                        alue={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && '!ring-red-500'}
                    >

                    </textarea>
                    {errors.body && <p className="error">{errors.body}</p>}
                    <button
                        className="primary-btn mt-4"
                        disabled={processing}
                    >
                        Create post
                    </button>
                </form>
            </div>
        </>
    )
}