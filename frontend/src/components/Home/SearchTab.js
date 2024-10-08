
const SearchTab = ({refetch}) => {

    const handleSearch = (e) => {
        e.preventDefault()
        const form = e.target
        const searchText= form.search.value
        refetch(searchText)
    }

    return (
        <div className='w-full h-[300px] bg-purple-200 flex items-center justify-center p-3'>
            <div>
                <h1 className='text-center text-[60px] text-purple-500 mb-5'>How can we help?</h1>
                <form onSubmit={handleSearch} className="flex items-center md:flex-row flex-col">
                    <input id='search' name='search'  type="text" className='md:w-[600px] w-full py-2 rounded-l-none md:rounded-l-md px-3 outline-none' placeholder='type here...' />
                    <button type='submit' className='h-full py-2 rounded-r-none md:rounded-r-md text-white md:w-[80px] w-full bg-purple-500'>
                        Search
                    </button>
                </form>

            </div>
        </div>
    );
};

export default SearchTab;