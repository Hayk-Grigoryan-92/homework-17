import { useSelector } from 'react-redux'
import './style.scss'
import { IinitialState } from '../../../store/reducers/tittleSlice';

export const PageApply = (props:any) => {

    const tittleBox = useSelector((state:IinitialState)=>state.tittleInfo);
    console.log(tittleBox);
    

    return (
        <div
        className={props.view? 'fullView' :"pageApplyContainer" }
        style={{
          backgroundColor: tittleBox.viewPageBackground
            ? tittleBox.viewPageBackground
            : "",
        }}
      >
        <div
          className="pageApplyBox"
          style={{
            borderRadius: tittleBox.tittleComponentBorderRadius
              ? `${tittleBox.tittleComponentBorderRadius}px`
              : "",
            backgroundColor: tittleBox.tittleComponentBackground
              ? tittleBox.tittleComponentBackground
              : "",
          }}
        >
          {tittleBox.tittle ? (
            <h2
              style={{
                color: tittleBox.tittleColor ? tittleBox.tittleColor : "",
                fontSize: tittleBox.tittleRange10_45
                  ? `${tittleBox.descriptionRange10_20}px`
                  : "",
              }}
            >
              {tittleBox.tittle}
            </h2>
          ) : null}
          {tittleBox.description ? (
            <p
              style={{
                color: tittleBox.descriptionColor
                  ? tittleBox.descriptionColor
                  : "",
                fontSize: `${tittleBox.descriptionRange10_20}px`
                  ? `${tittleBox.descriptionRange10_20}px`
                  : "",
              }}
            >
              {tittleBox.description}
            </p>
          ) : null}
        </div>
      </div>
    )
}