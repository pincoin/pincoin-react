import React from 'react';
import { MdArrowDownward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Card from '../ui/layouts/Card';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const products = [
  {
    id: 1,
    title: '한게임상품권',
    slug: '한게임상품권',
    discount: 3,
  },
  {
    id: 2,
    title: '구글기프트카드',
    slug: '구글기프트카드',
    discount: 6,
  },
  {
    id: 3,
    title: '아프리카별풍선',
    slug: '아프리카별풍선',
    discount: 5,
  },
  {
    id: 4,
    title: '에그머니',
    slug: '에그머니',
    discount: 9.9,
  },
  {
    id: 5,
    title: '해피머니',
    slug: '해피머니',
    discount: 7,
  },
  {
    id: 6,
    title: '플레이스테이션',
    slug: '플레이스테이션',
    discount: 7,
  },
  {
    id: 7,
    title: '틴캐시',
    slug: '틴캐시',
    discount: 7,
  },
  {
    id: 8,
    title: '컬쳐랜드상품권',
    slug: '컬쳐랜드상품권',
    discount: 7,
  },
  {
    id: 9,
    title: '문화상품권',
    slug: '문화상품권',
    discount: 7,
  },
  {
    id: 10,
    title: '넥슨카드',
    slug: '넥슨카드',
    discount: 7,
  },
  {
    id: 11,
    title: '스마트문화상품권',
    slug: '스마트문화상품권',
    discount: 6.5,
  },
  {
    id: 12,
    title: '도서문화상품권',
    slug: '도서문화상품권',
    discount: 6,
  },
  {
    id: 13,
    title: '퍼니카드',
    slug: '퍼니카드',
    discount: 4,
  },
  {
    id: 14,
    title: '요기요',
    slug: '요기요',
    discount: 4,
  },
  {
    id: 15,
    title: '온캐시',
    slug: '온캐시',
    discount: 4,
  },
  {
    id: 16,
    title: '아이템베이선불쿠폰',
    slug: '아이템베이선불쿠폰',
    discount: 3,
  },
  {
    id: 17,
    title: '매니아선불쿠폰',
    slug: '매니아선불쿠폰',
    discount: 3,
  },
  {
    id: 18,
    title: '와우캐시',
    slug: '와우캐시',
    discount: 2.15,
  },
  {
    id: 19,
    title: 'N코인',
    slug: 'N코인',
    discount: 1.01,
  },
];

const Home = () => {
  return (
    <>
      <div className="bg-gray-300">이미지 배너</div>

      <ContainerFixed className="px-2 py-4">
        <div className="flex flex-col gap-y-4">
          <Card>
            <h1 className="text-orange-500 font-semibold border-l-4 border-orange-600 pl-2 mb-2">
              오늘의 상품권
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4">
              {products.map((product) => {
                return (
                  <div className="flex flex-col gap-y-1" key={product.id}>
                    <Link to={`/products/${product.slug}`}>
                      <img
                        src="https://via.placeholder.com/640x480"
                        className="h-auto max-w-full rounded border border-green-950"
                        alt={product.title}
                      />
                    </Link>
                    <div className="text-center">{product.title}</div>
                    <div className="text-center">
                      최대
                      <span className="ml-1 inline-flex items-center text-red-600">
                        {product.discount.toFixed(2)}% <MdArrowDownward />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
            <div className="basis-2/3">
              <Card>
                <h1 className="text-red-600 font-semibold border-l-4 border-orange-600 pl-2 mb-2">
                  상품권 금융사기 예방 수칙
                </h1>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="-mx-2">
                      다른 사람으로부터 상품권 구매로 일부 또는 전체 금액을 입금
                      받기로 했습니까?
                    </span>
                  </li>
                  <li>
                    <span className="-mx-2">
                      상품권 일부 또는 전체를 대리구매 하여 카카오톡 등 메신저로
                      다른 사람에게 주기로 했습니까?
                    </span>
                  </li>
                  <li>
                    <span className="-mx-2">
                      네이트온/카카오톡 등 메신저에서 지인이 급한 돈이
                      필요하다고 상품권을 요구했습니까?
                    </span>
                  </li>
                  <li>
                    <span className="-mx-2">
                      당근마켓, 중고나라 등에서 물품대금을 현금 대신 상품권으로
                      요구 받았습니까?
                    </span>
                  </li>
                  <li>
                    <span className="-mx-2">
                      위 질문 중 하나라도 해당하면 사기꾼과 메신저 또는 전화
                      연락을 끊고 바로 경찰서에 연락하시기 바랍니다.
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="basis-1/3">
              <Card>
                <h1 className="text-orange-500 font-semibold border-l-4 border-orange-600 pl-2 mb-2">
                  핀코인 대표몰 / 핀코인 카드몰
                </h1>
                <ul className="space-y-2">
                  <li>
                    <button className="bg-sky-400 w-full p-1 rounded text-white">
                      카드몰에서 상품권 구입하기
                    </button>
                  </li>
                  <li>대표몰: 계좌이체, 에스크로, 페이팔 결제</li>
                  <li>
                    카드몰: 신용카드, 휴대폰 결제
                    <ul className="mt-2 space-y-2 pl-2 list-disc list-inside">
                      <li>
                        <span className="-mx-2">
                          카드사별 월간 한도 100만원
                        </span>
                      </li>
                      <li>
                        <span className="-mx-2">
                          개인카드, 일시불, 소득공제 제외
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
            <div className="flex-1">
              <Card>
                <h1 className="text-orange-500 font-semibold border-l-4 border-orange-600 pl-2 mb-2">
                  공지사항
                </h1>
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <div>[일반] 제목</div>
                    <div>2023.07.03</div>
                  </div>
                  <div className="flex justify-between">
                    <div>[일반] 제목</div>
                    <div>2023.07.03</div>
                  </div>
                  <div className="flex justify-between">
                    <div>[일반] 제목</div>
                    <div>2023.07.03</div>
                  </div>
                  <div className="flex justify-between">
                    <div>[일반] 제목</div>
                    <div>2023.07.03</div>
                  </div>
                  <div className="flex justify-between">
                    <div>[일반] 제목</div>
                    <div>2023.07.03</div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex-1">
              <Card>
                <h1 className="text-orange-500 font-semibold border-l-4 border-orange-600 pl-2 mb-2">
                  핀코인 이용후기
                </h1>
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <div>이용후기 12345</div>
                    <div>2023.07.03</div>
                  </div>
                  <div className="flex justify-between">
                    <div>이용후기 12345</div>
                    <div>2023.07.03</div>
                  </div>
                  <div className="flex justify-between">
                    <div>이용후기 12345</div>
                    <div>2023.07.03</div>
                  </div>
                  <div className="flex justify-between">
                    <div>이용후기 12345</div>
                    <div>2023.07.03</div>
                  </div>
                  <div className="flex justify-between">
                    <div>이용후기 12345</div>
                    <div>2023.07.03</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="bg-gray-300">광고배너</div>
          <Card>
            <h1 className="text-orange-500 font-semibold border-l-4 border-orange-600 pl-2 mb-2">
              베스트셀러
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4">
              {products.slice(0, 6).map((product) => {
                return (
                  <div className="flex flex-col gap-y-1" key={product.id}>
                    <Link to={`/products/${product.slug}`}>
                      <img
                        src="https://via.placeholder.com/640x480"
                        className="h-auto max-w-full rounded border border-green-950"
                        alt={product.title}
                      />
                    </Link>
                    <div className="text-center">{product.title}</div>
                    <div className="text-center">
                      최대
                      <span className="ml-1 inline-flex items-center text-red-600">
                        {product.discount.toFixed(2)}% <MdArrowDownward />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 bg-neutral-100 rounded p-4">
            <div className="text-center font-bold">
              365일/24시간 실시간 발송
            </div>
            <div className="text-center">
              고객센터: 매일 오전 10시 ~ 밤 11시
            </div>
            <div className="text-center">매월 1일 새벽 2시까지 연장근무</div>
            <div className="text-sm text-gray-700 md:col-span-3 text-center">
              고객센터 메뉴에서 문의를 남겨주시면 바로 답변 또는
              전화연락드립니다.
            </div>
          </div>
        </div>
      </ContainerFixed>
    </>
  );
};

export default Home;
