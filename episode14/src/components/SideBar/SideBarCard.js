const SideBarCard = (props) => {
  const { icon, label, heading } = props;
  return (
    <div>
       {heading && <p className="pt-4 font-bold">{heading}</p>}
      <ul className="flex items-center hover:bg-gray-100 pl-[12px] py-2 w-full mt-3 rounded-xl">
        <li className="w-[20px] mr-7">{icon}</li>
        <li className="w-[80%]">
          <h2 className="w-full">{label}</h2>
        </li>
      </ul>
    </div>
  );
};
export default SideBarCard;
