import Header from "@/components/share/Header";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];

  return (
    <Header title={transformation.title} subTitle={transformation.subTitle} />
  );
};

export default AddTransformationTypePage;
