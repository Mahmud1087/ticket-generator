import { ConfigProvider } from 'antd';
import AppRoutes from './app-routes';
import ContainerWrapper from './components/common/container-wrapper';
import Navbar from './components/navbar/navbar';
import { GlobalContextProvider } from './store';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: 'rgba(25, 118, 134)', // Tailwind's blue-500
            hoverBorderColor: 'rgba(25, 118, 134)',
            // colorPrimaryHover: 'red',
            colorBgContainer: 'transparent',
          },
        },
      }}
    >
      <GlobalContextProvider>
        <ContainerWrapper>
          <Navbar />
          <div className='relative flex items-center justify-center w-full h-full'>
            <AppRoutes />
          </div>
        </ContainerWrapper>
      </GlobalContextProvider>
    </ConfigProvider>
  );
};
export default App;
