import SubjectLink from '../../SubjectLink';
import './GreetingDisplay.css';

function GreetingDisplay(props) {
  let BackgroundColorStyles = {backgroundColor: props.MainColor}
  let BackgroundBorderColorStyles = {backgroundColor: props.MainColor, borderColor: props.MainColor}

  let initValues = ['-100px', '-270px', '-100px'];
  let newValues = ['0px', '20px', '0px'];
  let color = ['#00CECB','#00A09E','#3FD7D4']
  let hoverFuncOver = () => {
    let n = 0;
    let elements = Array.from(document.getElementsByClassName('paper'));
    elements.map(element => {
        element.style.right = newValues[n];
        element.style.backgroundColor = color[n];
        n += 1
    });
  }
  let hoverFuncOut = () => {
    let n = 0;
    let elements = Array.from(document.getElementsByClassName('paper'));
    elements.map(element => {
        element.style.right = initValues[n];
        element.style.backgroundColor = 'transparent';
        n += 1;
    });
  }
  return (
    <div className="greetingDisplay unselectable">

        <div className='left' style={BackgroundColorStyles}></div>
        <div className='bottom' style={BackgroundColorStyles}></div>
        <div className='right' style={BackgroundColorStyles}></div>

        <div className='menu' style={BackgroundBorderColorStyles}>
            <img src={require('./../../static/logo.png')} className='menuLogo'></img>
        </div>
      
        <div className='topic'>
            <div className='topicBg'>
                <div className='paper1'></div>
            </div>

            <div className='topicRightMenu'>
                <div className='paperPhysics paper' onMouseOver={hoverFuncOver} onMouseOut={hoverFuncOut}>
                    <div>
                        {/* <a href='#'>Физика</a> */}
                        <SubjectLink SubjectLink='physics' SubjectName='Физика'></SubjectLink>
                        <img src={require('../../static/physics1.png')} className='physics1'></img>
                        <img src={require('../../static/physics2.png')} className='physics2'></img>
                        <img src={require('../../static/physics3.png')} className='physics3'></img>
                        <img src={require('../../static/thinking.png')} className='physics4'></img>
                    </div>
                </div>
                <div className='paperMath paper' onMouseOver={hoverFuncOver} onMouseOut={hoverFuncOut}>
                    <div>
                        {/* <a href='#' className='mathAdvancedTitle'>Профильная математика</a> */}
                        <SubjectLink SubjectLink='advanced-math' SubjectName='Профильная математика' ClassName='mathAdvancedTitle'></SubjectLink>
                        <img src={require('../../static/trigonometry.png')} className='mathAdvanced1'></img>
                        <img src={require('../../static/octagon.png')} className='mathAdvanced2'></img>
                        <img src={require('../../static/icosahedron.png')} className='mathAdvanced3'></img>
                    </div>
                    <div>
                        {/* <a href='#' className='mathBasedTitle'>Базовая математика</a> */}
                        <SubjectLink SubjectLink='based-math' SubjectName='Базовая математика' ClassName='mathBasedTitle'></SubjectLink>
                        <img src={require('../../static/algebra.png')} className='mathBased1'></img>
                        <img src={require('../../static/cube.png')} className='mathBased2'></img>
                        <img src={require('../../static/sphere.png')} className='mathBased3'></img>
                    </div>
                </div>
                <div className='paperOther paper' onMouseOver={hoverFuncOver} onMouseOut={hoverFuncOut}> 
                    
                </div>
            </div>

            <div className='topicText'>
                <h1>Больше заданий..<span className='animateDot'>.</span></h1>
                <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>
            </div>
            <div className='topicList'>
                <ul>
                    <li>Sem nulla pharetra diam sit amet nisl.</li>
                    <li>Sem nulla pharetra diam sit amet nisl.</li>
                    <li>Sem nulla pharetra diam sit amet nisl.</li>
                    <li>Sem nulla pharetra diam sit amet nisl.</li>
                </ul>
                <img src={require('../../static/chalk.png')}></img>
            </div>
        </div>

        {/* <div className='topic'>
            <div className='topic2Bg'>
            </div>

            <div className='topic2content'>
                <h1>Информация...</h1>
                <div className='sections'>
                    <div className='section'>
                        <div className='first'>
                            <div className='firstInner'>
                                <p>Vel fringilla est ullamcorper eget. Viverra justo nec ultrices dui sapien. Vitae proin sagittis nisl rhoncus mattis rhoncus. Viverra justo nec ultrices dui sapien.</p>
                                <img src={require('../../static/coding1.png')}></img>
                                <img src={require('../../static/coding2.png')}></img>
                            </div>
                        </div>
                    </div>
                    <div className='section'>
                        <div className='second'>
                            {<div className='secondInner'>
                                <p>Сейчас на сайте...</p>
                                <div className='numbers big'>
                                    <div>5</div>
                                    <div>2</div>
                                    <div>1</div>
                                    <div>9</div>
                                </div>
                                <div className='minisection'>
                                    <div className='numbers small'>
                                        <div>5</div>
                                        <div>2</div>
                                        <div>1</div>
                                        <div>9</div>

                                        <p>без ответа,</p>
                                    </div>
                                    <div className='numbers small'>
                                        <div>5</div>
                                        <div>2</div>
                                        <div>1</div>
                                        <div>9</div>

                                        <p>с ответом,</p>
                                    </div>
                                    <div className='numbers small'>
                                        <div>5</div>
                                        <div>2</div>
                                        <div>1</div>
                                        <div>9</div>

                                        <p>с ответом и поясенением.</p>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className='section'>
                        <div className='third1'></div>
                        <div className='third2'></div>
                    </div>
                    <div className='section forth'>
                        <div className='forth'></div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  );
}

export default GreetingDisplay;
