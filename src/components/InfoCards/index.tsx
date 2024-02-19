import style from './style.module.scss';
import picture1 from '../../picture/card_info.png';
import picture2 from '../../picture/card_info 2.png';
import picture3 from '../../picture/card_info 3png.png';
import picture4 from '../../picture/card_info 4.png';
import svg from '../../picture/svg1.svg';

const InfoCards = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.info}>
          <h3 className={style.info__title}>Наши премущества</h3>
          <div className={style.info__cards}>
            <div className={style.info__card}>
              <img className={style.info__picture_min} src={picture2} alt="" />
              <p className={style.info__text}>Подбираем ткань, фурнитуру вместе с вами</p>
            </div>
            <div className={style.info__card}>
              <img className={style.info__picture} src={picture1} alt="" />
              <p className={style.info__text}>Профессиональное планирование</p>
            </div>
            <div className={style.info__card}>
              <img className={style.info__picture} src={picture3} alt="" />
              <p className={style.info__text}>Квалифицированные специалисты</p>
            </div>
            <div className={style.info__card}>
              <img className={style.info__picture_min} src={picture4} alt="" />
              <p className={style.info__text}>Современное оборудование</p>
            </div>
          </div>

          <div className={style.info__cards}>
            <div className={style.info__card_2}>
              <img src={svg} alt="" />
              <h4 className={style.info__title_2}>Подбираем ткань, фурнитуру вместе с вами</h4>
              <p className={style.info__text_2}>
                Мы не просто примем заказ, но и поможем вам с выбором ткани, фурнитуры для вашей одежды, также расскажем
                о всех минусах и плюсах выбранных материалов.
              </p>
            </div>
            <div className={style.info__card_2}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.9972 9.36593C10.3752 9.60817 9.65983 9.94126 9.41101 10.1229C8.04251 11.2433 7.54487 14.7558 8.47794 16.6938C9.90865 19.6007 14.6362 19.8127 16.378 17.0269C16.8134 16.3304 17 15.5129 17 14.0897C17 11.637 16.2846 10.3652 14.4185 9.54761C12.8634 8.85116 12.5524 8.85116 10.9972 9.36593ZM14.0453 10.6377C17.1244 12.0306 16.4091 17.2994 13.0811 17.905C11.9303 18.117 10.4374 17.4811 9.72204 16.4516C8.94448 15.3917 9.06889 12.5454 9.87755 11.5461C11.0283 10.1229 12.3657 9.85042 14.0453 10.6377Z"
                  fill="white"
                />
                <path
                  d="M33.9972 9.36593C33.3752 9.60817 32.6598 9.94126 32.411 10.1229C31.0425 11.2433 30.5449 14.7558 31.4779 16.6938C32.9087 19.6007 37.6362 19.8127 39.378 17.0269C39.8134 16.3304 40 15.5129 40 14.0897C40 11.637 39.2846 10.3652 37.4185 9.54761C35.8634 8.85116 35.5524 8.85116 33.9972 9.36593ZM37.0453 10.6377C40.1244 12.0306 39.4091 17.2994 36.0811 17.905C34.9303 18.117 33.4374 17.4811 32.722 16.4516C31.9445 15.3917 32.0689 12.5454 32.8776 11.5461C34.0283 10.1229 35.3657 9.85042 37.0453 10.6377Z"
                  fill="white"
                />
                <path
                  d="M23.1311 16.5899C22.0927 17.7131 20.1007 19.0482 17.3033 20.4469C15.1205 21.5701 15.0781 21.5701 12.747 21.676C10.6914 21.7608 10.3099 21.8456 9.63179 22.3118C8.12715 23.329 8 23.8588 8 28.4999V32.6111L8.95364 33.5436L9.90728 34.476L9.94967 38.0787C10.0132 41.1303 10.0556 41.7025 10.3311 41.7025C10.6066 41.7025 10.649 41.1091 10.7126 37.8879L10.755 34.0734L9.80132 33.1197L8.84768 32.1873V28.2244C8.84768 24.5369 8.86887 24.2403 9.29272 23.7105C10.0344 22.7568 10.755 22.5237 12.9377 22.5237C14.8874 22.5237 14.951 22.5025 17.1126 21.4641C19.4861 20.2985 21.9656 18.7727 22.898 17.9038L23.4702 17.3528V18.6456C23.4702 19.9171 23.449 19.9595 22.4954 20.8071C21.1391 21.9939 19.6344 22.9687 17.6424 23.9224C16.7099 24.3886 15.8834 24.8336 15.7987 24.9608C15.6079 25.2151 15.5656 40.982 15.7563 41.4694C15.8199 41.6601 16.0106 41.8085 16.1801 41.8085C16.4344 41.8085 16.4768 40.4734 16.4768 33.586V25.3634L17.6424 24.876C19.1258 24.2615 21.6901 22.6085 22.9404 21.4429L23.8728 20.574L24.996 21.5277C26.3947 22.7144 28.2808 23.9224 29.9974 24.7277L31.3113 25.3634L31.3536 33.5224C31.4172 41.1091 31.4384 41.7025 31.7987 41.7661C32.1377 41.8297 32.1589 41.3211 32.1589 33.3317V24.8336L30.7391 24.1979C28.9377 23.3926 26.1616 21.5489 25.102 20.4469C24.3603 19.684 24.2967 19.5356 24.3603 18.5396L24.4238 17.48L25.8013 18.5184C26.5642 19.0906 28.4715 20.2138 30.0609 21.0403L32.9642 22.5237H35.0411C36.7788 22.5237 37.2662 22.6085 37.8384 22.9475C38.9828 23.6469 39.1523 24.3674 39.1523 28.5211V32.1873L38.1987 33.1197L37.245 34.0522V37.9515C37.245 41.533 37.2662 41.8297 37.6265 41.7661C37.9444 41.7025 37.9868 41.3211 38.0503 37.9727L38.0927 34.2641L39.0464 33.3317L40 32.3992V28.627C40 23.8588 39.7245 23.0323 37.8384 22.0787C37.2238 21.7608 36.5881 21.676 35.0623 21.676C33.155 21.676 33.0278 21.6548 31.1205 20.7224C28.4927 19.4509 26.3523 18.0522 25.0384 16.7595L23.9576 15.6999L23.1311 16.5899Z"
                  fill="white"
                />
              </svg>
              <h4 className={style.info__title_2}>Подбираем ткань, фурнитуру вместе с вами</h4>

              <p className={style.info__text_2}>
                Наша команда начинает работу над вашим заказом с профессионального планирования. Мы учитываем каждый
                этап производства и вычисляем оптимальное время выполнения заказа.
              </p>
            </div>
            <div className={style.info__card_2}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.1036 8.26551C22.6032 8.40502 21.7969 8.99096 21.2408 9.60481C19.1556 11.9486 19.7951 16.2176 22.4364 17.5848C23.6041 18.1987 25.7171 18.115 26.8293 17.4453C30.1934 15.3805 29.4984 9.26998 25.7727 8.2376C24.6328 7.90278 24.2714 7.93068 23.1036 8.26551ZM26.2732 9.63271C27.8858 10.6372 28.4696 13.1484 27.5521 15.1015C26.3844 17.529 22.6588 17.529 21.4911 15.1015C20.2121 12.395 21.8803 9.07467 24.5216 9.07467C24.9942 9.07467 25.7727 9.32579 26.2732 9.63271Z"
                  fill="white"
                />
                <path
                  d="M33.1036 8.26551C32.6032 8.40502 31.7969 8.99096 31.2408 9.60481C29.1556 11.9486 29.7951 16.2176 32.4364 17.5848C33.6041 18.1987 35.7171 18.115 36.8293 17.4453C40.1934 15.3805 39.4984 9.26998 35.7727 8.2376C34.6328 7.90278 34.2714 7.93068 33.1036 8.26551ZM36.2732 9.63271C37.8858 10.6372 38.4696 13.1484 37.5521 15.1015C36.3844 17.529 32.6588 17.529 31.4911 15.1015C30.2121 12.395 31.8803 9.07467 34.5216 9.07467C34.9942 9.07467 35.7727 9.32579 36.2732 9.63271Z"
                  fill="white"
                />
                <path
                  d="M13.1036 8.26551C12.6032 8.40502 11.7969 8.99096 11.2408 9.60481C9.15559 11.9486 9.79506 16.2176 12.4364 17.5848C13.6041 18.1987 15.7171 18.115 16.8293 17.4453C20.1934 15.3805 19.4984 9.26998 15.7727 8.2376C14.6328 7.90278 14.2714 7.93068 13.1036 8.26551ZM16.2732 9.63271C17.8858 10.6372 18.4696 13.1484 17.5521 15.1015C16.3844 17.529 12.6588 17.529 11.4911 15.1015C10.2121 12.395 11.8803 9.07467 14.5216 9.07467C14.9942 9.07467 15.7727 9.32579 16.2732 9.63271Z"
                  fill="white"
                />
                <path
                  d="M37.3632 19.6615C36.9684 19.7492 36.5954 19.9467 36.5296 20.0563C36.4419 20.188 32.2302 20.2757 24.9474 20.2757C15.2298 20.2538 13.4311 20.2099 13.0801 19.9467C12.8388 19.7712 12.2685 19.6176 11.8078 19.6176C11.1059 19.6176 10.7987 19.7712 9.98712 20.6047C9.13162 21.4383 9 21.7015 9 22.4912C9 23.2151 9.13162 23.5222 9.65808 24.0048L10.3162 24.619V28.4359V32.2527L11.413 33.3276L12.5098 34.4025L12.5536 38.5703C12.6194 42.3433 12.6633 42.7601 13.0143 42.8259C13.3653 42.8917 13.3872 42.5846 13.3872 38.5484V34.1831L12.2904 33.1082L11.1936 32.0334V28.2385C11.1936 25.1674 11.2594 24.4435 11.5007 24.4435C11.6543 24.4435 12.2246 24.0706 12.7291 23.61C13.4311 22.9958 13.6943 22.579 13.804 21.9209L13.9356 21.0435L17.7305 20.9776C19.7925 20.9557 21.5035 20.9776 21.5035 21.0215C21.5035 21.0873 20.9551 21.877 20.297 22.8203L19.0905 24.4874L19.1344 33.6347C19.2002 42.1239 19.2222 42.7601 19.5951 42.8259C19.946 42.8917 19.968 42.3433 19.968 33.7882V24.6629L21.328 22.7983L22.688 20.9338H24.9255H27.163L28.4353 22.6228L29.7295 24.3338L29.8392 33.547C29.9488 42.08 29.9708 42.7601 30.3437 42.8259C30.6947 42.8917 30.7166 42.3433 30.7166 33.5908V24.3119L29.4882 22.6667L28.2817 21.0435L31.8573 20.9776C33.8096 20.9557 35.5425 20.9776 35.6961 21.0215C35.8496 21.0873 35.9812 21.3944 35.9812 21.7015C35.9812 22.3157 37.4948 24.1145 38.1968 24.3338C38.5916 24.4655 38.6135 24.7287 38.6135 28.2604V32.0334L37.5168 33.1082L36.42 34.205L36.4638 38.4825C36.5296 42.3433 36.5735 42.7601 36.9245 42.8259C37.2755 42.8917 37.2974 42.5846 37.2974 38.7677V34.6218L38.3942 33.547L39.491 32.4721V28.5894V24.7068L40.2807 23.9171C40.9826 23.2151 41.0704 23.0177 40.9607 22.3157C40.8071 21.4164 39.5568 19.9686 38.6355 19.6615C38.3064 19.5518 37.758 19.5518 37.3632 19.6615ZM12.7291 20.7144C13.3653 21.3506 13.2775 21.7673 12.2027 22.8203C11.1936 23.8293 10.8426 23.9609 10.2723 23.5003C9.48259 22.8861 9.57034 22.2719 10.6013 21.2628C11.6762 20.166 12.071 20.0563 12.7291 20.7144ZM39.2936 21.1312C40.2807 22.1183 40.4123 22.9299 39.6665 23.4345C38.9645 23.939 38.7232 23.8732 37.7361 22.9958C36.7051 22.0525 36.5516 21.1751 37.3413 20.6267C38.0651 20.1221 38.3503 20.188 39.2936 21.1312Z"
                  fill="white"
                />
              </svg>

              <h4 className={style.info__title_2}>Квалифицированные специалисты</h4>
              <p className={style.info__text_2}>
                Во время производства каждого изделия проводится контроль качества на разных этапах, начиная с раскроя и
                заканчивая окончательной отделкой. Это позволяет выявлять и устранять дефекты на самых ранних этапах.
              </p>
            </div>
            <div className={style.info__card_2}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.7398 11.3043C21.5339 11.4915 20.4109 13.2696 19.2691 15.2724C17.4161 18.5105 17.1541 19.0533 17.0605 20.064C16.9482 21.0935 16.6862 21.6363 14.047 26.2033C11.595 30.4334 11.0897 31.2008 10.734 31.2008C10.0789 31.2008 9.5174 31.8747 9.57356 32.5859C9.61099 32.979 9.5174 33.3159 9.31151 33.5218C8.88101 33.9523 8.89973 34.9818 9.34895 35.3935C9.57356 35.5994 9.64842 35.8615 9.59227 36.1609C9.49869 36.685 9.98534 37.5647 10.3784 37.5647C10.5656 37.5647 10.6404 37.7894 10.6217 38.2386C10.603 38.7439 10.7153 39.0247 11.0335 39.268C11.4266 39.5862 11.8384 39.6237 15.9 39.6237C20.2799 39.6237 20.3548 39.6237 21.2719 39.1557L22.1891 38.6878H28.0102H33.8313L34.2617 39.1557C34.7858 39.7172 35.3661 39.7547 35.965 39.268C36.3019 39.006 36.4891 38.9498 36.7512 39.0996C37.2752 39.3803 38.0801 38.9498 38.4357 38.2011C38.6042 37.8455 38.8662 37.5647 39.0347 37.5647C39.4277 37.5647 39.9331 36.7037 39.8208 36.2358C39.7459 35.9551 39.8395 35.824 40.1577 35.693C40.6444 35.5058 41 34.9818 41 34.4577C41 34.1582 37.7619 28.3745 36.7699 26.8771C36.5266 26.5215 35.9837 26.0349 35.5907 25.8102C34.973 25.4546 34.5051 24.7621 31.9595 20.3635C29.2081 15.5906 29.0583 15.2724 29.2455 14.767C29.4327 14.2991 29.3952 14.1119 29.1332 13.7001C28.946 13.4194 28.6465 13.1386 28.4594 13.1012C28.2722 13.045 28.0289 12.7642 27.9166 12.4835C27.7107 11.8471 27.1304 11.5102 26.4379 11.5663C26.1571 11.6038 25.7454 11.5289 25.5207 11.3979C25.0154 11.1171 24.1169 11.0984 23.8362 11.3792C23.6864 11.5289 23.518 11.5102 23.1998 11.2856C22.6383 10.8925 22.2265 10.9112 21.7398 11.3043ZM22.9939 12.2214C23.0313 12.4273 22.6008 13.4006 22.0206 14.3739C21.2906 15.628 21.066 16.2082 21.197 16.358C21.3093 16.489 21.4591 16.5639 21.5339 16.5077C21.6088 16.4703 22.2452 15.4034 22.9565 14.1681C23.6677 12.9327 24.3603 11.8845 24.51 11.8284C24.7908 11.7161 25.2774 12.053 25.2774 12.3525C25.2774 12.4648 24.6785 13.6065 23.9485 14.8793C23.0875 16.4141 22.6944 17.2751 22.8067 17.3874C22.919 17.4997 23.0875 17.5185 23.1998 17.4623C23.2934 17.3874 24.0421 16.2082 24.8282 14.8232C26.0074 12.7455 26.3256 12.2963 26.6812 12.2963C27.5235 12.2963 27.3738 12.8391 25.8202 15.5157C24.7908 17.2751 24.3603 18.1923 24.4913 18.3233C24.7908 18.6228 24.9967 18.3795 26.0448 16.5452C27.4486 14.0557 27.692 13.7563 28.1412 13.8311C28.3658 13.8686 28.5717 14.0183 28.6091 14.1868C28.6278 14.3365 27.8604 15.8526 26.8871 17.5372C25.9138 19.2217 25.1651 20.6817 25.2025 20.7566C25.4272 21.1122 25.8015 20.8314 26.3817 19.8581C26.7187 19.2966 27.1679 18.7538 27.3925 18.6789C27.8043 18.5292 28.4594 18.6228 28.4594 18.8287C28.4594 19.0907 26.3817 22.4786 26.0635 22.7032C25.8951 22.8342 25.0902 23.1711 24.3041 23.4331L22.8629 23.9198L21.2532 26.7274C19.8119 29.1981 19.6061 29.4976 19.2879 29.3291C19.1007 29.2355 17.8466 29.1419 16.499 29.1419C14.309 29.1419 14.047 29.1794 13.8785 29.4976C13.7475 29.7222 13.7475 30.0591 13.8598 30.4709C13.9534 30.8078 14.0096 31.1073 13.9721 31.1447C13.9347 31.1821 13.4855 31.2008 12.9614 31.1634L12.0255 31.1073L14.908 26.1472C17.5659 21.5427 17.7905 21.1122 17.7905 20.2325C17.7905 19.3902 17.9589 18.9971 19.4002 16.489C20.2799 14.9542 21.2719 13.2509 21.5714 12.7081C22.0206 11.9407 22.2265 11.7348 22.5447 11.7722C22.7693 11.8097 22.9565 11.9781 22.9939 12.2214ZM31.7349 21.393C33.251 24.0134 34.5987 26.1472 34.711 26.1472C35.3286 26.1472 36.433 27.5884 38.2673 30.8265C39.3529 32.717 40.2513 34.4202 40.2513 34.5887C40.2513 34.8694 39.8957 35.1315 39.5026 35.1315C39.4277 35.1315 38.8475 34.2518 38.2111 33.1662C37.3875 31.7436 36.9945 31.2383 36.7886 31.3132C36.6389 31.388 36.5078 31.4629 36.5078 31.519C36.5078 31.5752 37.1068 32.6795 37.8555 33.971C38.8849 35.7866 39.147 36.3668 38.9972 36.6102C38.5667 37.3027 38.155 36.9284 36.826 34.6074C35.6094 32.5298 35.1976 32.0618 34.9356 32.4736C34.8981 32.5485 35.5345 33.8026 36.3581 35.2251C37.8742 37.9017 38.0052 38.407 37.1442 38.407C36.8822 38.407 36.3768 37.6958 35.2912 35.824C33.9248 33.4656 33.5131 32.9977 33.251 33.4095C33.1949 33.5031 33.7377 34.57 34.4489 35.8053C35.834 38.145 35.9837 38.7814 35.2163 38.7814C34.8233 38.7814 34.5238 38.3696 33.0638 35.8428C32.128 34.2331 31.267 32.8105 31.136 32.6795C30.7616 32.3052 30.6119 33.0351 30.9488 33.6154C31.9595 35.3374 31.9408 35.2812 31.6413 35.824C31.4916 36.0861 31.2857 36.3481 31.1734 36.3668C31.0049 36.423 29.2455 33.4656 28.946 32.6234C28.8899 32.4362 28.9647 31.5378 29.1519 30.6393L29.4514 29.0109L27.8604 26.2407L26.2507 23.4706L26.6999 23.0775C27.1679 22.647 29.2081 19.203 29.2081 18.8287C29.2081 18.3982 28.5904 17.9115 28.0476 17.9115H27.5048L28.0289 16.9757C28.4781 16.1708 28.5904 16.0772 28.7776 16.3393C28.8899 16.5077 30.2188 18.7725 31.7349 21.393ZM27.3176 26.7461C28.6091 28.9735 28.684 29.1607 28.553 29.9281C28.3096 31.519 28.6278 31.388 25.0341 31.388L21.8147 31.3693L21.0286 30.6393L20.2424 29.8906L21.7773 27.214L23.3308 24.5562L24.4351 24.1631C25.4646 23.7888 25.5769 23.7888 25.7641 24.0695C25.8764 24.238 26.5689 25.4359 27.3176 26.7461ZM20.3922 31.0137L21.6837 32.1367L24.9218 32.1741L28.1599 32.2303L28.2909 32.7918C28.3845 33.2972 30.0691 36.3668 30.5557 36.9471C30.8739 37.3214 31.4354 37.2278 31.9595 36.7037C32.3339 36.3294 32.4836 36.2733 32.6146 36.4791C32.8767 36.8722 33.3259 37.7145 33.3259 37.8455C33.3259 37.9017 30.7616 37.9391 27.6171 37.9391C21.9832 37.9391 21.8896 37.9391 21.3281 38.3509C20.7853 38.7627 20.5794 38.7814 16.2182 38.8375C12.4747 38.875 11.6325 38.8375 11.4453 38.6316C11.333 38.4819 11.2768 38.2199 11.3517 38.0701C11.4453 37.8081 11.8571 37.7519 13.7288 37.7145C15.7128 37.6583 16.0123 37.6209 16.0685 37.3401C16.1246 37.0407 15.8626 37.0032 13.2609 36.9658C10.3971 36.9096 10.3971 36.9096 10.341 36.4604C10.3035 36.2171 10.3784 35.9363 10.5281 35.8615C10.6592 35.7679 11.9694 35.693 13.448 35.693C15.5818 35.693 16.1059 35.6369 16.1059 35.431C16.1059 35.0379 15.4882 34.9443 12.5309 34.9443C10.1725 34.9443 9.76073 34.9069 9.66714 34.6448C9.4051 33.9523 9.85432 33.84 12.9988 33.7838C15.5257 33.7277 16.0123 33.6903 16.0123 33.4469C16.0123 33.2223 15.5257 33.1475 13.2047 33.0726L10.3971 32.979V32.5111V32.0431L14.1406 31.9495C17.3038 31.8747 17.8841 31.8185 17.8841 31.5752C17.8841 31.3506 17.5846 31.2757 16.5364 31.2383C15.3385 31.1821 15.1326 31.126 14.7957 30.6955C14.5898 30.4334 14.4214 30.134 14.4214 30.0591C14.4214 29.9655 15.4695 29.8906 16.761 29.8906H19.082L20.3922 31.0137Z"
                  fill="white"
                />
              </svg>

              <h4 className={style.info__title_2}>Современное оборудование</h4>
              <p className={style.info__text_2}>
                Мы оснащены промышленными швейными машинами разных типов, включая прямострочные, оверлочные, и остальные
                спец машинки, чтобы точно соответствовать различным швейным задачам.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
