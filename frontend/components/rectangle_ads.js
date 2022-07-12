import classNames from "classnames";

export default function RectangleAds({ adsImage, mb='mb-1' }) {
    return (
        <div className={classNames("hidden md:block min-w-300px max-w-300px min-h-16 max-h-16 bg-gray-300 cursor-pointer", mb)}>
            <img
                alt="ads-img"
                width="100%"
                height="100%"
                src={adsImage}
            />
        </div>
    )
}
