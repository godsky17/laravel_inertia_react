import { Head, Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the default description"
                />
            </Head>
            <header>
                <nav>
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="posts/create" className="nav-link">Create</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}