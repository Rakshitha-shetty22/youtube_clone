const Buttons = (props) => {
  const { data } = props;
  const { title } = data.snippet;
  return (
    <div className="px-4 py-2 mr-4 mt-4 bg-gray-100 rounded-md hover:bg-gray-200 whitespace-nowrap">
      <button>{title}</button>
    </div>
  );
};
export default Buttons;

// whitespace-nowrap: This CSS class ensures that the text inside the button does not break into multiple lines unless it's necessary. If the content is long enough, it will extend the button width rather than wrapping the text onto the next line.
