import React from 'react';
import './social.scss';
import Modal from 'react-modal';
import { ReactComponent as FBIcon } from '../../images/icons/fb.svg';
import { ReactComponent as InstagramIcon } from '../../images/icons/instagram.svg';
import { ReactComponent as TelegramIcon } from '../../images/icons/telegram.svg';
import { ReactComponent as VKIcon } from '../../images/icons/vk.svg';
import { ReactComponent as WechatIcon } from '../../images/icons/wechat.svg';
import weChatQr from '../../images/wechatqr.png';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '40px',
        borderRadius: '10px',
    },
    overlay: {
        zIndex: 99
    }
};

Modal.setAppElement('#root');

const Social = ({ color = '#FAFAFA' }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className='social'>
            <a className="social__link" href="https://t.me/cleanhubby" target='_blank' rel="noreferrer">
                <TelegramIcon fill={color} width="28" height="28" />
            </a>
            <a className="social__link"  href="https://www.instagram.com/cleanhub.by" target='_blank' rel="noreferrer">
                <InstagramIcon fill={color} width="28" height="28" />
            </a>
            <a className="social__link"  href="https://vk.com/club202195166" target='_blank' rel="noreferrer">
                <VKIcon fill={color} width="28" height="28" />
            </a>
            <a className="social__link"  href="https://www.facebook.com/bsuclean" target='_blank' rel="noreferrer">
                <FBIcon fill={color} width="28" height="28" />
            </a>
            <div className="social__link"  onClick={openModal}>
                <WechatIcon fill={color} width="28" height="28" />
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <button className="social__modal-close" onClick={closeModal}>&#10005;</button>
                <img className="social__modal-qr" src={weChatQr} alt="qr"/>
                <div className="social__modal-id">ID: wxid_ufzf3potiq2v12</div>
            </Modal>
        </div>
    );
}

export default Social;
