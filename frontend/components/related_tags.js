import Link from "next/dist/client/link"

export default function RelatedTags() {
    return (
        <div className="related-tags">
            <div className="label font-semibold">
                Related Tags
            </div>
            <div className="post-tags flex flex-wrap space-x-1">
                <Link href={'/'}>
                    <h5 className="bg-pri-custom-red text-white py-1 px-2.5">New Articles</h5>
                </Link>
                <Link href={'/'}>
                    <h5 className="bg-pri-custom-red text-white py-1 px-2.5">New Articles</h5>
                </Link>
                <Link href={'/'}>
                    <h5 className="bg-pri-custom-red text-white py-1 px-2.5">New Articles</h5>
                </Link>
            </div>
        </div>
    )
}