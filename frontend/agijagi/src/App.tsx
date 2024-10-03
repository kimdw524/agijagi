import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WritingDiary from './pages/WritingDiary';
import RecordPage from './pages/RecordPage';
import SchedulePage from './pages/SchedulePage';
import BabyMain from './pages/Baby/BabyMain';
import Login from './pages/Login';
import BoardPage from './pages/BoardPage';
import WriteArticlePage from './pages/BoardPage/WritePage';
import GlobalStyle from './styles/GlobalStyle';
import { ModalProvider } from './hooks/useModal';
import Signup from './pages/Signup';
import { Welcome } from './pages/Signup/Welcome';
import { BabyInfoForm } from './pages/Baby/BabyInfoForm/BabyInfoForm';
import { Main } from './pages/Main';
import BabyProfile from './pages/BabyProfile';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ModalProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/record" element={<RecordPage />} />
              <Route path="/family" element={<BabyMain />} />
              <Route path="/family/profile" element={<BabyProfile />} />
              <Route path="/family/writing" element={<WritingDiary />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/babyform" element={<BabyInfoForm />} />
              <Route path="/board" element={<BoardPage />} />
              <Route path="/main" element={<Main />} />
              <Route path="/board/write" element={<WriteArticlePage />} />
            </Routes>
          </ModalProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
