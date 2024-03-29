import React from 'react';
import { FaCcPaypal, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import IconButton from '../ui/buttons/IconButton';
import IconTextButton from '../ui/buttons/IconTextButton';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const Footer = (props) => {
  return (
    <footer
      className={`${props.className ? props.className : ''} flex flex-col`}
    >
      <div className="bg-green-50 text-green-950">
        <ContainerFixed className="flex flex-col p-2 gap-y-2">
          <div className="flex-1 flex flex-col md:flex-row justify-between gap-y-2">
            <div className="inline-flex flex-wrap gap-x-4 gap-y-2">
              <Link to="/">이용안내</Link>
              <Link to="/">자주묻는질문</Link>
              <Link to="/">문의하기</Link>
              <Link to="/">이용약관</Link>
              <Link to="/">개인정보처리방침</Link>
              <Link to="/">카드몰</Link>
              <Link to="/">블로그</Link>
              <Link to="/">기술문서</Link>
            </div>
            <div className="inline-flex gap-x-2">
              <div>
                <label htmlFor="language" className="hidden">
                  언어
                </label>
                <select
                  id="language"
                  name="language"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-sm leading-6"
                >
                  <option value="한국어">한국어</option>
                  <option value="English">English</option>
                </select>
              </div>

              <div>
                <label htmlFor="currency" className="hidden">
                  통화
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-sm leading-6"
                >
                  <option value="KRW">KRW</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <IconButton>
                <FaFacebookSquare className="text-2xl text-[#4267B2]" />
              </IconButton>
              <IconButton>
                <FaTwitterSquare className="text-2xl text-[#1DA1F2]" />
              </IconButton>
              <IconButton>
                <FaCcPaypal className="text-2xl text-[#012169]" />
              </IconButton>
            </div>
          </div>
          <div className="text-lime-500 text-lg font-bold">주식회사 핀코인</div>
          <div className="flex flex-col md:flex-row gap-y-2 gap-x-4">
            <div>대표: 서종화</div>
            <div>주소: 서울 서초구 방배로 32길 8, 203호</div>
            <div>
              사업자등록번호:
              <a
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1638101158"
                target="_blank"
              >
                163-81-01158
              </a>
            </div>
            <div>통신판매업신고: 2019-서울서초-0835</div>
            <div>
              <IconTextButton>
                <MdPhone />
                <span>070-4517-1801</span>
              </IconTextButton>
            </div>
            <div>
              <IconTextButton>
                <MdEmail />
                <a href="mailto:help@pincoin.co.kr">help@pincoin.co.kr</a>
              </IconTextButton>
            </div>
          </div>
        </ContainerFixed>
      </div>
      <div className="bg-green-950 text-center text-sm">
        <div className="flex flex-col md:flex-row gap-x-4 py-2 text-white text-center">
          <div className="flex-1 md:text-right">
            Copyright &copy; 2012-2023 {window.location.hostname}
          </div>
          <div className="flex-1 md:text-left">All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
