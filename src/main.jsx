import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import ptBR from 'antd/lib/locale/pt_BR';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={ptBR} >
    <App />
  </ConfigProvider>
)
