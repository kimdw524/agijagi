import {
  ChildRequest,
  DeleteChildImageRequest,
  DeleteChildRequest,
  EditChildImageRequest,
  EditChildInfoRequest,
} from '../types/child';
import { BabyResponse } from '../types/user';
import { axiosInstance } from './axiosInstance';

export const getChild = async (childId: number): Promise<BabyResponse> => {
  const response = await axiosInstance.get(`/children/${childId}`);
  return response.data;
};

export const addChild = async (child: ChildRequest): Promise<number> => {
  const formData = new FormData();

  formData.append('name', child.name);
  formData.append('nickname', child.nickname);
  formData.append('gender', child.gender);
  formData.append('birthday', child.birthday);
  formData.append('birthHeight', child.birthHeight);
  formData.append('birthWeight', child.birthWeight);

  // 이미지가 있는 경우에만 추가
  if (child.image) {
    formData.append('image', child.image);
  }

  const response = await axiosInstance.post(`/children`, formData);

  return response.status;
};

export const editChildInfo = async (request: EditChildInfoRequest) => {
  const newRequest = {
    name: request.name,
    nickname: request.nickname,
    gender: request.gender,
    birthday: request.birthday,
  };

  const response = await axiosInstance.patch(
    `/children/${request.childId}`,
    newRequest
  );

  return response;
};

export const editChildImage = async (request: EditChildImageRequest) => {
  const formData = new FormData();
  if (request.image) {
    formData.append('image', request.image);
  }
  const response = await axiosInstance.patch(
    `children/${request.childId}/image`,
    formData
  );
  return response;
};

export const deleteChildImage = async (request: DeleteChildImageRequest) => {
  const response = await axiosInstance.delete(
    `children/${request.childId}/image`
  );
  return response;
};

export const deleteChild = async (request: DeleteChildRequest) => {
  const response = await axiosInstance.delete(`children/${request.childId}`);
  return response;
};
