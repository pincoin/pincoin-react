import React from 'react';
import Card from '../ui/layouts/Card';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const Home = () => {
  return (
    <>
      <div className="bg-gray-300">이미지 배너</div>

      <ContainerFixed className="px-2 py-4">
        <div className="flex flex-col gap-y-4">
          <Card className="p-1">
            <div>오늘의 상품권</div>
          </Card>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
            <div className="flex-1">
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
            <div className="text-center font-bold">365일/24시간 실시간 발송</div>
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
