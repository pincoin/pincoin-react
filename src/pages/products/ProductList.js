import React from 'react';
import { MdArrowDownward, MdShoppingBag } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import IconTextButton from '../../ui/buttons/IconTextButton';
import Card from '../../ui/layouts/Card';
import ContainerFixed from '../../ui/layouts/ContainerFixed';

const messages = [
  '넥슨 게임에서 만 18세 이상 성인 주민등록번호 계정 당 월 50만원 한도입니다. 매월 1일 초기화 됩니다.',
  '월 50만원 한도에서 넥슨카드로는 월 20만원까지 충전 가능합니다.',
  '상기 규정은 넥슨 본사 정책에 의해 상시 변경될 수 있습니다.',
];

const products = [
  {
    id: 1,
    title: '넥슨카드',
    subtitle: '5만원',
    slug: '넥슨5만',
    price: 46500,
    discount: 7,
  },
  {
    id: 2,
    title: '넥슨카드',
    subtitle: '3만원',
    slug: '넥슨3만',
    price: 27900,
    discount: 7,
  },
  {
    id: 3,
    title: '넥슨카드',
    subtitle: '1만원',
    slug: '넥슨1만',
    price: 9300,
    discount: 7,
  },
  {
    id: 4,
    title: '넥슨카드',
    subtitle: '5천원',
    slug: '넥슨5천',
    price: 4650,
    discount: 7,
  },
  {
    id: 5,
    title: '넥슨카드',
    subtitle: '3천원',
    slug: '넥슨3천',
    price: 2790,
    discount: 7,
  },
  {
    id: 6,
    title: '넥슨카드',
    subtitle: '1천원',
    slug: '넥슨1만',
    price: 1000,
    discount: 0,
  },
];

const ProductList = () => {
  const params = useParams();

  return (
    <>
      <ContainerFixed className="px-2 py-4">
        <div className="flex flex-col gap-y-4">
          <ul className="bg-sky-50 px-2 md:px-4 py-1 rounded">
            {messages.map((message, idx) => {
              return (
                <li key={idx} className="py-1 list-disc list-inside">
                  <span className="-mx-2.5">
                    {message}
                  </span>
                </li>
              );
            })}
          </ul>
          <Card className="">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4">
              {products.slice(0, 6).map((product) => {
                return (
                  <div className="flex flex-col" key={product.id}>
                    <Link to={`/products/${params.product}/${product.slug}`}>
                      <img
                        src="https://via.placeholder.com/640x480"
                        className="h-auto max-w-full rounded-t border border-green-950"
                        alt={product.title}
                      />
                    </Link>
                    <div className="border-x border-b border-x-green-150 border-b-green-150 gap-y-2 py-2">
                      <p className="text-center">{product.title}</p>
                      <p className="text-center">{product.subtitle}</p>
                      <p className="text-center font-bold">
                        {new Intl.NumberFormat('ko-KR', {
                          style: 'currency',
                          currency: 'KRW',
                        }).format(product.price)}
                      </p>
                      <p className="text-center">
                        <span className="inline-flex items-center text-red-600">
                          {product.discount.toFixed(2)}%
                          <MdArrowDownward className="ml-1" />
                        </span>
                      </p>
                    </div>
                    <div className="border-x border-b border-x-green-150 border-b-green-150 rounded-b bg-gray-50 text-center py-2">
                      <IconTextButton className="border border-gray-900 px-2 py-1 rounded bg-gray-200">
                        <MdShoppingBag />
                        <span>담기</span>
                      </IconTextButton>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </ContainerFixed>
    </>
  );
};

export default ProductList;
