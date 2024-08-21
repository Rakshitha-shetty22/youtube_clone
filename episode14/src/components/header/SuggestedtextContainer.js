import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const SuggestedtextContainer = (props) => {
  const {data, click} = props;
  return (
    <div className='bg-white flex px-4 py-3 hover:bg-gray-200' onClick={click}>
        <SearchSharpIcon className="mr-4"/>
        <p>{data}</p>
    </div>
  )
}

export default SuggestedtextContainer;
