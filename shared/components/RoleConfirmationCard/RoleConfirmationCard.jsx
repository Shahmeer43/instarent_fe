import { routesConstants } from "../../constants";
import CustomLinkButton from "../CustomLinkButton/CustomLinkButton";

const { ROLE_SELECTION } = routesConstants;

const RoleConfirmationCard = (props) => {
  const { title, content } = props;

  return (
    <div className="flex flex-col gap-3 justify-center items-center flex-grow max-w-[440px] px-2 py-4 bg-white rounded-lg shadow-xl/30">
      <h3 className="text-lg font-semibold text-center">
        You’re registering as a {title}!
      </h3>

      <p className="text-center">
        You can change this role anytime from Settings.
      </p>

      <section>
        <h4>As a {title}, you can:</h4>
        {content}
      </section>

      <nav className="flex flex-col gap-2">
        <CustomLinkButton
          color="#e4eaf1"
          fontColor="black"
          path={"/dashboard"}
          text="Continue to Dashboard"
          style="font-normal border border-indigo-200"
        />
        <CustomLinkButton
          color="#e4eaf1"
          fontColor="black"
          text="Change role"
          path={ROLE_SELECTION}
          style="font-normal border border-indigo-200"
        />
      </nav>
    </div>
  );
};
export default RoleConfirmationCard;
