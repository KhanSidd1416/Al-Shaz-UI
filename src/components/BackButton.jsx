import { ca } from "../utils/ca";
import SingleArrow from '../assets/SingleArrow.png'

export const BackButton = ({isCart, onClick, disabled}) => {
  return (
    <div className="flex items-center gap-1 text-white/80 text-lg font-medium">
    <button
      type="button"
      className={ca(
        "bg-wab-stroke-160 disabled:opacity-50 disabled:cursor-default border border-black/30 drop-shadow-lidoGray inline-flex justify-center items-center rounded-full",
        isCart ? "size-5" : "size-[1.75rem]"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {isCart ? <span className="text-white/50 text-xs">{isCart}</span> : <img src={SingleArrow} alt="<" className="h-3" /> }
      
    </button>
    {!isCart && "Back"}
    </div>
  );
};
