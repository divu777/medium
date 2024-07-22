const Label = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center h-full  justify-center px-10 py-auto">
      <div className="flex items-start flex-col gap-1 ">
        <h2 className="text-2xl  font-bold max-w-xl">
          "The customer service I recieved was exceptional. The support team
          went above and beyond to address my concers."
        </h2>
        <h3 className="text-lg font-semibold">Jules Winnfield</h3>
        <p className=" text-gray-500">CEO, Acme Inc</p>
      </div>
    </div>
  );
};

export default Label;
