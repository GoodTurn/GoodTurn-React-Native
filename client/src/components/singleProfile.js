import React from 'react';
import SingleProfileSpec from '../components/singleProfileSpec';

const SingleProfile = (props) => {

  //future state -- have the dates be stored in full conext so they can be sorted and the most recent can be pulled.
  let specs = [];
    const educ = props.profile.specs.education;
    if (educ[0] !== undefined) {
      specs.push({spec: educ[0], path: '../pics/education.png'});
    }
    const work = props.profile.specs.work;
    if (work[0] !== undefined) {
      specs.push({spec: work[0], path: '../pics/work.png'});
    }
    const relation = props.profile.specs.relation;
    if (relation[0] !== undefined) {
      specs.push({spec: relation[0], path: '../pics/relationship.png'});
    }
    const lived =props.profile.specs.lived;
    if (lived[0] !== undefined) {
      specs.push({spec: lived[0], path: '../pics/location.png'});
    }
  specs = specs.map((spec, i) => {
    return <SingleProfileSpec
      spec={spec.spec}
      key={i}
      path={spec.path} />
  });

  const id = (props.selectedID === props.profile.id) ? "selected-profile" : "";



  return (
    <div onClick={() => {props.onProfileSelect(props.profile);}} id={id} className="profile-item">
      <div className="item-box">
        <div className="item-pic-container">
          <img className="item-pic" src={props.profile.pic} alt="" />
        </div>
          <div className="item-content">
            <div className="item-name"><span className="item-name-names">{props.profile.first_name} {props.profile.last_name}</span><span className="item-distance">{props.profile.distance}</span></div>
            <div className="specs">
              {specs}
            </div>
          </div>
      </div>
      <div className="ice-breaker-box">
        <div className="ice-breaker-item">
          <div className="ice-breaker-question">
            Ask me about...
          </div>
          <div className="ice-breaker-answer">
            {props.profile.gtky[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
