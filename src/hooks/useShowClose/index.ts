import { useCallback, useState } from "react";

const useShowClose = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const show = useCallback(() => setIsShow(true), [setIsShow]);
  const close = useCallback(() => setIsShow(false), [setIsShow]);
  return {
    show,
    close,
    isHidden: !isShow,
  };
};

export default useShowClose;
