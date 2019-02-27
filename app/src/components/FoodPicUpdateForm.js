import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingPics from './LoadingPics';

import styled from 'styled-components';

const MainWrapper = styled.div`
background-image: url("https://agc.creativelive.com/agc/courses/5138-1.jpg");
background-position: center center;
background-attachment: fixed;
background-size: cover;
padding-top: 75px;
padding-bottom: 100px; 

.formWrapper {
  width: 90%;
  max-width: 800px;
  background-color: rgba(224,224,224, .9);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  border-radius: 10px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

.contact {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
}

@media (max-width: 500px) {
  .contact {
    width: 250px;
  }
}

.none {
  display: none;
}

.divInput {
  margin-bottom: 10px;
}

.input {
  width: 100%;
  border-radius: 5px;
  height: 2em;
}

.red {
  color: red;
  font-size: 8px;
}

.alignButton {
  align-self: center;
}

.button {
  font-size: 20px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid white;
  margin: 20px;
  padding: 10px;
  cursor: pointer;

    :hover {
      background-color: transparent;
    }
}

.errorMsg {
  margin: 5px 0px;
  background-color: rgba(255, 0, 0, .6);
  border-radius: 3px;
  line-height: 1.5;
}

.fail {
  background-color: rgba(255, 0, 0, .6);
  border-radius: 3px;
  text-align: center;
  padding: 10px;
}

.success {
  background-color: rgba(102, 255, 102, .6);
  border-radius: 3px;
  text-align: center;
  padding: 10px;
}

fieldset {
  background-color: white;
  border: 0px;
  border-radius: 3px;
  box-shadow: inset 2px 2px 0px 0 rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;

    div {
      display: flex;
      align-items: center;

      input[type=radio] {
        border: 0px;
        height: 3em;
        width: 30px;
        margin-right: 15px;
      }
    }
}
`;

const FoodPicUpdateForm = (props) => {
  const imageAPI = 'https://go-personal-chef.herokuapp.com/images/'
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itemType, setItemType] = useRadioButtons("item_type");
  const [imgOrientation, setImgOrientation] = useRadioButtons("orientation");
  const [isRecommended, setIsRecommended] = useRadioButtons("recommended");
  const [ fields, setFields ] = useState({})
  const [ errors, setErrors ] = useState({})
  const [ submitted, setSubmitted ] = useState(1)


  const fetchData = async () => {
    setIsLoading(true);
    const result = await axios(imageAPI);
    const findImg = result.data.find(i => i.id == props.match.params.id)
    setData(findImg);
    setFields(findImg)
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [setData]);

  const validateForm = () => {
    setFields(Object.assign(data, fields, itemType, imgOrientation, isRecommended))
    let errors = {};
    let formIsValid = true;

    if (!fields["title"]) {
      formIsValid = false;
      errors["title"] = "\xa0\xa0* Title is required";
    }

    if (!fields["img_url"]) {
      formIsValid = false;
      errors["img_url"] = "\xa0\xa0* Image URL is required";
    }

    if (!fields["item_type"]) {
      formIsValid = false;
      errors["item_type"] = "\xa0\xa0* This is a required field";
    }

    if (!fields["orientation"]) {
      formIsValid = false;
      errors["orientation"] = "\xa0\xa0* This is a required field.";
    }

    if (!fields["recommended"]) {
      formIsValid = false;
      errors["recommended"] = "\xa0\xa0* This is a required field.";
    }

    setErrors(errors)
    return formIsValid
  }

  const handleChange = (e) => {
    let input = fields;
    input[e.target.name] = e.target.value;

    setFields(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return setSubmitted(3)
    } else {
      axios.put(imageAPI + data.id, fields)
      setSubmitted(2)
      setTimeout(() => {
        setSubmitted(1);
      }, 3000)

    }
  }

  return (
    isLoading ? <LoadingPics /> :

    <MainWrapper>
      <div className="formWrapper">
        <div>
          <form onSubmit={handleSubmit} className="contact">

            <div className="divInput">
              <label>Title</label> <br/>
              <div className="red">* required</div>
              <input className="input" defaultValue={data.title} type="text" name="title" onChange={handleChange}/>
              <div className="errorMsg">{errors.title}</div>
            </div>

            <div className="divInput">
              <label>Image URL</label> <br/>
              <div className="red">* required</div>
              <input className="input" defaultValue={data.img_url} type="text" name="img_url" onChange={handleChange}/>
              <div className="errorMsg">{errors.img_url}</div>
            </div>

            <div className="divInput">
              <label>Item Type</label> <br/>
              <div className="red">* required</div>
              <fieldset>
                <div>
                  <input
                    value="entree"
                    // checked={itemType === "entree"}
                    {...setItemType}
                    defaultChecked={data.item_type === "entree" ? true : null}
                  />
                  <div>Entrèe</div>
                </div>
                <div>
                  <input
                    value="appetizer"
                    // checked={itemType === "appetizer"}
                    {...setItemType}
                    defaultChecked={data.item_type === "appetizer" ? true : null}
                  />
                  <div>Appetizer</div>
                </div>
                <div>
                  <input
                    value="drink"
                    // checked={itemType === "drink"}
                    {...setItemType}
                    defaultChecked={data.item_type === "drink" ? true : null}
                  />
                  <div>Drink</div>
                </div>
                <div>
                  <input
                    value="soup/salad"
                    // checked={itemType === "soup/salad"}
                    {...setItemType}
                    defaultChecked={data.item_type === "soup/salad" ? true : null}
                  />
                  <div>Soup/Salad</div>
                </div>
                <div>
                  <input
                    value="dessert"
                    // checked={itemType === "dessert"}
                    {...setItemType}
                    defaultChecked={data.item_type === "dessert" ? true : null}
                  />
                  <div>Dessert</div>
                </div>
              </fieldset>
              <div className="errorMsg">{errors.item_type}</div>
            </div>

            <div className="divInput">
              <label>Orientation</label> <br/>
              <div className="red">* required</div>
              <fieldset>
                <div>
                  <input
                    value="portrait"
                    // checked={imgOrientation === "portrait"}
                    {...setImgOrientation}
                    defaultChecked={data.orientation === "portrait" ? true : null}
                    />
                  <div>Portrait</div>
                </div>
                <div>
                  <input
                    value="landscape"
                    // checked={imgOrientation === "landscape"}
                    {...setImgOrientation}
                    defaultChecked={data.orientation === "landscape" ? true : null}
                    />
                  <div>Landscape</div>
                </div>
              </fieldset>
              <div className="errorMsg">{errors.orientation}</div>
            </div>

            <div className="divInput">
              <label>Recommended</label> <br/>
              <div className="red">* required</div>
              <fieldset>
                <div>
                  <input
                    value="yes"
                    // checked={isRecommended === "yes"}
                    {...setIsRecommended}
                    defaultChecked={data.recommended === "yes" ? true : null}
                    />
                  <div>Yes</div>
                </div>
                <div>
                  <input
                    value="no"
                    // checked={isRecommended === "no"}
                    {...setIsRecommended}
                    defaultChecked={data.recommended === "no" ? true : null}
                    />
                  <div>No</div>
                </div>
              </fieldset>
              <div className="errorMsg">{errors.recommended}</div>
            </div>

            {submitted === 3 ? <div className="fail">Please Resolve the Form Errors</div> : 
            submitted === 2 ? <div className="success">Form Submitted Successfully!!!</div> : 
            null}
            <div className="alignButton">
              <button className="button" type="submit">Submit</button>
            </div>
          </form>

        </div>
      </div>

    </MainWrapper>
  )
}
export default FoodPicUpdateForm;


const useRadioButtons = (name) => {
  const [value, setState] = useState({});

  const handleChange = e => {
    setState({[name]: e.target.value});
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange,
  };
  return [value, inputProps];
}
