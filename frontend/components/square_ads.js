import classNames from "classnames";

export default function SquareAds({ adsImage, mb='mb-1'}) {
    return (
        <div className={classNames("min-w-300px max-w-300px min-h-250px max-h-250px bg-gray-300 cursor-pointer", mb)}>
            <img
                alt="recent-article-img"
                width="100%"
                height="100%"
                src={adsImage}
            />
        </div>
    )
}
