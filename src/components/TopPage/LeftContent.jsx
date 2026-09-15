import { MoveUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="mt-6 h-[85vh] flex flex-col justify-center gap-5 w-[25%] pr-6">
      <h1 className="text-4xl font-bold">
        Prospective <br />
        customer <br /> segmentation
          </h1>
          <p className="text-mauve-700 text-lg">Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
      <MoveUpRight className="mt-15" size={45} color="#000" />
    </div>
  );
};

export default LeftContent;
