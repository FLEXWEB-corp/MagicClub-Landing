import data from "../../../../assets/data/characterSlider/characterSlider";

import CharacterSliderWrapper from "./CharacterSlider.style";

const CharacterSlider = () => {
  return (
    <CharacterSliderWrapper>
      <p>Magic Club NFT</p>
      <div className="chars-wrapper">
        {data?.map((item, i) => (
          <div className="chars-box">
            <div className="character-thumb">
              <img src={item.thumb} alt="magic club nft character" />
            </div>
            <span className="charsName">{item.name}</span><br />
            <span className="charsDesc">{item.description}</span>
          </div>
        ))}
      </div>
        
    </CharacterSliderWrapper>
  );
};

export default CharacterSlider;