import React from 'react';

const Collage = () => {
    return (
        <div className="collage-div">
            <div className="collage-left">
                <div id="how-about-collage">콜라쥬 함 좝솨봐~!~!</div>
                <p className="collage-explanation">
                    아래 버튼을 눌러
                </p>
                <span className="collage-explanation">
                    당신만의 특별한 짤을 2차 가공해보세요
                </span>
                <button className="open-collage-btn"> → </button>
            </div>
            <div className="collage-right">
                <img src="images/yuqi.jpg" alt="meme" className="meme-photo"/>
            </div>
        </div>
    );
}

export default Collage;