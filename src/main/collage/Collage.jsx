import React from 'react';

const Collage = () => {
    return (
        <div id="collage-div">
            <div id="collage-left">
                <div id="how-about-collage">콜라쥬 함 좝솨봐~!~!</div>
                <div id="collage-explanation-div">
                    <p className="collage-explanation">
                        아래 버튼을 눌러
                    </p>
                    <p className="collage-explanation">
                        당신만의 특별한 짤을 2차 가공해보세요
                    </p>
                </div>
                <button id="open-collage-btn"> ㄱ ㄱ → </button>
            </div>
            <div id="collage-right">
                <img src={`${process.env.PUBLIC_URL}/images/this_is_life.png`} alt="meme" id="collage-photo"/>
            </div>
        </div>
    );
}

export default Collage;