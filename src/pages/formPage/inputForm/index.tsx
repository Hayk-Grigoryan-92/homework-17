import { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { addTittle } from "../../../store/reducers/tittleSlice";

export const InputForm = () => {
  interface IinputData {
    tittle?: string,
    description?: string,
    tittleColor?: string ,
    descriptionColor?: string,
    viewPageBackground?: string,
    tittleComponentBackground?: string,
    tittleComponentBorderRadius?: string,
    tittleRange10_45?: string,
    descriptionRange10_20?: string,
  }

  const [inputData, setInputData] = useState<IinputData>({
    tittle: "",
    description: "",
    tittleColor: "",
    descriptionColor: "",
    viewPageBackground: "",
    tittleComponentBackground: "",
    tittleComponentBorderRadius: "",
    tittleRange10_45: "",
    descriptionRange10_20: "",
  });

  const dispatch = useDispatch();

  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleClick() {
    dispatch(addTittle(inputData))
    console.log(inputData);
    
      setInputData({
        tittle: "",
        description: "",
        tittleColor: "",
        descriptionColor: '',
        viewPageBackground: '',
        tittleComponentBackground: '',
        tittleComponentBorderRadius: '',
        tittleRange10_45: '',
        descriptionRange10_20: '',
      });
    }



  return (
    <div className="inputFormContainer">
      <div className="input">
        <label>
          <input
            type="text"
            name="tittle"
            placeholder="Tittle"
            value={inputData.tittle}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input">
        <label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={inputData.description}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="inputColor">
        <label>
          Color for Tittle
          <input
            type="color"
            name="tittleColor"
            value={inputData.tittleColor}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="inputColor">
        <label>
          Color for Description
          <input
            type="color"
            name="descriptionColor"
            value={inputData.descriptionColor}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="inputColor">
        <label>
          Color for main page background
          <input
            type="color"
            name="viewPageBackground"
            value={inputData.viewPageBackground}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="inputColor">
        <label>
          Color View Page background
          <input
            type="color"
            name="tittleComponentBackground"
            value={inputData.tittleComponentBackground}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="inputColor">
        <label>
          View Page border-radius
          <input
            type="range"
            name="tittleComponentBorderRadius"
            min="1"
            max="45"
            step="5"
            value={inputData.tittleComponentBorderRadius}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="inputColor">
        <label>
          Range from 10-45 for Tittle
          <input
            type="range"
            name="tittleRange10_45"
            min="10"
            max="45"
            step="1"
            value={inputData.tittleRange10_45}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="inputColor">
        <label>
          Range from 10-20 for Description
          <input
            type="range"
            name="descriptionRange10_20"
            min="10"
            max="20"
            step="1"
            value={inputData.descriptionRange10_20}
            onChange={handleChange}
          />
        </label>
      </div>

      <button onClick={handleClick}>Add Exercise</button>
    </div>
  );
};
