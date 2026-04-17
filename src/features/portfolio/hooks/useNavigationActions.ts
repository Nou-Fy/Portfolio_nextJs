"use client";

import { useRouter } from "next/navigation";

export const useNavigationActions = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  // On retourne un objet contenant nos fonctions
  return {
    goToHome,
  };
};
