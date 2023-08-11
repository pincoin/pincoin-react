import React from 'react';
import { MdArrowDownward } from 'react-icons/md';
import Card from '../ui/layouts/Card';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const products = [
  {
    id: 1,
    title: '한게임상품권',
    discount: 3,
  },
  {
    id: 2,
    title: '구글기프트카드',
    discount: 6,
  },
  {
    id: 3,
    title: '아프리카별풍선',
    discount: 5,
  },
  {
    id: 4,
    title: '에그머니',
    discount: 9.9,
  },
  {
    id: 5,
    title: '해피머니',
    discount: 7,
  },
  {
    id: 6,
    title: '플레이스테이션',
    discount: 7,
  },
  {
    id: 7,
    title: '틴캐시',
    discount: 7,
  },
  {
    id: 8,
    title: '컬쳐랜드상품권',
    discount: 7,
  },
  {
    id: 9,
    title: '문화상품권',
    discount: 7,
  },
  {
    id: 10,
    title: '넥슨카드',
    discount: 7,
  },
  {
    id: 11,
    title: '스마트문화상품권',
    discount: 6.5,
  },
  {
    id: 12,
    title: '도서문화상품권',
    discount: 6,
  },
  {
    id: 13,
    title: '퍼니카드',
    discount: 4,
  },
  {
    id: 14,
    title: '요기요',
    discount: 4,
  },
  {
    id: 15,
    title: '온캐시',
    discount: 4,
  },
  {
    id: 16,
    title: '아이템베이선불쿠폰',
    discount: 3,
  },
  {
    id: 17,
    title: '매니아선불쿠폰',
    discount: 3,
  },
  {
    id: 18,
    title: '와우캐시',
    discount: 2.15,
  },
  {
    id: 19,
    title: 'N코인',
    discount: 1.01,
  },
];

const Home = () => {
  return (
    <>
      <div className="bg-gray-300">이미지 배너</div>

      <ContainerFixed className="px-2 py-4">
        <div className="flex flex-col gap-y-4">
          <Card className="p-1">
            <h1 className="text-orange-500 font-semibold mb-2">
              오늘의 상품권
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4">
              {products.map((product) => {
                return (
                  <div className="flex flex-col gap-y-1" key={product.id}>
                    <img
                      src="https://via.placeholder.com/640x480"
                      className="h-auto max-w-full rounded"
                      alt={product.title}
                    />
                    <div className="text-center">{product.title}</div>
                    <div className="text-center">
                      최대{' '}
                      <span className="inline-flex items-center text-red-600">
                        {product.discount.toFixed(2)}% <MdArrowDownward />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
            <div className="flex-1 ">
              <Card className="p-1">상품권 금융사기 예방 수칙</Card>
            </div>
            <div className="flex-1">
              <Card className="p-1">핀코인 대표몰 / 핀코인 카드몰</Card>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
            <div className="flex-1">
              <Card className="p-1">공지사항</Card>
            </div>
            <div className="flex-1">
              <Card className="p-1">핀코인 이용후기</Card>
            </div>
          </div>
          <div className="bg-gray-300">광고배너</div>
          <Card className="p-1">
            <div>베스트셀러</div>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 bg-neutral-100 rounded p-4">
            <div className="text-center">
              <p className="mb-2">고객센터: 매일 오전10시~밤11시</p>
              <p className="font-bold">070-4517-1801</p>
            </div>
            <div className="text-center font-bold">
              365일/24시간 실시간 발송
            </div>
            <div className="text-center">매월1일 새벽2시 연장근무</div>
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
