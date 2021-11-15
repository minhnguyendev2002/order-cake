import React, { useState, useEffect } from 'react'  
import 'react-phone-input-2/lib/style.css' 
import './OrderPage.css' 
import Button from '@mui/material/Button';  
import Calendar from 'react-calendar';
import TimeKeeper from 'react-timekeeper';
import PhoneInput from 'react-phone-input-2'
import ListCake from './ListCake'
import $ from 'jquery'; 
export default function Index() { 
    const [time, setTime] = useState('12:34pm')
    //const [showTime, setShowTime] = useState(true)
    const [value, onChange] = useState(new Date()); 
    const [step, setStep] = useState(0)
    useEffect(() => {
      if(step===0) {
        $('.turnBack').addClass('Mui-disabled');
      }
      else {
        $('.turnBack').removeClass('Mui-disabled');
        if(step===1) { 
          $('.content_step_01').addClass('d-none')
          $('.content_step_02').removeClass('d-none') 
        }
        if(step===2) { 
          $('.content_step_02').addClass('d-none')
          $('.content_step_03').removeClass('d-none') 
        }
        if(step===3) { 
          $('.content_step_03').addClass('d-none')
          $('.content_step_04').removeClass('d-none') 
        }
      } 
    },[step]) 
    return (
        <> 
        <div className="list-cake">
          <ListCake />
        </div>
        <div className='step_infor_order d-none'>
          <div className="content_step_01 d-none">
            <h3 className='text-center'>Chọn ngày giao bánh</h3>
            <div className='container pl-3 pr-3 mt-4 '>
              <Calendar
                onChange={onChange}
                value={value}
              />
            </div>
          </div>
          <div className="content_step_02 d-none">
            <h3 className='text-center'>Bạn muốn giao lúc nào?</h3>
            <div className='container pl-3 pr-3 mt-4 '>   
                <TimeKeeper
                    time={time}
                    onChange={(newTime) => setTime(newTime.formatted12)}
                   // onDoneClick={() => setShowTime(false)}
                    switchToMinuteOnHourSelect
                /> 
            {/* {!showTime &&
                <button onClick={() => setShowTime(true)}>Show</button>
            }  */}
            </div>
          </div>
          <div className="content_step_03 d-none">
            <h3 className='text-center'>Thông tin của bạn</h3>
            <div className='container pl-3 pr-3 mt-4 '> 
                <div className='col-12 form-options-order mb-1'>
                  <input className='w-100 infor_order' id='name_order' placeholder='Họ và Tên'/>
                </div>
                <div className='col-12 form-options-order mb-1'>
                  <input className='w-100 infor_order' id='address_order' placeholder='Địa chỉ'/>
                </div>
                <div className='col-12 form-options-order mb-1'>
                  <PhoneInput
                      country={'us'}
                      value={'84'}
                    // onChange={phone => this.setState({ phone })}
                  />
                </div>
                <div className='col-12 form-options-order mb-4'>
                  <textarea className='w-100 infor_order' id='note_order' placeholder='Ghi chú'/>
                </div>
            </div>
          </div>
          <div className="content_step_04 d-none">
            <h3 className='text-center'>Đặt bánh thành công!</h3>
            <div className='container pl-3 pr-3 mt-4 '>  
            
            </div>
          </div>
          <div className='container d-flex justify-content-around  align-items-center button-actions-steps'>
            <Button variant="contained" className='turnBack' onClick={() => setStep(step - 1)}>Quay lại</Button>
            <Button variant="contained" onClick={() => setStep(step + 1)}>Tiếp tục</Button>
          </div>
          </div>
          </>
    )
}
