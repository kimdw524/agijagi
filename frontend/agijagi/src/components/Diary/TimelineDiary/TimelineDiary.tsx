import { DiaryContent } from '../DiaryContent/DiaryContent';
import MediaSlider from '../MediaSlider';

import Typhography from '../../common/Typography';
import {
  Container,
  DateContainer,
  DateDiv,
  DayContainer,
} from './Timeline.styles';
import moment from 'moment';
import { BabyResponse } from '../../../types/user';

interface TimelineDiaryProps {
  date: string;
  urlList: string[];
  DiaryText: string;
  child?: BabyResponse;
}

export const TimelineDiary = ({
  date,
  urlList,
  DiaryText,
  child,
}: TimelineDiaryProps) => {
  const formattedDate = moment(date).format('YYYY년 M월 D일');
  const differenceIndays = moment(date).diff(
    moment(child?.birthday, 'YYYY-MM-DD'),
    'days'
  );

  return (
    <Container>
      <DayContainer>
        <DateContainer>
          <Typhography size="xl" weight="bold">
            Day +
          </Typhography>
          <Typhography size="xl" weight="bold" color="primary">
            {differenceIndays ? differenceIndays : '0'}
          </Typhography>
        </DateContainer>
        <DateDiv>
          <Typhography size="xs" color="black">
            {formattedDate ? formattedDate : '2000년 1월 1일'}
          </Typhography>
        </DateDiv>
      </DayContainer>
      <MediaSlider
        urlList={urlList}
        isWriteMode={false}
        handleDelete={() => {}}
        handleUpload={() => {}}
        isInitialRender={false}
      ></MediaSlider>
      <DiaryContent DiaryText={DiaryText}></DiaryContent>
    </Container>
  );
};
