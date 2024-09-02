import './SearchInput.scss'

type SearchInputProps = {
  placeholder: string;
  value: string;
  setSearch: (search: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, setSearch }) => {
  return(
    <div className='search'>
      <input className='search__input' type="text" placeholder={placeholder} value={value} onChange={e => setSearch(e.target.value)} />
    </div>
  )
};


export default SearchInput;