function SettingsDisplay(props) {
    let styles = {backgroundColor: props.MainColor};

    let radios = ['FirstRadio', 'SecondRadio', 'ThirdRadio']
    let ChangeStylesWhenChecked = () => {
        radios.forEach(RadioClass => {
            let radio = document.getElementsByClassName(RadioClass)[0];
            if (radio.checked) {
                radio.style.backgroundColor = '#545454';
                radio.style.borderColor = props.MainColor;
            }
        })
        
    }

    return (
      <div className='SettingsDisplay'>
        <div className='SettingsDisplayShape'>
            <h1>Настройки</h1>
            <form className='SettingsForm'>
                <label className='SettingsFormRadio'>
                    <input className='FirstRadio' type='radio' style={styles} onChange={ChangeStylesWhenChecked}/>
                    <p>по разделам кодификатора ЕГЭ</p>
                </label>
                <label className='SettingsFormRadio'>
                    <input className='SecondRadio' type='radio' style={styles} onChange={ChangeStylesWhenChecked}/>
                    <p>по номерам заданий ЕГЭ</p>
                </label>
                <label className='SettingsFormRadio'>
                    <input className='ThirdRadio' type='radio' style={styles} onChange={ChangeStylesWhenChecked}/>
                    <p>случайное задание</p>
                </label>

                <input type='submit' value='Найти!' style={styles}/>
            </form>
        </div>
      </div>
    );
  }
  
  export default SettingsDisplay;
  