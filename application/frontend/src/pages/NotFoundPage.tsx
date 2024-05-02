import { useNavigate } from "@solidjs/router";
import NotFound from "../assets/NotFound.png";
import { uriHome } from "../utils/uri";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <div class="w-screen h-screen flex justify-center items-center overflow-hidden">
        <img
          src={NotFound}
          class="w-1/3"
          onClick={() => {
            navigate(uriHome());
          }}
        />
      </div>
    </>
  );
}