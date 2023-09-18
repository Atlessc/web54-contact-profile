import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';

function App() {
  const [vCardData, setVCardData] = useState('');

  useEffect(() => {
    // This is a basic vCard format with name and url
    const data = `BEGIN:VCARD
VERSION:3.0
N:Gump;Forrest;;Mr.;
FN:Forrest Gump
URL:http://www.example.com
END:VCARD`;

    setVCardData(data);
  }, []);

  const handleAddContact = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    saveAs(blob, 'contact.vcf');
  };

  return (
    <div>
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
}

export default App;
