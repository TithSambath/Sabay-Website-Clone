export default function CategoryLayout({children}) {
    return (
        <div className="category-layout flex md:w-750px lg:w-970px xl:w-1170px m-auto justify-between space-x-3">
            {children}
        </div>
    )
}