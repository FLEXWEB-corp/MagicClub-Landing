import styled from "styled-components";

const CTAStyleWrapper = styled.section`
margin-bottom: 1000px;
  .magic_club_title_section {
    width: 45%;
    margin: 0 auto;
    img {
      display: none;
    }

    h2,
    h3 {
      margin: 0;
    }
  }
  .title-emo {
    text-align: center;
    font-size: 50px;
  }

  .magic_club_v1_cta_content {
    position: relative;
    z-index: 1;

    /* particles */
    /* particles */
    .footer_stras_sect {
      height: 356px;
      width: 100%;
      position: absolute;
      top: -150px;
      z-index: 0;
    }
  }

  .join_comunity_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 430px;
    margin: auto;
    margin-top: 47px;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }

  .cta_social_links {
    max-width: 540px;
    margin: auto;
    margin-bottom: 70px;
    position: relative;
    z-index: 1;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      li {
        width: 11%;
        height: 60px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          color: #ffffff;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            font-size: 20px;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
        .social_hover_shape {
          position: absolute;
          top: 7px;
          left: 7px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s;
        }

        &:hover {
          .social_hover_shape {
            opacity: 1;
            visibility: visible;
          }
        }
      }
      li + li {
        margin-left: 15px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 600px;
    .magic_club_title_section {
      width: 60%;
    }
    .title-emo {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 575px) {
    margin-bottom: 500px;
    .join_comunity_btns {
      max-width: 400px;
      .wishlist_btn {
        width: 46%;
        font-size: 14px;
      }
      .join_discord_btn {
        width: 46%;
        font-size: 14px;
      }
    }

    .cta_social_links {
      max-width: 425px;

      ul {
        li {
          height: 48px;
          width: 12%;
          a {
            img {
              height: 14px;
            }
            svg {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    .magic_club_title_section {
      width: 85%;
    }
    .title-emo {
      font-size: 30px;
    }
    .join_comunity_btns {
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      row-gap: 25px;

      .wishlist_btn {
        width: 180px;
        font-size: 14px;
      }
      .join_discord_btn {
        width: 180px;
        font-size: 14px;
      }
    }

    .footer_social_links {
      ul {
        li {
          height: 40px;
          width: 12%;
          a {
            svg {
              font-size: 12px;
            }
            img {
              height: 12px;
            }
          }
        }
      }
    }
  }
`;

export default CTAStyleWrapper;
