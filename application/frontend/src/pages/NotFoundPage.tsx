import { useNavigate } from "@solidjs/router";
import NotFound from "../assets/NotFound.png";
import { uriHome } from "../utils/uri";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <div class="w-screen h-screen flex justify-center items-center overflow-hidden">
        <img
          class="w-1/3"
          src={NotFound}
          alt="404 Not Found"
          onClick={() => {
            navigate(uriHome());
          }}
        />
      </div>
    </>
  );
}