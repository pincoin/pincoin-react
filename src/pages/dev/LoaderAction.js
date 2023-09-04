import React, {useState} from 'react';
import {Form, useActionData, useLoaderData, useParams, useSearchParams} from 'react-router-dom';
import {useFetchUsersQuery} from '../../store/apis/usersApi';

const LoaderAction = () => {
  console.log('component');
  // const { userId } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  // // const loaderData = useLoaderData();
  // const actionData = useActionData();

  const { data, error, isLoading} = useFetchUsersQuery();

  const [counter, setCounter] = useState(0);

  console.log(data, error, isLoading);

  return (
    <div>
      <Form method="post">
        <input type="text" name="x" />
        <button type="submit">save</button>
      </Form>
    </div>
  );
};

export const loader = async ({ request, params }) => {
  // 파라미터 입력 검증 용도 / 오류 없으면 바로 반환
  console.log('loader', request, params);

  return null;
};

export const action = async ({ request, params }) => {
  // 파라미터 입력 및 폼 데이터 검증 용도 / 오류 없으면 바로 반환
  const formData = await request.formData();

  console.log('action', request, params, formData);

  return null;
};

export default LoaderAction;
