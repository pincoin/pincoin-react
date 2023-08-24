import React from 'react';
import { MdArrowRight } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import ContainerFixed from '../../ui/layouts/ContainerFixed';

const ProductDetail = () => {
  const { product, slug } = useParams();

  return (
    <ContainerFixed className="px-2 py-2">
      <div className="flex flex-col gap-y-4">
        <div className="flex bg-gray-100 px-4 py-2 rounded">
          <ol className="flex items-center gap-x-1">
            <li>
              <div>
                <Link to="/" className="text-gray-800 hover:text-gray-950">
                  <span>홈</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <MdArrowRight />
                <a href="#" className="ml-1 text-gray-800 hover:text-gray-950">
                  넥슨카드
                </a>
              </div>
            </li>
          </ol>
        </div>
        <h1 className="text-orange-500 font-semibold border-l-4 border-orange-600 pl-2">
          상세설명
        </h1>
        <div className="grid grid-cols-12 gap-x-4 gap-y-2">
          <div className="col-span-5 md:col-span-2 order-1">
            <img
              src="https://via.placeholder.com/640x480"
              className="h-auto max-w-full rounded border border-green-950 max-h-32"
              alt=""
            />
          </div>
          <div className="col-span-12 order-3 md:col-span-7 md:order-2">
            설명
          </div>
          <div className="col-span-7 order-2 md:col-span-3 md:order-3 flex flex-col gap-y-2">
            <h2 className="text-xl font-bold">{product} 5만원</h2>
            <p>
              정가: <strike>50,000</strike>
            </p>
            <p>판매가: 46,500 </p>
            <p>할인율: 7.00%</p>
          </div>
        </div>
        <h1 className="text-orange-500 font-semibold border-l-4 border-orange-600 pl-2">
          추가정보
        </h1>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-amber-500 font-semibold border-l-4 border-amber-600 pl-2">
            상품권 발송 안내
          </h2>
          <ul className="list-disc list-inside gap-y-2 leading-relaxed px-2 py-1">
            <li>
              <span className="-mx-2">
                상품권 확인은 사이트 [주문내역] 에서 확인합니다.
              </span>
            </li>
            <li>
              <span className="-mx-2">
                메뉴의 [마이페이지]에서 모든 본인인증 절차를 완료하신 경우 최대
                10분 이내로 상품권을 확인할 수 있습니다.
              </span>
            </li>
            <li>
              <span className="-mx-2">
                모든 본인인증 절차를 완료하시고도 10분 이내로 상품권을 확인하지
                못한 경우 [고객문의]에 주문번호, 입금은행, 입금시각을
                남겨주세요.
              </span>
            </li>
            <li>
              <span className="-mx-2">
                한국 시각 밤 11시 이후 20만원 이상 주문은 한국 시각 오전 10시
                이후에 순차적으로 발송될 수 있습니다.
              </span>
            </li>
          </ul>
          <h2 className="text-amber-500 font-semibold border-l-4 border-amber-600 pl-2">
            교환 및 환불 안내
          </h2>
          <ul className="list-disc list-inside gap-y-2 leading-relaxed px-2 py-1">
            <li>
              <span className="-mx-2">
                상품권을 받기 전에 고객님의 교환 또는 환불 요청은 요청일로부터
                은행 영업일 기준으로 3~4일 이내에 처리됩니다.
              </span>
            </li>
            <li>
              <span className="-mx-2">
                상품권을 받으신 경우 해당 상품권을 사용하지 않은 경우에 한하여
                구매일로부터 3일 이내에만 교환 또는 환불 요청 가능합니다.
              </span>
            </li>
            <li>
              <span className="-mx-2">
                상품권을 받으신 후에 교환 또는 환불을 원하실 경우 요청일로부터
                은행 영업일 기준으로 5~7일 이내에 처리됩니다. 환불 수수료 500원
                차감한 금액이 환불 입금처리됩니다.
              </span>
            </li>
          </ul>
          <h2 className="text-amber-500 font-semibold border-l-4 border-amber-600 pl-2">
            상품권 구매 한도 안내
          </h2>
          <ul className="list-disc list-inside gap-y-2 leading-relaxed px-2 py-1">
            <li>
              <span className="-mx-2">
                컬쳐랜드상품권, 해피머니, 도서문화상품권, 구글기프트카드를
                포함하고 일일 액면가 기준 누계 20만원 이상 첫 구매 시 반드시
                서류본인인증을 완료해야 합니다.
              </span>
            </li>
            <li>
              <span className="-mx-2">
                계좌이체로 일일 액면가 기준 누계 30만원 이상 첫 구매 시 반드시
                서류본인인증을 완료해야 합니다.
              </span>
            </li>
            <li>
              <span className="-mx-2">
                페이팔로 최근30일 이내 액면가 기준 누계 15만원 이상 구매 시
                반드시 한국 신분증으로 서류본인인증을 완료해야 합니다.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </ContainerFixed>
  );
};

export default ProductDetail;
