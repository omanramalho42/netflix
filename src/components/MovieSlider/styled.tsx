import styled from "styled-components";

export const Container = styled.div`
    div.hero-slide {
      margin-bottom: 3rem;
    }
    
    .hero-slide__item {
      padding: 9rem 0;
      width: 100%;
      position: relative;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          @include overlay();
        }

        &::after {
            content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background-image: linear-gradient(to top, ${({ theme }) => theme.colors.header}, rgba('#f9f9f9', 0));
        }

        &__content {
            @include flex(center, center);
            position: relative;

            &__info {
              width: 55%;
              padding: 0 3rem;
              position: relative;

              @include tablet {
                  width: 100%;
              }

              & > * ~ * {
                  margin-top: 3rem;
              }

                .title {
                  font-size: 5rem;
                  font-weight: 700;
                  line-height: 1;

                  @include tablet {
                      font-size: 4rem;
                  }
              }

              .overview {
                  font-weight: 700;
              }

              .btns > * ~ * {
                  margin-left: 1rem;
              }

              .btns,
              .title,
              .overview {
                  opacity: 0;
                  transform: translateY(-100px);
                  transition: transform 0.5s ease, opacity 0.5s ease;
              }
          }

          &__poster {
              flex: 1;
              @include flex(center, flex-start);
              position: relative;

              img {
                  width: 400px;
                  border-radius: 15px;
                  box-shadow: 0 0 12px 6px rgba(0,0,0,0.1);

                  transform: scale(0);
                  transition: transform 0.7s ease;
              }

              @include tablet {
                  display: none;
              }
          }
      }

      &.active > &__content > &__content__poster {
          img {
              transform: scale(1);
          }
      }

      &.active > &__content > &__content__info {
          .btns,
          .title,
          .overview {
              opacity: 1;
              transform: translateY(0);
          }

          .title {
              transition-delay: 0.3s, 0.3s;
          }

          .overview {
              transition-delay: 0.6s, 0.6s;
          }

          .btns {
              transition-delay: 0.9s, 0.9s;
          }
      }
  }
`;