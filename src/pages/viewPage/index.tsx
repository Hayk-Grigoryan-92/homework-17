import { useSelector } from "react-redux";
import "./style.scss";
import { IinitialState } from "../../store/reducers/tittleSlice";
import { useEffect } from "react";
import { PageApply } from "../formPage/pageApply";

export const ViewPage = () => {
  const pageIsView = useSelector((state: IinitialState) => state.isView);

  useEffect(() => {
    console.log(pageIsView);
  }, []);

  return (
    <div className="viewPage">
      {pageIsView ? <PageApply view="fullView" /> : null}
    </div>
  );
};
