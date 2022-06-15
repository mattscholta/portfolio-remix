import { useNavigate } from "@remix-run/react";
import { BASE_URL } from "~/config/settings.server";

export const usePageTransition = () => {
  // Hooks
  const navigate = useNavigate();

  // Setup
  const isBrowser = typeof window !== "undefined";
  const isSupported = isBrowser && typeof (document as any).createDocumentTransition === 'function' // prettier-ignore

  console.log(` 💬 ~ isSupported`, isSupported);

  // Handlers
  const transition = async (path: string) => {
    alert(` 💬 ~ isSupported ${isSupported}`);

    const url = `${BASE_URL}${path}`;

    // We just have to fetch it
    await fetch(url);

    // 🔌 Short Circuit
    if (!isSupported) {
      navigate(path);
      return;
    }

    const transition = (document as any).createDocumentTransition();
    await transition.start(() => navigate(path));
  };

  return { transition };
};
