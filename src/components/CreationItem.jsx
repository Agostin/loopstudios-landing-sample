const CreationItem = (props) => {
  return (
    <div
      className={`group relative w-full mb-4 md:mb-0 overflow-hidden cursor-pointer`}
    >
      {/* Mobile image */}
      <img
        className="block w-full md:hidden"
        src={props.mobileImg}
        alt=""
        srcset=""
      />
      {/* Desktop image */}
      <img
        className="hidden w-full duration-200 md:block group-hover:scale-110"
        src={props.desktopImg}
        alt=""
        srcset=""
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70" />
      {/* Item content */}
      <h4 className="absolute uppercase left-4 bottom-4 text-white w-52 md:w-24 md:bottom-8 md:left-8 duration-200 group-hover:scale-110 group-hover:text-black group-hover:pl-4">
        {props.title}
      </h4>
    </div>
  );
};

export default CreationItem;
