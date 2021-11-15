import React, {useState,useEffect} from 'react'
import { saveAs } from 'file-saver'
import CloudDownload from "@material-ui/icons/CloudDownload"; 
import Feedback from "@material-ui/icons/Feedback"; 
import IconButton from "@material-ui/core/IconButton";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';  
import Modal from '../actions/optionModal'
import Button from '@mui/material/Button'; 
import $ from 'jquery'
export default function ButtonActions(props) {
    const [statusViewInfor, setStatusViewInfor] = useState(true); 
    const [imageReadyDownLoad, setImageReadyDownLoad] = useState( props.imageCakeActive); 
    function viewInfor() {
        $('.card').toggleClass('flip_toSee');
        $('.content_card_infor').fadeToggle()
        setStatusViewInfor(!statusViewInfor)
    }
    useEffect(() => { 
        setImageReadyDownLoad(props.imageCakeActive)
    },[props.imageCakeActive])
    const downloadImage = () => {
        saveAs(imageReadyDownLoad, 'Ảnh bánh KimWi.jpg') // Put your image url here.
      }
    function buyActions() {
        $('.list-cake,.MuiModal-root').addClass('d-none')
        $('.step_infor_order,.content_step_01').removeClass('d-none') 
        console.log(props.skuCake + " - " + props.imageCakeActive)
    }
    return (
        <div className="swipeButtons"> 
        <IconButton
          className="swipeButtons_download"
          onClick={() => downloadImage()}
        >
          <CloudDownload fontSize="large" />
        </IconButton>
        <Modal  content_modal={ 
            <>
            <div className='preview_order mb-4'>
                <h3>Xác nhận đặt Mẫu bánh {props.skuCake}</h3>
                <img src={props.imageCakeActive} alt='cake'/>
            </div>
            <Button variant="contained" className="update  ml-3"  onClick={() => buyActions()}>Mua ngay</Button>   
            </>
         }  class="buy_cake" icon={<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>} denyText="Xem tiếp" acceptText="Mua ngay"/>
         
        <IconButton
          className={ statusViewInfor ? "swipeButtons_view_infor" : "swipeButtons_view_infor d-none" }
          onClick={() => viewInfor()}
        >
          <Feedback fontSize="large" />
        </IconButton> 
        
        <IconButton
          className={ statusViewInfor ? "swipeButtons_reset d-none" : "swipeButtons_reset"}
          onClick={() => viewInfor()}
        >
          <RotateLeftIcon  fontSize="large" />
        </IconButton> 
      </div>
    )
}
