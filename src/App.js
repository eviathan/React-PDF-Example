import { PDF } from './PDF';
import './App.css';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'

function App() {
  return (
    <div className="App">
       <PDFDownloadLink document={<PDF />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
      
    </div>
  );
}

export default App;
