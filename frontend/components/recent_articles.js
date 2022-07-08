import classNames from "classnames";
import Link from "next/link";

export default function RecentArticles({ articles }) {

    articles = articles.slice(0, 4)

    return (
        <div className="hidden md:flex md:w-750px lg:w-970px xl:w-1170px m-auto pl-5 pr-5 mt-5">
            <div className="
             new-article flex flex-wrap ">
                {
                    articles.map((article, idx) => {
                        var isEven = idx % 2 == 0;
                        var width = classNames({'md:min-w-180px lg:min-w-250px md:max-w-3/5': isEven}, {'md:min-w-160px lg:min-w-180px md:max-w-2/5': !isEven} )
                        return (
                            <Link href={'/article/we-love-pizza'}>
                                <div className={classNames(width, {'new-article-content basis-3/5': isEven}, {'new-article-content basis-2/5': !isEven})}>
                                    <div className={classNames('bg-cover bg-center h-64 object-center bg-preview-image', width)}>
                                        <div className={classNames('group layer-overlay w-full h-full flex bg-black-opt-50 cursor-pointer relative max-h-64', width)}>
                                            <div className="article-info w-full absolute bottom-0 p-5">
                                                <h3 className="title text-2xl transition duration-500 ease-in-out 
                                                               font-semibold pb-3 opacity-100 text-white translate-y-16 
                                                               group-hover:translate-y-0 group-hover:opacity-100">{article.attributes.title}</h3>
                                                <h6 className="group-hover:block transition-all duration-500 ease-in-out 
                                                             text-white text-base font-hanuman translate-y-16 opacity-0 
                                                               group-hover:translate-y-0 group-hover:opacity-100">
                                                    មកលើកនេះទ្រង់ទ្រាយយក្សហ្មង! មិនត្រឹម​តែ Comeback ទេ មាន​ World Tour ទៀត
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="h-auto ml-2 float-right md:grid grid-rows-2 gap-2 hidden">
                <div className="min-w-300px max-w-300px min-h-250px max-h-250px w-full h-auto bg-gray-300 cursor-pointer">

                </div>
                <div className="min-w-300px max-w-300px min-h-250px max-h-250px bg-gray-300 cursor-pointer">
                    <img width="100%" height="100%" src="https://ads.sabay.com/images/4fdab1184de785aefd5edac3aedef100.jpg"/>
                </div>
            </div>
        </div>
    );
}