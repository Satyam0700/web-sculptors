interface Props {
  subTitle: string;
  title: string;
}

const Heading = ({ subTitle, title }: Props) => {
  return (
    <div className="flex flex-col gap-5 mt-28 items-center text-center justify-center">
      <h4 className="text-lg text-red-500 uppercase font-semibold">{subTitle}</h4>
      <h2 className="text-xl sm:text-3xl uppercase font-extrabold">{title}</h2>
    </div>
  );
};

export default Heading;
