import {NavLink} from 'react-router-dom';

import '../displays.css';
import DateDisplay from "./SubjectDisplayComponents/DateDisplay";
import TaskDisplay from "./SubjectDisplayComponents/TaskDisplay";
import SettingsDisplay from "./SubjectDisplayComponents/SettingsDisplay";

function SubjectDisplay(props) {
  let BackgroundColorStyles = {backgroundColor: props.MainColor}
  let BackgroundBorderColorStyles = {backgroundColor: props.MainColor, borderColor: props.MainColor}
  let TextShadowStyles = {textShadow: '-4px 0 ' + props.MainColor}
  

  let FlagButtonOnClick = () => {
    let FlagButtonTrigger = document.getElementsByClassName('checkbox')[0];
    let SettingsDisplay = document.getElementsByClassName('SettingsDisplay')[0]
    if (FlagButtonTrigger.checked === true) {
        SettingsDisplay.style.transform = 'translate(0, 0)';
    }
    else {
        SettingsDisplay.style.transform = 'translate(-140%, 0)';
    }
  }

  return (
    <div className='SubjectDisplay unselectable'>

        <div className='left' style={BackgroundColorStyles}></div>
        <div className='bottom' style={BackgroundColorStyles}></div>
        <div className='right' style={BackgroundColorStyles}></div>

        <div className='menu' style={BackgroundBorderColorStyles}>
            <img src={require('./../../static/logo.png')} className='menuLogo'></img>

            <NavLink to={'/'}>
            <img src={require('./../../static/back.png')}></img>
            </NavLink>
        </div>

        <div className='subject'>
            <div className='SubjectName'>
                <h1 style={TextShadowStyles}>
                {props.SubjectName}
                </h1>
            </div>

            <div className='content'>
                <SettingsDisplay MainColor={props.MainColor}></SettingsDisplay>
                <div className='TasksWindow'>
                    <TaskDisplay MainColor={props.MainColor}></TaskDisplay>
                    <div className='FlagButton' style={BackgroundColorStyles}>
                        <img src={require('../../static/settings.png')}></img>
                        <input type='checkbox' className='checkbox' onChange={FlagButtonOnClick}></input>
                    </div>
                </div>
                <DateDisplay MainColor={props.MainColor}></DateDisplay>
            </div>

        </div>
    </div>
  );
}

export default SubjectDisplay;
