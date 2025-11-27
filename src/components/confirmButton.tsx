interface Props {
  disabled?: boolean;
  onClick: () => void;
}

const ConfirmButton = ({ disabled, onClick }: Props) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`bg-[#DEE6FF] border border-zinc-500/50 p-2 px-5 rounded-xl text-[#6E43F0] font-semibold
      ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#bcc5e0] cursor-pointer"
      }`}
  >
    Confirmar
  </button>
);
export default ConfirmButton;
