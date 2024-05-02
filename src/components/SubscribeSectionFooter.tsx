import { FormEvent, useState } from "react";
import { isValidEmail } from "../utils/validation";
import { toast } from "react-toastify";

const SubscribeSectionFooter = () => {
  const [email, setEmail] = useState("");
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValidEmail(email)) toast.success("Thank you for subscribing");
  };
  return (
    <div className="w-full px-[5vw] xl:pe-[15vw]">
      <p className="xl:pb-[3vh] font-RedHatDisplay-Bold text-[1vw]">
        STAY UP TO DATE
      </p>
      <form
        onSubmit={handleOnSubmit}
        className="relative flex pt-[5px] xl:pt-0 xl:min-h-[50px] w-full items-center border-none"
      >
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Sign up to our newsletter today"
          className="w-full border-b-[1px] border-b-black bg-transparent pb-[5px] text-[1.5vw] text-black placeholder-[#8d8a8a90] outline-none placeholder:text-[1.5vw] 2xl:min-h-[80px]"
        />
      </form>

      {email !== "" && !isValidEmail(email) && (
        <span className="text-[0.8vw] text-red-400">Invalid Email</span>
      )}
    </div>
  );
};

export default SubscribeSectionFooter;
