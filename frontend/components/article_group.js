export default function ArticleGroup({ children, groupCategory }) {
    return (
        <div className="article-group pl-5 pr-5 md:w-750px lg:w-970px xl:w-1170px m-auto mt-10">
            <div className="min-w-768px drop-shadow-lg bg-white articles flex flex-col">
                <span className="
                flex
                article-label
              bg-red-500 w-fit pl-5 pr-5 pt-2.5 pb-2.5 text-white">
                    <h3 className="text-white uppercase text-lg font-bold">
                        {groupCategory}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </span>
                <hr className="divide-y-[3px] border-red-500" />
                <div className="articles mt-5 mb-5 ml-9 mr-9">
                    {children}
                </div>
            </div>
        </div>
    )
}