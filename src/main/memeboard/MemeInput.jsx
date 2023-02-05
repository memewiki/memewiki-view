import React, { useEffect, useState, useRef } from 'react';
import { AiFillPicture } from "react-icons/ai";
import Swal from 'sweetalert2';
import MemeRepository from '../repository/MemeRepository';

const MemeInput = props => {

    const [domReady, setDomReady] = useState(false);
    const [thumbnail, setThunbnail] = useState(undefined);
    const [file, setFile] = useState(undefined);
    const [tags, setTags] = useState([]);
    const inputRef = useRef();
    const aRef = useRef();
    
    useEffect(() => {
      setDomReady(true);
    }, []);
  
    const closeModal = () => {
      setDomReady(false);
      props.setOpenModal(undefined);
    }

    const fileHandler = (file) => {
        setFile(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setThunbnail(reader.result);
        };
    }

    const changeHandler = () => {
        const file = inputRef.current.files[0];
        fileHandler(file);
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const dropHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        fileHandler(file);
    }

    const uploadBtnClick = () => {
        inputRef.current.click();
    }

    const tagTextChange = (e) => {
        let text = e.target.value;
        text = text.replaceAll('\n','');
        text = text.replaceAll(' ','');
        
        setTags(text.split('#').slice(1));
    }

    const submit = async() => {
        const result1 = await MemeRepository.uploadMeme(file.name, tags);
        const status1 = result1 && result1.status === 200;
        let result2 = undefined;
        console.log("result1 : " + JSON.stringify(result1));
        if (status1) {
            result2 = await MemeRepository.uploadImage(thumbnail, result1.data.data.memeId, result1.data.data.memeUrl);
        }

        
        const status2 = result2 && result2.status === 200;

        if (status1 && status2) {
            Swal.fire({
                icon : 'success',
                title : '밈이 성공적으로 저장되었어요~',
            }).then((result) => {
                if (result.isConfirmed) {
                    closeModal();
                }
            });
        } else {
            Swal.fire({
                icon : 'error',
                title : '밈 저장에 실패했어요 ㅜㅜ'
            });
        }
    }

    return domReady && (
        <div className="meme-modal-outer-div">
            <div className="meme-modal-div">
                <button className="meme-modal-close-btn"
                    onClick={closeModal}>X</button>
                <div id="meme-image-drag-div"
                    onDragOver={dragOverHandler}
                    onDrop={dropHandler}>
                    {   thumbnail ? 
                        <>
                            <img src={thumbnail} alt="thumbnail" />
                            <a ref={aRef} hidden></a>
                        </> :
                        <>
                            <AiFillPicture id='meme-image-drag-icon' />
                            <p>여기로 이미지를 드래그하거나 파일을 업로드 하세요.</p>
                        </>
                    }
                </div>
                <div id="meme-input-tag-upload-div">
                    <textarea placeholder='등록할 짤을 설명할 수 있는 태그를 입력하세요.' 
                        onChange={tagTextChange}/>
                    <input type="file" accept='image/*' 
                        ref={inputRef}
                        onChange={changeHandler} hidden/>
                    <button id="meme-submit-btn"
                        hidden={thumbnail && tags.length > 0 ? false : true}
                        onClick={submit}>등록하기!</button>
                    <button onClick={uploadBtnClick}
                        id="meme-upload-btn">업로드</button>
                </div>
            </div>
        </div>
    );
};

export default MemeInput;