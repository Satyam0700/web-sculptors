interface Props {
    styles?: string;
}

const Button = ({ styles } : Props) => {
  return (
    <button
      type="button"
      className={`py-4 font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] px-6 bg-white shadow-md`}
    >
      Get Started
    </button>
  );
};

export default Button;