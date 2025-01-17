import { useModal } from "../../../utils/ModalContext";
import Counter from "../../../common/counter";
import Button from "../../../common/button";
import BannerV1Wrapper from "./Banner.style";

import { useCallback, useEffect, useMemo, useState } from "react";
import { totalMintCount } from "../../../utils/web3mint";

import { useRecoilState } from "recoil";
import { langState } from "../../../Atoms/langState";

import ReactPlayer from "react-player";
import VideoBG from "../../../assets/images/bg/Video_BG_comp.mp4";

import { isMetaMaskInstalled } from "../../../config";

const Banner = ({ totalSupply }) => {
  const { mintModalHandle, metamaskModalHandle, walletModalHandle, account } = useModal();
  const [lang] = useRecoilState(langState);
  const [vdView, setVdView] = useState("hidden");

  const handleWalletConnect = async () => {
    if (!isMetaMaskInstalled()) {
      return metamaskModalHandle();
    }

    walletModalHandle();
  };

  // useEffect(() =>{
  //   const calculateRemainingItems = async () => {
  //     let totaltMintedItems = await totalMintCount();
  //     console.log(totaltMintedItems);
  //     setRemaining(totaltMintedItems);
  //   }

  //   calculateRemainingItems();
  // },[])

  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="magic_club_v1_baner_left">
              <h2>
                Magic Club <br />
                NFT collections
              </h2>
              <h3>
                <span className="count">
                  <Counter end={totalSupply} duration={0.5} />
                </span>{" "}
                / 9000 Minted
              </h3>
              <div className="banner_buttons">
                <Button lg variant="mint" onClick={account ? mintModalHandle : handleWalletConnect}>
                  Mint now
                </Button>
              </div>
              <div className="coin-info">
                {lang === "Eng" ? (
                  <span>MAX 5 NFTS PER WALLET</span>
                ) : (
                  <span>지갑당 NFT 5개 구매 가능</span>
                )}
                {lang === "Eng" ? (
                  <span>
                    Price and Minting Date: <span className="highlighted">TBA</span>
                  </span>
                ) : (
                  <span>
                    가격 및 민팅날짜: <span className="highlighted">추후 공지 예정</span>
                  </span>
                )}
                {/* {vdView === true ? <p>true</p>: <p>false</p>} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={VideoBG} // 플레이어 url
          width="100%" // 플레이어 크기 (가로)
          height="100%" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          muted={true} // 자동 재생 on
          loop={true}
          playsinline={true} // ios 동영상 플레이어로 넘어가는 것 방지
          style={{ visibility: vdView }}
          onReady={() => setVdView("visible")}
        />
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
